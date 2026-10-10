"use client";

import { use } from "react";
import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { SelectField } from "@/components/ui/form-field";

export default function TransferPutawayPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <AppShell breadcrumbs={[{ label: "Transfer", href: "/transactions/transfer" }, { label: id }, { label: "Putaway" }]}>
      <PageHeader
        title={`Putaway — ${id}`}
        actions={
          <>
            <Link href={`/transactions/transfer/${id}`}>
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button>Complete putaway</Button>
          </>
        }
      />
      <Card className="max-w-xl space-y-4 p-5">
        <SelectField label="Target zone" options={["A-02 Bulk Storage", "B-01 Picking"]} />
        <SelectField label="Target rack" options={["R-A01-01", "R-A01-02"]} />
        <SelectField label="Target bin" options={["BIN-A01-02-01", "BIN-A01-01-03"]} />
      </Card>
    </AppShell>
  );
}
