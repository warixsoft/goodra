"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Steps } from "@/components/ui/steps";

export function WizardShell({
  breadcrumbs,
  title,
  steps,
  successHref,
  panels,
}: {
  breadcrumbs: { label: string; href?: string }[];
  title: string;
  steps: string[];
  successHref: string;
  panels: React.ReactNode[];
}) {
  const [step, setStep] = useState(0);
  const router = useRouter();

  return (
    <AppShell breadcrumbs={breadcrumbs}>
      <PageHeader
        title={title}
        actions={
          <Link href={breadcrumbs[0]?.href || "/"}>
            <Button variant="outline">Cancel</Button>
          </Link>
        }
      />
      <div className="overflow-x-auto pb-1">
        <Steps steps={steps} current={step} />
      </div>
      <Card className="p-4 sm:p-5">
        {panels[step]}
        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          {step > 0 && (
            <Button variant="outline" className="w-full sm:w-auto" onClick={() => setStep((s) => s - 1)}>
              Back
            </Button>
          )}
          <Button
            className="w-full sm:w-auto"
            onClick={() => {
              if (step < steps.length - 1) setStep((s) => s + 1);
              else router.push(successHref);
            }}
          >
            {step < steps.length - 1 ? "Continue" : "Submit"}
          </Button>
        </div>
      </Card>
    </AppShell>
  );
}
