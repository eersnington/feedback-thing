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
import { initiateSignUp, verifySignUpOtp } from "@/actions/auth/sign-up";
import Link from "next/link";

const signUpSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
});

const otpSchema = z.object({
  token: z.string().length(6, "OTP must be 6 digits"),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;
type OtpFormValues = z.infer<typeof otpSchema>;

export default function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const signUpForm = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const otpForm = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      token: "",
    },
  });

  const onSignUpSubmit = async (data: SignUpFormValues) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);

      const result = await initiateSignUp(formData);

      if ("success" in result && result.success) {
        setEmail(data.email);
        setShowOtpInput(true);
        toast({
          title: "OTP Sent",
          description:
            "Please check your email for the OTP to complete registration.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description:
            "error" in result
              ? result.error
              : "An error occurred during sign up",
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

      const result = await verifySignUpOtp(formData);

      if ("success" in result && result.success) {
        toast({
          title: "Sign Up Successful",
          description: "You have successfully created your account.",
        });
        // The server action will handle redirection
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description:
            "error" in result
              ? result.error
              : "An error occurred during OTP verification",
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
          Create an Account
        </CardTitle>
        <CardDescription>Sign up to get started</CardDescription>
      </CardHeader>
      <CardContent>
        {!showOtpInput ? (
          <Form {...signUpForm}>
            <form
              onSubmit={signUpForm.handleSubmit(onSignUpSubmit)}
              className="space-y-4"
            >
              <FormField
                control={signUpForm.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={signUpForm.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={signUpForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="johndoe@example.com" {...field} />
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
                {isLoading ? "Sending OTP..." : "Sign Up"}
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
      <CardFooter className="flex justify-center">
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-medium text-purple-600 hover:text-purple-500"
          >
            Sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
