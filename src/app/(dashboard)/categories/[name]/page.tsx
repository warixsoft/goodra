import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { categories, products } from "@/lib/data";

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const decoded = decodeURIComponent(name);
  const category = categories.find((c) => c.name.toLowerCase() === decoded.toLowerCase()) ?? categories[0];
  const items = products.filter((p) => p.category === category.name);

  return (
    <AppShell
      breadcrumbs={[
        { label: "Product Categories", href: "/categories" },
        { label: category.name },
      ]}
    >
      <PageHeader
        title={category.name}
        subtitle={`${category.items} items · Updated ${category.updated}`}
        actions={
          <>
            <StatusBadge status={category.active ? "Active" : "Inactive"} />
            <Button variant="outline">Move parent</Button>
            <Button>Edit</Button>
          </>
        }
      />
      <Card>
        <div className="border-b border-border px-5 py-4 font-semibold">Items in category</div>
        <div className="divide-y divide-border">
          {(items.length ? items : products.slice(0, 3)).map((p) => (
            <Link
              key={p.sku}
              href={`/products/${p.sku}`}
              className="flex items-center justify-between gap-3 px-5 py-3 text-sm hover:bg-surface"
            >
              <div>
                <p className="font-medium text-text">{p.name}</p>
                <p className="text-text-secondary">{p.sku}</p>
              </div>
              <StatusBadge status={p.status} />
            </Link>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
