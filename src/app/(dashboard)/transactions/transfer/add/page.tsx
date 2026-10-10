"use client";

import { WizardShell } from "@/components/transactions/wizard-shell";
import { SelectField, TextField } from "@/components/ui/form-field";

export default function TransferAddPage() {
  return (
    <WizardShell
      breadcrumbs={[{ label: "Transfer", href: "/transactions/transfer" }, { label: "Add" }]}
      title="Create Transfer"
      steps={["Route & items", "Assignments", "Confirm"]}
      successHref="/transactions/transfer/add/success"
      panels={[
        <div key="1" className="space-y-4 max-w-xl">
          <SelectField label="From warehouse" options={["WH-002 Bandung", "WH-001 Jakarta"]} />
          <SelectField label="To warehouse" options={["WH-001 Jakarta", "WH-003 Surabaya"]} />
          <TextField label="Number of SKUs" type="number" defaultValue="6" />
        </div>,
        <div key="2" className="space-y-4 max-w-xl">
          <SelectField label="Source bins" options={["Auto-assign", "Manual"]} />
          <SelectField label="Priority" options={["Normal", "Urgent"]} />
        </div>,
        <div key="3" className="text-sm text-text-secondary max-w-xl">
          Transfer 6 SKUs from WH-002 to WH-001 will be created as a draft transfer document.
        </div>,
      ]}
    />
  );
}
