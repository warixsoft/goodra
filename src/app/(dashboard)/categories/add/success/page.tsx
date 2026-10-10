import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { SuccessState } from "@/components/ui/success-state";

export default function AddCategorySuccessPage() {
  return (
    <AppShell
      breadcrumbs={[
        { label: "Product Categories", href: "/categories" },
        { label: "Success" },
      ]}
    >
      <PageHeader title="Add Category" />
      <SuccessState
        title="Category created"
        description="The new product category is ready to use for item management."
        primaryHref="/categories"
        primaryLabel="Back to categories"
        secondaryHref="/categories/add"
        secondaryLabel="Add another"
      />
    </AppShell>
  );
}
