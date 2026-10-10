"use client";

import Link from "next/link";
import { useState } from "react";
import { AlertTriangle, PackagePlus, PackageX } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FilterPanel } from "@/components/ui/filter-panel";
import { PageHeader } from "@/components/ui/page-header";
import { Pagination } from "@/components/ui/pagination";
import { StatCard } from "@/components/ui/stat-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { Toolbar } from "@/components/ui/toolbar";
import { lowStockItems } from "@/lib/data";

export default function LowStockPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <AppShell breadcrumbs={[{ label: "Low Stock Alerts" }, { label: "Table View" }]}>
      <PageHeader
        title="Low Stock Alerts"
        actions={
          <>
            <Link href="/low-stock/restock">
              <Button variant="outline">Single Restock</Button>
            </Link>
            <Link href="/low-stock/bulk">
              <Button>
                <PackagePlus className="h-4 w-4" />
                Bulk Restock
              </Button>
            </Link>
          </>
        }
      />
      <div className="mb-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard tone="warning" icon={<AlertTriangle className="h-5 w-5" />} label="Low Stock" value="38 Items" />
        <StatCard tone="danger" icon={<PackageX className="h-5 w-5" />} label="Out of Stock" value="7 Items" />
        <StatCard tone="primary" icon={<PackagePlus className="h-5 w-5" />} label="Open Restock" value="4 Requests" />
      </div>
      <Card>
        <Toolbar
          actions={
            <Button variant="outline" onClick={() => setFilterOpen(true)}>
              Filter
            </Button>
          }
        />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left text-sm">
            <thead className="bg-surface text-text-secondary">
              <tr>
                {["SKU", "Product", "Warehouse", "Current", "Minimum", "Status", "Action"].map((h) => (
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
                  <td className="px-4 py-3 font-semibold">{row.stock}</td>
                  <td className="px-4 py-3">{row.min}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={row.status} />
                  </td>
                  <td className="px-4 py-3">
                    <Link href="/low-stock/restock">
                      <Button size="sm" variant="outline">
                        Restock
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination showing="Showing 1-5 of 45 entries" />
      </Card>
      <FilterPanel open={filterOpen} onClose={() => setFilterOpen(false)} />
    </AppShell>
  );
}
