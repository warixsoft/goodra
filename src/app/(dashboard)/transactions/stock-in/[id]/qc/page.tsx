"use client";

import Link from "next/link";
import { use } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { SelectField } from "@/components/ui/form-field";

export default function StockInQcPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <AppShell breadcrumbs={[{ label: "Stock In", href: "/transactions/stock-in" }, { label: id }, { label: "Start QC" }]}>
      <PageHeader
        title={`QC — ${id}`}
        actions={
          <>
            <Link href={`/transactions/stock-in/${id}`}>
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button>Submit QC</Button>
          </>
        }
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="space-y-4 p-5">
          <h3 className="font-semibold">Receiving checklist</h3>
          {["Packaging intact", "Quantity matches ASN", "No damage", "Label readable"].map((c) => (
            <label key={c} className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="h-4 w-4 rounded border-border" defaultChecked />
              {c}
            </label>
          ))}
          <SelectField label="Receiving result" options={["Accepted", "Partial", "Rejected"]} />
        </Card>
        <Card className="p-5">
          <h3 className="mb-3 font-semibold">Evidence</h3>
          <div className="flex h-48 items-center justify-center rounded-[12px] border border-dashed border-border bg-surface text-sm text-text-secondary">
            Upload photos / documents
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
