import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { SuccessState } from "@/components/ui/success-state";

export default function ImportSuccessPage() {
  return (
    <AppShell
      breadcrumbs={[
        { label: "Item Management", href: "/products" },
        { label: "Import Data", href: "/products/import" },
        { label: "Success" },
      ]}
    >
      <PageHeader title="Import Data" />
      <SuccessState
        title="Import completed"
        description="240 product rows were processed successfully. 0 rows failed validation."
        primaryHref="/products"
        primaryLabel="View products"
        secondaryHref="/products/import"
        secondaryLabel="Import more"
      />
    </AppShell>
  );
}
