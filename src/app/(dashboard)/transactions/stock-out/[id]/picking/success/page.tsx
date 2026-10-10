import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { SuccessState } from "@/components/ui/success-state";

export default async function PickingSuccessPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <AppShell breadcrumbs={[{ label: "Stock Out", href: "/transactions/stock-out" }, { label: id }, { label: "Picking done" }]}>
      <PageHeader title="Picking complete" />
      <SuccessState
        title="Picking finished"
        description="All lines were picked. Continue to packing when ready."
        primaryHref={`/transactions/stock-out/${id}/packing`}
        primaryLabel="Start packing"
        secondaryHref={`/transactions/stock-out/${id}`}
        secondaryLabel="Back to detail"
      />
    </AppShell>
  );
}
