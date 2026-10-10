"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { SelectField, TextField } from "@/components/ui/form-field";
import { lowStockItems } from "@/lib/data";

export default function SingleRestockPage() {
  const router = useRouter();
  return (
    <AppShell breadcrumbs={[{ label: "Low Stock Alerts", href: "/low-stock" }, { label: "Single Restock" }]}>
      <PageHeader
        title="Single Restock"
        actions={
          <>
            <Link href="/low-stock">
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button onClick={() => router.push("/restock")}>Create restock request</Button>
          </>
        }
      />
      <Card className="max-w-xl space-y-4 p-5">
        <SelectField label="Product" options={lowStockItems.map((i) => `${i.sku} — ${i.name}`)} />
        <SelectField label="Warehouse" options={["WH-001", "WH-002", "WH-003"]} />
        <TextField label="Requested quantity" type="number" defaultValue="80" />
        <TextField label="Notes" placeholder="Optional notes for purchasing" />
      </Card>
    </AppShell>
  );
}
