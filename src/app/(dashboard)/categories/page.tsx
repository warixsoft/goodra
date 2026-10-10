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
import { categories } from "@/lib/data";

export default function CategoriesPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <AppShell
      breadcrumbs={[
        { label: "Item Management", href: "/products" },
        { label: "Product Categories" },
      ]}
    >
      <PageHeader
        title="Product Categories"
        actions={
          <Link href="/categories/add">
            <Button>
              <Plus className="h-4 w-4" />
              Add Category
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
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-surface text-text-secondary">
              <tr>
                {["Category", "Items", "Status", "Last Updated", "Action"].map((h) => (
                  <th key={h} className="px-4 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((c) => (
                <tr key={c.name} className="border-t border-border">
                  <td className="px-4 py-3">
                    <Link href={`/categories/${encodeURIComponent(c.name)}`} className="font-medium text-primary-700">
                      {c.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3">{c.items}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={c.active ? "Active" : "Inactive"} />
                  </td>
                  <td className="px-4 py-3 text-text-secondary">{c.updated}</td>
                  <td className="px-4 py-3 text-text-secondary">⋯</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination showing="Showing 1-6 of 6 entries" />
      </Card>
      <FilterPanel open={filterOpen} onClose={() => setFilterOpen(false)} />
    </AppShell>
  );
}
