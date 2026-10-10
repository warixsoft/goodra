"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { SelectField, TextField } from "@/components/ui/form-field";

export default function AddWarehousePage() {
  const router = useRouter();
  return (
    <AppShell breadcrumbs={[{ label: "Warehouse", href: "/warehouses" }, { label: "Add" }]}>
      <PageHeader
        title="Add Warehouse"
        actions={
          <>
            <Link href="/warehouses">
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button onClick={() => router.push("/warehouses/add/success")}>Save warehouse</Button>
          </>
        }
      />
      <Card className="max-w-2xl space-y-4 p-5">
        <TextField label="Warehouse code" placeholder="WH-006" />
        <TextField label="Warehouse name" placeholder="e.g. Bali Regional Hub" />
        <TextField label="Address" placeholder="Street, city" />
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField label="Capacity (bins)" type="number" defaultValue="10000" />
          <SelectField label="Status" options={["Healthy", "Inactive"]} />
        </div>
        <SelectField label="Timezone" options={["Asia/Jakarta", "Asia/Makassar", "Asia/Jayapura"]} />
      </Card>
    </AppShell>
  );
}
