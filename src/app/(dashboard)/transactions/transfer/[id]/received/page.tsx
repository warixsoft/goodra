"use client";

import { use } from "react";
import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";

export default function TransferReceivedPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <AppShell breadcrumbs={[{ label: "Transfer", href: "/transactions/transfer" }, { label: id }, { label: "Received" }]}>
      <PageHeader
        title={`Receive — ${id}`}
        actions={
          <>
            <Link href={`/transactions/transfer/${id}`}>
              <Button variant="outline">Cancel</Button>
            </Link>
            <Link href={`/transactions/transfer/${id}/putaway`}>
              <Button>Confirm received</Button>
            </Link>
          </>
        }
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="space-y-3 p-5 text-sm">
          {["All cartons arrived", "Seal intact", "Qty matches transfer"].map((c) => (
            <label key={c} className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-border" defaultChecked />
              {c}
            </label>
          ))}
        </Card>
        <Card className="flex h-48 items-center justify-center border-dashed p-5 text-sm text-text-secondary">
          Upload receiving evidence
        </Card>
      </div>
    </AppShell>
  );
}
