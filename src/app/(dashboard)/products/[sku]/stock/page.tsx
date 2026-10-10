import { AppShell } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { Tabs } from "@/components/ui/tabs";
import { products, warehouses } from "@/lib/data";

export default async function ProductStockPage({
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
        { label: "Stock" },
      ]}
    >
      <PageHeader title={product.name} subtitle="Stock by warehouse" />
      <Tabs
        active={`${base}/stock`}
        items={[
          { label: "Overview", href: base },
          { label: "Stock", href: `${base}/stock` },
          { label: "Activity", href: `${base}/activity` },
          { label: "History", href: `${base}/history` },
        ]}
      />
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface text-text-secondary">
              <tr>
                {["Warehouse", "Available", "Reserved", "Bin locations", "Status"].map((h) => (
                  <th key={h} className="px-4 py-3 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {warehouses.slice(0, 4).map((w, i) => (
                <tr key={w.id} className="border-t border-border">
                  <td className="px-4 py-3 font-medium">{w.name}</td>
                  <td className="px-4 py-3">{Math.max(0, product.stock - i * 20)}</td>
                  <td className="px-4 py-3">{i * 4}</td>
                  <td className="px-4 py-3">{2 + i}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={w.status} />
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
