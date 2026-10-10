"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { SelectField, TextField } from "@/components/ui/form-field";

export default function OpnameStartPage() {
  const router = useRouter();
  return (
    <AppShell breadcrumbs={[{ label: "Stock Opname", href: "/transactions/opname" }, { label: "Start Count" }]}>
      <PageHeader
        title="Start Stock Opname"
        actions={
          <>
            <Link href="/transactions/opname">
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button onClick={() => router.push("/transactions/opname/OP-1104")}>Start count</Button>
          </>
        }
      />
      <Card className="max-w-xl space-y-4 p-5">
        <SelectField label="Warehouse" options={["WH-001", "WH-002"]} />
        <SelectField label="Zone" options={["A-01", "A-02", "B-01"]} />
        <TextField label="Scheduled date" type="date" />
        <SelectField label="Count team" options={["Team Alpha", "Team Beta"]} />
      </Card>
    </AppShell>
  );
}
