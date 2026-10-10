"use client";

import { useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Steps } from "@/components/ui/steps";
import { SelectField, TextField } from "@/components/ui/form-field";
import { useState } from "react";

export default function MoveBinItemPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  return (
    <AppShell breadcrumbs={[{ label: "Bin Location", href: "/bins" }, { label: "Move Item" }]}>
      <PageHeader title="Move Item" subtitle="Transfer stock from one bin location to another." />
      <Steps steps={["Select item", "Target bin", "Confirm"]} current={step} />
      <Card className="max-w-xl space-y-4 p-5">
        {step === 0 && (
          <>
            <SelectField label="Source bin" options={["BIN-A01-01-01", "BIN-A01-01-02", "BIN-B01-01-03"]} />
            <SelectField label="SKU" options={["SKN-001", "SKN-014", "SKN-031"]} />
            <TextField label="Quantity" type="number" defaultValue="12" />
          </>
        )}
        {step === 1 && (
          <>
            <SelectField label="Target warehouse" options={["WH-001", "WH-002"]} />
            <SelectField label="Target bin" options={["BIN-A01-02-01", "BIN-A01-01-03"]} />
          </>
        )}
        {step === 2 && (
          <div className="space-y-2 text-sm">
            <p className="font-medium">Confirm move</p>
            <p className="text-text-secondary">Move 12 pcs of SKN-001 from BIN-A01-01-01 to BIN-A01-02-01.</p>
          </div>
        )}
        <div className="flex justify-end gap-2 pt-2">
          {step > 0 && (
            <Button variant="outline" onClick={() => setStep((s) => s - 1)}>
              Back
            </Button>
          )}
          <Button
            onClick={() => {
              if (step < 2) setStep((s) => s + 1);
              else router.push("/bins/move/success");
            }}
          >
            {step < 2 ? "Continue" : "Confirm move"}
          </Button>
        </div>
      </Card>
    </AppShell>
  );
}
