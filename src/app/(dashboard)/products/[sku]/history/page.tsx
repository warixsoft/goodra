import { AppShell } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Tabs } from "@/components/ui/tabs";
import { products } from "@/lib/data";

const history = [
  { event: "Minimum stock updated", by: "Jamal Ray", at: "01 Jul 2026 14:20" },
  { event: "Category changed to Serum", by: "Ayla Putri", at: "28 Jun 2026 09:12" },
  { event: "Product created", by: "System", at: "12 May 2026 11:00" },
];

export default async function ProductHistoryPage({
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
        { label: product.sku, href: base },
        { label: "History" },
      ]}
    >
      <PageHeader title={product.name} subtitle="Change history" />
      <Tabs
        active={`${base}/history`}
        items={[
          { label: "Overview", href: base },
          { label: "Stock", href: `${base}/stock` },
          { label: "Activity", href: `${base}/activity` },
          { label: "History", href: `${base}/history` },
        ]}
      />
      <Card className="divide-y divide-border">
        {history.map((h) => (
          <div key={h.event} className="flex items-start justify-between gap-3 p-4 text-sm">
            <div>
              <p className="font-medium text-text">{h.event}</p>
              <p className="text-text-secondary">by {h.by}</p>
            </div>
            <p className="text-text-muted">{h.at}</p>
          </div>
        ))}
      </Card>
    </AppShell>
  );
}
