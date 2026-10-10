"use client";

import Link from "next/link";
import { use } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";

const lines = [
  { sku: "SKN-001", bin: "BIN-A01-01-01", qty: 8 },
  { sku: "SKN-014", bin: "BIN-A01-01-02", qty: 4 },
  { sku: "SKN-031", bin: "BIN-B01-01-03", qty: 6 },
];

export default function StartPickingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();

  return (
    <AppShell breadcrumbs={[{ label: "Stock Out", href: "/transactions/stock-out" }, { label: id }, { label: "Picking" }]}>
      <PageHeader
        title={`Start Picking — ${id}`}
        actions={
          <>
            <Button variant="outline">View route zone</Button>
            <Button onClick={() => router.push(`/transactions/stock-out/${id}/picking/success`)}>
              Finish picking
            </Button>
          </>
        }
      />
      <Card>
        <div className="divide-y divide-border">
          {lines.map((l) => (
            <label key={l.sku} className="flex items-center justify-between gap-3 px-5 py-3 text-sm">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="h-4 w-4 rounded border-border" />
                <div>
                  <p className="font-medium">{l.sku}</p>
                  <p className="text-text-secondary">{l.bin}</p>
                </div>
              </div>
              <span className="font-semibold">×{l.qty}</span>
            </label>
          ))}
        </div>
      </Card>
      <div className="mt-4">
        <Link href={`/transactions/stock-out/${id}`} className="text-sm text-primary-600">
          ← Back to detail
        </Link>
      </div>
    </AppShell>
  );
}
