"use client";

import Link from "next/link";
import { useState } from "react";
import { Plus } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FilterPanel } from "@/components/ui/filter-panel";
import { PageHeader } from "@/components/ui/page-header";
import { Pagination } from "@/components/ui/pagination";
import { StatusBadge } from "@/components/ui/status-badge";
import { Toolbar } from "@/components/ui/toolbar";
import { restockRequests } from "@/lib/data";

export default function RestockPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <AppShell breadcrumbs={[{ label: "Restock Request" }, { label: "List" }]}>
      <PageHeader
        title="Restock Request"
        actions={
          <Link href="/low-stock/bulk">
            <Button>
              <Plus className="h-4 w-4" />
              New Request
            </Button>
          </Link>
        }
      />
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
                {["Request ID", "Requester", "Items", "Warehouse", "Status", "Date", "Action"].map((h) => (
                  <th key={h} className="px-4 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {restockRequests.map((r) => (
                <tr key={r.id} className="border-t border-border">
                  <td className="px-4 py-3">
                    <Link href={`/restock/${r.id}`} className="font-medium text-primary-700">
                      {r.id}
                    </Link>
                  </td>
                  <td className="px-4 py-3">{r.requester}</td>
                  <td className="px-4 py-3">{r.items}</td>
                  <td className="px-4 py-3">{r.warehouse}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={r.status} />
                  </td>
                  <td className="px-4 py-3 text-text-secondary">{r.date}</td>
                  <td className="px-4 py-3 text-text-secondary">⋯</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination />
      </Card>
      <FilterPanel open={filterOpen} onClose={() => setFilterOpen(false)} />
    </AppShell>
  );
}
