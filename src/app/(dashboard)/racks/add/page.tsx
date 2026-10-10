"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { SelectField, TextField } from "@/components/ui/form-field";

export default function AddRackPage() {
  const router = useRouter();
  return (
    <AppShell breadcrumbs={[{ label: "Rack Management", href: "/racks" }, { label: "Add Rack" }]}>
      <PageHeader
        title="Add Rack"
        actions={
          <>
            <Link href="/racks">
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button onClick={() => router.push("/racks")}>Save rack</Button>
          </>
        }
      />
      <Card className="max-w-xl space-y-4 p-5">
        <SelectField label="Warehouse" options={["WH-001", "WH-002", "WH-003"]} />
        <SelectField label="Zone" options={["A-01", "A-02", "B-01", "C-01"]} />
        <TextField label="Rack code" placeholder="R-A01-03" />
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField label="Levels" type="number" defaultValue="5" />
          <TextField label="Bins per level" type="number" defaultValue="8" />
        </div>
      </Card>
    </AppShell>
  );
}
