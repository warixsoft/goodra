import { AppShell } from "@/components/layout/app-shell";
import { ProductsClient } from "@/components/products/products-client";

export default function ProductsPage() {
  return (
    <AppShell
      breadcrumbs={[
        { label: "Item Management", href: "/products" },
        { label: "Product Item" },
      ]}
    >
      <ProductsClient />
    </AppShell>
  );
}
