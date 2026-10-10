import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { SuccessState } from "@/components/ui/success-state";

export default async function OpnameSubmitPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <AppShell breadcrumbs={[{ label: "Stock Opname", href: "/transactions/opname" }, { label: id }, { label: "Submitted" }]}>
      <PageHeader title="Stock Opname" />
      <SuccessState
        title="Opname submitted"
        description={`${id} variance review was submitted. Approved variances will create stock adjustments.`}
        primaryHref="/transactions/opname"
        primaryLabel="Back to opname list"
      />
    </AppShell>
  );
}
