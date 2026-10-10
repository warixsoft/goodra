import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { lowStockItems, restockRequests } from "@/lib/data";

export default async function RestockDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const req = restockRequests.find((r) => r.id === id) ?? restockRequests[0];

  return (
    <AppShell breadcrumbs={[{ label: "Restock Request", href: "/restock" }, { label: req.id }]}>
      <PageHeader
        title={req.id}
        subtitle={`Requested by ${req.requester} · ${req.date}`}
        actions={
          <>
            <StatusBadge status={req.status} />
            <Button variant="outline">Reject</Button>
            <Button>Approve</Button>
          </>
        }
      />
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="space-y-3 p-5 text-sm lg:col-span-1">
          <h3 className="font-semibold">Request info</h3>
          <p>
            <span className="text-text-secondary">Warehouse</span>
            <br />
            <span className="font-medium">{req.warehouse}</span>
          </p>
          <p>
            <span className="text-text-secondary">Items</span>
            <br />
            <span className="font-medium">{req.items}</span>
          </p>
        </Card>
        <Card className="lg:col-span-2">
          <div className="border-b border-border px-5 py-4 font-semibold">Line items</div>
          <div className="divide-y divide-border">
            {lowStockItems.slice(0, req.items).map((i) => (
              <div key={i.sku} className="flex items-center justify-between px-5 py-3 text-sm">
                <div>
                  <p className="font-medium">{i.name}</p>
                  <p className="text-text-secondary">{i.sku}</p>
                </div>
                <p className="font-semibold">+{i.min - i.stock || 40}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="mt-4">
        <Link href="/restock" className="text-sm text-primary-600">
          ← Back to list
        </Link>
      </div>
    </AppShell>
  );
}
