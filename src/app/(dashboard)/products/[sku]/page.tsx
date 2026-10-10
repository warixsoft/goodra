import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { Tabs } from "@/components/ui/tabs";
import { products } from "@/lib/data";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ sku: string }>;
}) {
  const { sku } = await params;
  const product = products.find((p) => p.sku === sku) ?? products[0];
  const base = `/products/${product.sku}`;

  return (
    <AppShell
      breadcrumbs={[
        { label: "Item Management", href: "/products" },
        { label: "Product Item", href: "/products" },
        { label: product.sku },
      ]}
    >
      <PageHeader
        title={product.name}
        subtitle={`${product.sku} · ${product.brand}`}
        actions={
          <>
            <StatusBadge status={product.status} />
            <Link href="/products/print-barcode">
              <Button variant="outline">Print barcode</Button>
            </Link>
            <Button>Edit item</Button>
          </>
        }
      />
      <Tabs
        active={base}
        items={[
          { label: "Overview", href: base },
          { label: "Stock", href: `${base}/stock` },
          { label: "Activity", href: `${base}/activity` },
          { label: "History", href: `${base}/history` },
        ]}
      />
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="p-5 lg:col-span-2">
          <h3 className="mb-4 font-semibold">Product information</h3>
          <dl className="grid gap-4 sm:grid-cols-2 text-sm">
            {[
              ["SKU", product.sku],
              ["Brand", product.brand],
              ["Category", product.category],
              ["Warehouses", `${product.warehouses} locations`],
              ["Total stock", `${product.stock} / ${product.capacity} Pcs`],
              ["Status", product.status],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-text-secondary">{k}</dt>
                <dd className="mt-1 font-medium text-text">{v}</dd>
              </div>
            ))}
          </dl>
        </Card>
        <Card className="overflow-hidden p-0">
          <div className="h-48 bg-gradient-to-br from-primary-100 via-primary-50 to-white" />
          <div className="p-4 text-sm text-text-secondary">Primary product image</div>
        </Card>
      </div>
    </AppShell>
  );
}
