"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { SelectField, TextField } from "@/components/ui/form-field";

export default function AddZonePage() {
  const router = useRouter();
  return (
    <AppShell breadcrumbs={[{ label: "Zone Management", href: "/zones" }, { label: "Add Zone" }]}>
      <PageHeader
        title="Add Zone"
        actions={
          <>
            <Link href="/zones">
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button onClick={() => router.push("/zones/add/success")}>Save zone</Button>
          </>
        }
      />
      <Card className="max-w-xl space-y-4 p-5">
        <SelectField label="Warehouse" options={["WH-001 Jakarta", "WH-002 Bandung", "WH-003 Surabaya"]} />
        <TextField label="Zone code" placeholder="A-03" />
        <TextField label="Zone name" placeholder="e.g. Cold Storage" />
        <SelectField label="Zone type" options={["Receiving", "Storage", "Picking", "Quarantine", "Staging"]} />
      </Card>
    </AppShell>
  );
}
