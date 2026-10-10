import Image from "next/image";
import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { FigmaIcon } from "@/components/icons/figma-icon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { Toolbar } from "@/components/ui/toolbar";
import { products } from "@/lib/data";

export default function ProductCardsPage() {
  return (
    <AppShell
      breadcrumbs={[
        { label: "Item Management", href: "/products" },
        { label: "Product Item" },
        { label: "Card View" },
      ]}
    >
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
      <Card className="mb-4">
        <Toolbar
          actions={
            <Link href="/products">
              <Button variant="outline">Table View</Button>
            </Link>
          }
        />
      </Card>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((p) => (
          <Link key={p.sku} href={`/products/${p.sku}`}>
            <Card className="overflow-hidden p-0 transition-shadow hover:shadow-[var(--shadow-elevated)]">
              <div className="relative h-36 bg-surface">
                <Image src={p.image} alt={p.name} fill className="object-cover" sizes="320px" />
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs text-text-muted">{p.sku}</p>
                    <h3 className="font-semibold text-text">{p.name}</h3>
                    <p className="text-xs text-text-secondary">{p.brand}</p>
                  </div>
                  <StatusBadge status={p.status} />
                </div>
                <p className="text-sm text-text-secondary">{p.category}</p>
                <p className="mt-2 text-sm font-semibold text-text">
                  {p.stock} / {p.capacity} Pcs
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
