"use client";

import { useState } from "react";
import { Download, Filter, Plus } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FilterPanel } from "@/components/ui/filter-panel";
import { PageHeader } from "@/components/ui/page-header";
import { Pagination } from "@/components/ui/pagination";
import { Toolbar } from "@/components/ui/toolbar";
import { reportRows } from "@/lib/data";

export default function ReportsPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <AppShell breadcrumbs={[{ label: "Inventory Reports" }, { label: "All Reports" }]}>
      <PageHeader
        title="Inventory Reports"
        actions={
          <>
            <Button variant="outline" onClick={() => setFilterOpen(true)}>
              <Filter className="h-4 w-4" />
              Advanced Filter
            </Button>
            <Button>
              <Plus className="h-4 w-4" />
              Generate Report
            </Button>
          </>
        }
      />
      <div className="mb-5 grid gap-3 md:grid-cols-3">
        {["Inventory", "Warehouse", "Alerts"].map((t) => (
          <Card key={t} className="p-4">
            <p className="text-xs font-medium text-text-secondary">{t}</p>
            <p className="mt-1 text-2xl font-semibold text-text">
              {reportRows.filter((r) => r.type === t).length || 1}
            </p>
            <p className="text-xs text-text-muted">Available templates</p>
          </Card>
        ))}
      </div>
      <Card>
        <Toolbar />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left text-sm">
            <thead className="bg-surface text-text-secondary">
              <tr>
                {["Report Name", "Type", "Period", "Generated", "Format", "Action"].map((h) => (
                  <th key={h} className="px-4 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {reportRows.map((r) => (
                <tr key={r.name} className="border-t border-border">
                  <td className="px-4 py-3 font-medium text-text">{r.name}</td>
                  <td className="px-4 py-3">{r.type}</td>
                  <td className="px-4 py-3 text-text-secondary">{r.period}</td>
                  <td className="px-4 py-3 text-text-secondary">{r.generated}</td>
                  <td className="px-4 py-3">{r.format}</td>
                  <td className="px-4 py-3">
                    <Button size="sm" variant="outline">
                      <Download className="h-3.5 w-3.5" />
                      Download
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination showing="Showing 1-3 of 3 entries" />
      </Card>
      <FilterPanel
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        fields={[
          { label: "Report type", options: ["All", "Inventory", "Warehouse", "Alerts"] },
          { label: "Format", options: ["All", "PDF", "XLSX", "CSV"] },
          { label: "Period", options: ["This month", "Last quarter", "Custom"] },
          { label: "Warehouse", options: ["All", "WH-001", "WH-002", "WH-003"] },
        ]}
      />
    </AppShell>
  );
}
