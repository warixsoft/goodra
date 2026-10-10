import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";

export default function ResetSuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-6 py-12">
      <div className="card w-full max-w-[440px] p-8 text-center">
        <Logo href="/sign-in" className="mb-8 justify-center" />
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success-bg text-success">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h1 className="text-2xl font-semibold text-text">Password updated</h1>
        <p className="mt-2 text-sm text-text-secondary">
          Your password has been reset successfully. You can now sign in.
        </p>
        <Link href="/sign-in" className="mt-6 block">
          <Button className="w-full" size="lg">
            Back to sign in
          </Button>
        </Link>
      </div>
    </div>
  );
}
