"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { SelectField, TextField } from "@/components/ui/form-field";

export default function AddCategoryPage() {
  const router = useRouter();
  return (
    <AppShell
      breadcrumbs={[
        { label: "Item Management", href: "/products" },
        { label: "Product Categories", href: "/categories" },
        { label: "Add" },
      ]}
    >
      <PageHeader
        title="Add Category"
        actions={
          <>
            <Link href="/categories">
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button onClick={() => router.push("/categories/add/success")}>Save category</Button>
          </>
        }
      />
      <Card className="max-w-xl space-y-4 p-5">
        <TextField label="Category name" placeholder="e.g. Serum" />
        <SelectField label="Parent category" options={["None", "Cleanser", "Serum", "Moisturizer"]} />
        <TextField label="Description" placeholder="Optional description" />
        <SelectField label="Status" options={["Active", "Inactive"]} />
      </Card>
    </AppShell>
  );
}
