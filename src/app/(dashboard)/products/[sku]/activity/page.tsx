import { AppShell } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Tabs } from "@/components/ui/tabs";
import { products, recentTransactions } from "@/lib/data";

export default async function ProductActivityPage({
  params,
}: {
  params: Promise<{ sku: string }>;
}) {
  const { sku } = await params;
  const product = products.find((p) => p.sku === sku) ?? products[0];
  const base = `/products/${product.sku}`;
  const rows = recentTransactions.filter((t) => t.sku === product.sku);

  return (
    <AppShell
      breadcrumbs={[
        { label: "Item Management", href: "/products" },
        { label: product.sku, href: base },
        { label: "Activity" },
      ]}
    >
      <PageHeader title={product.name} subtitle="Recent activity" />
      <Tabs
        active={`${base}/activity`}
        items={[
          { label: "Overview", href: base },
          { label: "Stock", href: `${base}/stock` },
          { label: "Activity", href: `${base}/activity` },
          { label: "History", href: `${base}/history` },
        ]}
      />
      <Card className="divide-y divide-border">
        {(rows.length ? rows : recentTransactions.slice(0, 3)).map((r, i) => (
          <div key={i} className="flex items-start justify-between gap-3 p-4 text-sm">
            <div>
              <p className="font-medium text-text">{r.type}</p>
              <p className="text-text-secondary">
                {r.warehouse} · Qty {r.qty}
              </p>
            </div>
            <div className="text-right text-text-muted">
              <p>{r.date}</p>
              <p>{r.user}</p>
            </div>
          </div>
        ))}
      </Card>
    </AppShell>
  );
}
