"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ResetPasswordPage() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-6 py-12">
      <div className="card w-full max-w-[440px] p-8">
        <Logo href="/sign-in" className="mb-8" />
        <h1 className="text-2xl font-semibold text-text">Reset Password</h1>
        <p className="mt-2 text-sm text-text-secondary">
          Enter your email and we&apos;ll send a link to reset your password.
        </p>
        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            router.push("/reset-password/check-email");
          }}
        >
          <div>
            <label className="mb-1.5 block text-sm font-semibold">Email</label>
            <Input type="email" placeholder="Enter your email." required />
          </div>
          <Button type="submit" className="w-full" size="lg">
            Send reset link
          </Button>
          <Link href="/sign-in" className="block text-center text-sm font-medium text-primary-600">
            Back to sign in
          </Link>
        </form>
      </div>
    </div>
  );
}
