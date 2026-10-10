"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/ui/page-header";

export default function AddProductPage() {
  return (
    <AppShell
      breadcrumbs={[
        { label: "Item Management", href: "/products" },
        { label: "Product Item", href: "/products" },
        { label: "Add" },
      ]}
    >
      <PageHeader
        title="Add Product Item"
        actions={
          <>
            <Link href="/products">
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button>Save Item</Button>
          </>
        }
      />
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="p-5 lg:col-span-2">
          <h3 className="mb-4 text-base font-semibold">Basic Information</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium">SKU</label>
              <Input placeholder="SKN-000" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Brand</label>
              <Input placeholder="Brand name" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm font-medium">Product Name</label>
              <Input placeholder="Product name" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Category</label>
              <select className="h-[42px] w-full rounded-[8px] border border-border bg-white px-3 text-sm focus-ring">
                <option>Cleanser</option>
                <option>Serum</option>
                <option>Toner</option>
                <option>Moisturizer</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Unit</label>
              <Input placeholder="Pcs" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm font-medium">Description</label>
              <textarea
                className="min-h-[120px] w-full rounded-[8px] border border-border bg-white px-3 py-2 text-sm focus-ring"
                placeholder="Describe the product"
              />
            </div>
          </div>
        </Card>
        <Card className="p-5">
          <h3 className="mb-4 text-base font-semibold">Stock Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Minimum Stock</label>
              <Input type="number" placeholder="40" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Reorder Point</label>
              <Input type="number" placeholder="80" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Default Warehouse</label>
              <select className="h-[42px] w-full rounded-[8px] border border-border bg-white px-3 text-sm focus-ring">
                <option>WH-001 Jakarta</option>
                <option>WH-002 Bandung</option>
              </select>
            </div>
            <div className="rounded-[12px] border border-dashed border-border bg-surface p-6 text-center text-sm text-text-secondary">
              Upload product image
            </div>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
