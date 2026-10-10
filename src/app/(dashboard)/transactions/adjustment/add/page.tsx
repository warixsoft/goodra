"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { SelectField, TextField } from "@/components/ui/form-field";

export default function AdjustmentAddPage() {
  const router = useRouter();
  return (
    <AppShell breadcrumbs={[{ label: "Stock Adjustment", href: "/transactions/adjustment" }, { label: "Add" }]}>
      <PageHeader
        title="Add Adjustment"
        actions={
          <>
            <Link href="/transactions/adjustment">
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button onClick={() => router.push("/transactions/adjustment/AD-2201")}>Submit</Button>
          </>
        }
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="space-y-4 p-5">
          <SelectField label="Reason" options={["Damaged", "Found stock", "Expired", "Recount variance"]} />
          <SelectField label="Warehouse" options={["WH-001", "WH-002", "WH-003"]} />
          <SelectField label="SKU" options={["SKN-022", "SKN-008", "SKN-014"]} />
          <SelectField label="Bin" options={["BIN-A01-01-01", "BIN-C01-01-01"]} />
          <TextField label="Quantity (+/-)" defaultValue="-3" />
        </Card>
        <Card className="p-5">
          <h3 className="mb-3 font-semibold">Evidence</h3>
          <div className="flex h-48 items-center justify-center rounded-[12px] border border-dashed border-border bg-surface text-sm text-text-secondary">
            Add photos or documents
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
