"use client";

import { useRouter } from "next/navigation";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CreatePasswordPage() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-6 py-12">
      <div className="card w-full max-w-[440px] p-8">
        <Logo href="/sign-in" className="mb-8" />
        <h1 className="text-2xl font-semibold text-text">Create new password</h1>
        <p className="mt-2 text-sm text-text-secondary">
          Your new password must be different from previously used passwords.
        </p>
        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            router.push("/reset-password/success");
          }}
        >
          <div>
            <label className="mb-1.5 block text-sm font-semibold">New password</label>
            <Input type="password" placeholder="Enter new password" required />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold">Confirm password</label>
            <Input type="password" placeholder="Confirm new password" required />
          </div>
          <Button type="submit" className="w-full" size="lg">
            Reset password
          </Button>
        </form>
      </div>
    </div>
  );
}
