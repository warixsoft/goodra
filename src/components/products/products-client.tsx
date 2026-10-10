"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AlertTriangle, Clock3, PackageX, Warehouse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ConfirmModal } from "@/components/ui/modal";
import { FilterPanel } from "@/components/ui/filter-panel";
import { FigmaIcon } from "@/components/icons/figma-icon";
import { PageHeader } from "@/components/ui/page-header";
import { Pagination } from "@/components/ui/pagination";
import { StatCard } from "@/components/ui/stat-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { Toolbar } from "@/components/ui/toolbar";
import { products } from "@/lib/data";
import { cn } from "@/lib/utils";

function stockClass(status: string) {
  if (status === "Out of Stock") return "text-danger";
  if (status === "Low of Stock") return "text-warning";
  return "text-info";
}

export function ProductsClient() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [deleteSku, setDeleteSku] = useState<string | null>(null);
  const [bulk, setBulk] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [menuSku, setMenuSku] = useState<string | null>(null);

  const toggle = (sku: string) => {
    setSelected((s) => (s.includes(sku) ? s.filter((x) => x !== sku) : [...s, sku]));
  };

  return (
    <>
      <PageHeader
        title="Product Item"
        actions={
          <Link href="/products/add">
            <Button>
              <FigmaIcon name="plus" size={16} className="brightness-0 invert" />
              Add Item
            </Button>
          </Link>
        }
      />

      <div className="mb-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard tone="danger" icon={<PackageX className="h-5 w-5" />} label="Out of Stock" value="12 Needs restock" meta={<span className="text-danger">Down 3</span>} />
        <StatCard tone="warning" icon={<AlertTriangle className="h-5 w-5" />} label="Low Stock" value="38 Below minimum" meta={<span className="text-success">Up 5</span>} />
        <StatCard tone="purple" icon={<Clock3 className="h-5 w-5" />} label="Expiring Soon" value="24 Within 30 days" meta={<span className="text-success">Up 6</span>} />
        <StatCard tone="info" icon={<Warehouse className="h-5 w-5" />} label="Warehouse Capacity" value="78% Of capacity" meta={<span className="text-success">Up 4%</span>} />
      </div>

      {selected.length > 0 && (
        <Card className="mb-3 flex flex-wrap items-center justify-between gap-3 p-3">
          <p className="text-sm font-medium">{selected.length} items selected</p>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => setBulk(true)}>
              Bulk edit
            </Button>
            <Button size="sm" variant="danger" onClick={() => setDeleteSku(selected[0])}>
              Delete
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setSelected([])}>
              Clear
            </Button>
          </div>
        </Card>
      )}

      <Card>
        <Toolbar
          actions={
            <>
              <Button variant="outline" onClick={() => setFilterOpen(true)}>
                <FigmaIcon name="sliders" size={16} />
                Filter
              </Button>
              <Button variant="outline">
                <FigmaIcon name="sort" size={16} />
                Sort
              </Button>
              <Link href="/products/import">
                <Button variant="outline">
                  <FigmaIcon name="upload" size={16} />
                  Import Data
                </Button>
              </Link>
              <Link href="/products/add">
                <Button>
                  <FigmaIcon name="plus" size={16} className="brightness-0 invert" />
                  Add Item
                </Button>
              </Link>
              <div className="ml-1 flex overflow-hidden rounded-[8px] border border-border">
                <button type="button" className="bg-primary-50 px-2.5 py-2 text-primary-700">
                  <FigmaIcon name="list" size={16} />
                </button>
                <Link href="/products/cards" className="px-2.5 py-2 text-text-secondary hover:bg-surface">
                  <FigmaIcon name="grid" size={16} />
                </Link>
              </div>
            </>
          }
        />
        {/* Mobile product cards */}
        <div className="space-y-3 p-3 md:hidden">
          {products.map((p) => (
            <article key={p.sku} className="rounded-[12px] border border-border p-3">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-border"
                  checked={selected.includes(p.sku)}
                  onChange={() => toggle(p.sku)}
                />
                <Link href={`/products/${p.sku}`} className="min-w-0 flex-1">
                  <div className="flex gap-3">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-[8px] bg-surface">
                      <Image src={p.image} alt={p.name} fill className="object-cover" sizes="48px" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-text">{p.name}</p>
                      <p className="text-xs text-text-muted">
                        {p.sku} · {p.brand}
                      </p>
                      <p className="mt-1 text-xs text-text-secondary">{p.category}</p>
                    </div>
                  </div>
                </Link>
                <StatusBadge status={p.status} />
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-sm">
                <span className={cn("font-semibold", stockClass(p.status))}>
                  {p.stock} / {p.capacity} Pcs
                </span>
                <span className="text-text-secondary">{p.warehouses} Warehouse</span>
              </div>
            </article>
          ))}
        </div>

        <div className="hidden overflow-x-auto md:block">
          <table className="w-full min-w-[960px] text-left text-sm">
            <thead className="bg-surface text-text-secondary">
              <tr>
                <th className="px-4 py-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-border"
                    checked={selected.length === products.length}
                    onChange={(e) => setSelected(e.target.checked ? products.map((p) => p.sku) : [])}
                  />
                </th>
                {["SKU", "Product Name", "Category", "Warehouses", "Total Stock", "Status", "Action"].map((h) => (
                  <th key={h} className="px-4 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.sku} className="border-t border-border">
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-border"
                      checked={selected.includes(p.sku)}
                      onChange={() => toggle(p.sku)}
                    />
                  </td>
                  <td className="px-4 py-3 text-text-secondary">{p.sku}</td>
                  <td className="px-4 py-3">
                    <Link href={`/products/${p.sku}`} className="flex items-center gap-3 hover:opacity-90">
                      <div className="relative h-10 w-10 overflow-hidden rounded-[8px] bg-surface">
                        <Image src={p.image} alt={p.name} fill className="object-cover" sizes="40px" />
                      </div>
                      <div>
                        <p className="font-medium text-text">{p.name}</p>
                        <p className="text-xs text-text-muted">{p.brand}</p>
                      </div>
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-text-secondary">{p.category}</td>
                  <td className="px-4 py-3 text-text-secondary">{p.warehouses} Warehouse</td>
                  <td className={cn("px-4 py-3 font-semibold", stockClass(p.status))}>
                    {p.stock} / {p.capacity} Pcs
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={p.status} />
                  </td>
                  <td className="relative px-4 py-3">
                    <button
                      type="button"
                      className="rounded-[8px] p-1.5 text-text-secondary hover:bg-surface"
                      onClick={() => setMenuSku(menuSku === p.sku ? null : p.sku)}
                      aria-label="Row actions"
                    >
                      <FigmaIcon name="moreVertical" size={20} />
                    </button>
                    {menuSku === p.sku && (
                      <div className="absolute right-4 z-10 mt-1 w-40 rounded-[10px] border border-border bg-white py-1 shadow-[var(--shadow-elevated)]">
                        <Link href={`/products/${p.sku}`} className="block px-3 py-2 text-sm hover:bg-surface">
                          View detail
                        </Link>
                        <Link href="/products/print-barcode" className="block px-3 py-2 text-sm hover:bg-surface">
                          Print barcode
                        </Link>
                        <button
                          type="button"
                          className="block w-full px-3 py-2 text-left text-sm text-danger hover:bg-surface"
                          onClick={() => {
                            setDeleteSku(p.sku);
                            setMenuSku(null);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination />
      </Card>

      <FilterPanel open={filterOpen} onClose={() => setFilterOpen(false)} />
      <ConfirmModal
        open={!!deleteSku}
        onClose={() => setDeleteSku(null)}
        onConfirm={() => setDeleteSku(null)}
        title="Delete product item?"
        description={`This will permanently remove ${deleteSku} from inventory. This action cannot be undone.`}
        confirmLabel="Delete"
        danger
      />
      <ConfirmModal
        open={bulk}
        onClose={() => setBulk(false)}
        onConfirm={() => setBulk(false)}
        title="Bulk action"
        description={`Apply bulk changes to ${selected.length} selected product items.`}
        confirmLabel="Continue"
      />
    </>
  );
}
