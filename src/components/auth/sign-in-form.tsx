"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { initiateSignIn, verifyOtp } from "@/actions/auth/sign-in";
import Link from "next/link";

const emailSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

const otpSchema = z.object({
  token: z.string().length(6, { message: "OTP must be 6 digits" }),
});

type EmailFormValues = z.infer<typeof emailSchema>;
type OtpFormValues = z.infer<typeof otpSchema>;

export default function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const { toast } = useToast();

  const emailForm = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  });

  const otpForm = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: { token: "" },
  });

  const onEmailSubmit = async (data: EmailFormValues) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("email", data.email);
      const result = await initiateSignIn(formData);
      if ("success" in result && result.success) {
        setEmail(data.email);
        setShowOtpInput(true);
        toast({
          title: "OTP Sent",
          description: "Please check your email for the OTP.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "error" in result ? result.error : "An error occurred",
        });
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error",
        description: err instanceof Error ? err.message : "An error occurred",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onOtpSubmit = async (data: OtpFormValues) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("token", data.token);
      const result = await verifyOtp(formData);
      if ("success" in result && result.success) {
        toast({
          title: "Success",
          description: "You have successfully signed in.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "error" in result ? result.error : "An error occurred",
        });
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error",
        description: err instanceof Error ? err.message : "An error occurred",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="mx-auto w-full max-w-[350px]">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-purple-800">
          Welcome Back
        </CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>
      <CardContent>
        {!showOtpInput ? (
          <Form {...emailForm}>
            <form
              onSubmit={emailForm.handleSubmit(onEmailSubmit)}
              className="space-y-4"
            >
              <FormField
                control={emailForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="youremail@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700"
                disabled={isLoading}
              >
                {isLoading ? "Sending OTP..." : "Send OTP"}
              </Button>
            </form>
          </Form>
        ) : (
          <Form {...otpForm}>
            <form
              onSubmit={otpForm.handleSubmit(onOtpSubmit)}
              className="space-y-4"
            >
              <FormField
                control={otpForm.control}
                name="token"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>OTP</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter 6-digit OTP" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700"
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Verify OTP"}
              </Button>
            </form>
          </Form>
        )}
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button
          variant="link"
          className="text-purple-600 hover:text-purple-500"
          onClick={() => setShowOtpInput(false)}
        >
          {showOtpInput ? "Back to Email" : "Forgot password?"}
        </Button>
        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-purple-600 hover:text-purple-500"
          >
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
