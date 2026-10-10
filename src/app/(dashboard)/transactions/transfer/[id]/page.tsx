import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { transferRows } from "@/lib/data";

export default async function TransferDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const row = transferRows.find((r) => r.id === id) ?? transferRows[0];
  const base = `/transactions/transfer/${row.id}`;

  return (
    <AppShell breadcrumbs={[{ label: "Transfer", href: "/transactions/transfer" }, { label: row.id }]}>
      <PageHeader
        title={row.id}
        subtitle={`${row.from} → ${row.to}`}
        actions={
          <>
            <StatusBadge status={row.status} />
            <Link href={`${base}/received`}>
              <Button variant="outline">Receive</Button>
            </Link>
            <Link href={`${base}/putaway`}>
              <Button>Putaway</Button>
            </Link>
          </>
        }
      />
      <Card className="p-5 text-sm">
        <dl className="grid gap-4 sm:grid-cols-4">
          <div>
            <dt className="text-text-secondary">Items</dt>
            <dd className="font-medium">{row.items}</dd>
          </div>
          <div>
            <dt className="text-text-secondary">From</dt>
            <dd className="font-medium">{row.from}</dd>
          </div>
          <div>
            <dt className="text-text-secondary">To</dt>
            <dd className="font-medium">{row.to}</dd>
          </div>
          <div>
            <dt className="text-text-secondary">Date</dt>
            <dd className="font-medium">{row.date}</dd>
          </div>
        </dl>
      </Card>
    </AppShell>
  );
}
