import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";

export default function RestockEmptyPage() {
  return (
    <AppShell breadcrumbs={[{ label: "Restock Request" }, { label: "First Timer" }]}>
      <PageHeader title="Restock Request" />
      <EmptyState
        title="No restock requests yet"
        description="When stock falls below minimum, create a restock request or start from Low Stock Alerts."
        actionLabel="Create request"
      />
      <div className="mt-4 text-center">
        <Link href="/low-stock" className="text-sm text-primary-600">
          Go to Low Stock Alerts
        </Link>
      </div>
    </AppShell>
  );
}
