import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { SuccessState } from "@/components/ui/success-state";

export default function StockInSuccessPage() {
  return (
    <AppShell breadcrumbs={[{ label: "Stock In", href: "/transactions/stock-in" }, { label: "Success" }]}>
      <PageHeader title="Create Stock In" />
      <SuccessState
        title="Stock In created"
        description="SI-8822 was created and is waiting for QC."
        primaryHref="/transactions/stock-in/SI-8821/qc"
        primaryLabel="Start QC"
        secondaryHref="/transactions/stock-in"
        secondaryLabel="Back to list"
      />
    </AppShell>
  );
}
