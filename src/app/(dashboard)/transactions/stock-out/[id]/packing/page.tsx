"use client";

import { use } from "react";
import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { SelectField, TextField } from "@/components/ui/form-field";

export default function StartPackingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <AppShell breadcrumbs={[{ label: "Stock Out", href: "/transactions/stock-out" }, { label: id }, { label: "Packing" }]}>
      <PageHeader
        title={`Start Packing — ${id}`}
        actions={
          <>
            <Link href={`/transactions/stock-out/${id}`}>
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button>Finish packing</Button>
          </>
        }
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="space-y-4 p-5">
          <SelectField label="Packing team" options={["Team Alpha", "Team Beta"]} />
          <SelectField label="Package type" options={["Carton S", "Carton M", "Carton L"]} />
          <TextField label="Tracking / seal no." placeholder="Optional" />
          <div className="space-y-2">
            {["Verify SKUs", "Insert invoice", "Seal carton", "Apply shipping label"].map((c) => (
              <label key={c} className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="h-4 w-4 rounded border-border" />
                {c}
              </label>
            ))}
          </div>
        </Card>
        <Card className="p-5">
          <h3 className="mb-3 font-semibold">Packing checklist progress</h3>
          <div className="h-2 overflow-hidden rounded-full bg-border">
            <div className="h-full w-1/3 rounded-full bg-primary-600" />
          </div>
          <p className="mt-2 text-sm text-text-secondary">1 of 4 steps completed</p>
        </Card>
      </div>
    </AppShell>
  );
}
