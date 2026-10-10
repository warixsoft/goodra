import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { opnameRows } from "@/lib/data";

export default async function OpnameDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const row = opnameRows.find((r) => r.id === id) ?? opnameRows[0];
  const base = `/transactions/opname/${row.id}`;

  return (
    <AppShell breadcrumbs={[{ label: "Stock Opname", href: "/transactions/opname" }, { label: row.id }]}>
      <PageHeader
        title={row.id}
        subtitle={`${row.warehouse} · Zone ${row.zone}`}
        actions={
          <>
            <StatusBadge status={row.status} />
            <Link href={`${base}/review`}>
              <Button variant="outline">Variance review</Button>
            </Link>
            <Link href={`${base}/submit`}>
              <Button>Submit</Button>
            </Link>
          </>
        }
      />
      <Card className="p-5">
        <p className="mb-2 text-sm text-text-secondary">Count progress</p>
        <div className="h-2 overflow-hidden rounded-full bg-border">
          <div className="h-full rounded-full bg-primary-600" style={{ width: `${row.progress}%` }} />
        </div>
        <p className="mt-2 text-sm font-medium">{row.progress}% complete</p>
      </Card>
    </AppShell>
  );
}
