"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().email(),
});

const otpSchema = z.object({
  email: z.string().email(),
  token: z.string().length(6),
});

export type ServerActionResult = {
  success: boolean;
  error?: string;
};

/**
 * Initiates the sign-in process by sending an OTP.
 * @param {FormData} formData - The form data containing the email.
 * @returns {Promise<ServerActionResult>} The result of the sign-in initiation.
 */
export async function initiateSignIn(
  formData: FormData,
): Promise<ServerActionResult> {
  const supabase = createClient();

  const result = emailSchema.safeParse({
    email: formData.get("email"),
  });

  if (!result.success) {
    return { success: false, error: "Invalid email address" };
  }

  const { error } = await supabase.auth.signInWithOtp({
    email: result.data.email,
    options: {
      shouldCreateUser: false,
    },
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}

/**
 * Verifies the OTP and completes the sign-in process.
 * @param {FormData} formData - The form data containing the email and OTP token.
 * @returns {Promise<ServerActionResult>} The result of the OTP verification.
 */
export async function verifyOtp(
  formData: FormData,
): Promise<ServerActionResult> {
  const supabase = createClient();

  const result = otpSchema.safeParse({
    email: formData.get("email"),
    token: formData.get("token"),
  });

  if (!result.success) {
    return { success: false, error: "Invalid input" };
  }

  const {
    data: { session },
    error,
  } = await supabase.auth.verifyOtp({
    email: result.data.email,
    token: result.data.token,
    type: "email",
  });

  if (error) {
    return { success: false, error: error.message };
  }

  if (!session) {
    return { success: false, error: "Failed to create session" };
  }

  revalidatePath("/", "layout");
  redirect("/");
}
