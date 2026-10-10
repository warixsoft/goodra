import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";

export default function CheckEmailPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-6 py-12">
      <div className="card w-full max-w-[440px] p-8 text-center">
        <Logo href="/sign-in" className="mb-8 justify-center" />
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-600">
          <Mail className="h-7 w-7" />
        </div>
        <h1 className="text-2xl font-semibold text-text">Check your email</h1>
        <p className="mt-2 text-sm text-text-secondary">
          We sent a password reset link. Open it to create a new password.
        </p>
        <Link href="/reset-password/create" className="mt-6 block">
          <Button className="w-full" size="lg">
            Continue
          </Button>
        </Link>
        <Link href="/sign-in" className="mt-4 block text-sm font-medium text-primary-600">
          Back to sign in
        </Link>
      </div>
    </div>
  );
}
