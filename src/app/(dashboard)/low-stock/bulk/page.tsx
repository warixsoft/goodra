"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { lowStockItems } from "@/lib/data";

export default function BulkRestockPage() {
  const router = useRouter();
  return (
    <AppShell breadcrumbs={[{ label: "Low Stock Alerts", href: "/low-stock" }, { label: "Bulk Restock" }]}>
      <PageHeader
        title="Bulk Restock"
        subtitle="Set restock quantities for multiple low-stock items."
        actions={
          <>
            <Link href="/low-stock">
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button onClick={() => router.push("/restock")}>Submit bulk request</Button>
          </>
        }
      />
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left text-sm">
            <thead className="bg-surface text-text-secondary">
              <tr>
                {["SKU", "Product", "Warehouse", "Current", "Min", "Status", "Restock qty"].map((h) => (
                  <th key={h} className="px-4 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {lowStockItems.map((row) => (
                <tr key={row.sku} className="border-t border-border">
                  <td className="px-4 py-3 text-text-secondary">{row.sku}</td>
                  <td className="px-4 py-3 font-medium">{row.name}</td>
                  <td className="px-4 py-3">{row.warehouse}</td>
                  <td className="px-4 py-3">{row.stock}</td>
                  <td className="px-4 py-3">{row.min}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={row.status} />
                  </td>
                  <td className="px-4 py-3">
                    <Input className="w-28" type="number" defaultValue={String(row.min - row.stock || 40)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </AppShell>
  );
}
