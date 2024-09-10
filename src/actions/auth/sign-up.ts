"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { z } from "zod";

const signUpSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
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
 * Initiates the sign-up process by sending an OTP.
 * @param {FormData} formData - The form data containing first name, last name, and email.
 * @returns {Promise<ServerActionResult>} The result of the sign-up initiation.
 */
export async function initiateSignUp(
  formData: FormData,
): Promise<ServerActionResult> {
  const supabase = createClient();

  const result = signUpSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
  });

  if (!result.success) {
    return { success: false, error: "Invalid input" };
  }

  const { firstName, lastName, email } = result.data;

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
      },
      shouldCreateUser: true,
    },
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}

/**
 * Verifies the OTP and completes the sign-up process.
 * @param {FormData} formData - The form data containing the email and OTP token.
 * @returns {Promise<ServerActionResult>} The result of the OTP verification.
 */
export async function verifySignUpOtp(
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

  const { email, token } = result.data;

  const { error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: "email",
  });

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard"); // Redirect to dashboard or appropriate page after successful sign-up

  // This return is technically unreachable due to the redirect, but we'll keep it for type safety
  return { success: true };
}
