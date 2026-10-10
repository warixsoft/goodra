"use client";

import { WizardShell } from "@/components/transactions/wizard-shell";
import { SelectField, TextField } from "@/components/ui/form-field";

export default function StockOutAddPage() {
  return (
    <WizardShell
      breadcrumbs={[
        { label: "Stock Out", href: "/transactions/stock-out" },
        { label: "Add" },
      ]}
      title="Create Stock Out"
      steps={["Order & items", "Pick locations", "Confirm"]}
      successHref="/transactions/stock-out/SO-4410"
      panels={[
        <div key="1" className="space-y-4 max-w-xl">
          <SelectField label="Type" options={["Sales order", "Manual stock out"]} />
          <TextField label="Order number" placeholder="ORD-9902" />
          <SelectField label="Warehouse" options={["WH-001", "WH-002"]} />
          <TextField label="Number of lines" type="number" defaultValue="8" />
        </div>,
        <div key="2" className="space-y-4 max-w-xl">
          <p className="text-sm text-text-secondary">AI optimized pick path across Zone A-02.</p>
          <SelectField label="Fulfillment strategy" options={["AI Optimize", "Manual bin assignment"]} />
          <TextField label="Picker team" placeholder="Team Alpha" />
        </div>,
        <div key="3" className="text-sm text-text-secondary max-w-xl">
          Ready to create stock out for ORD-9902 with 8 lines from WH-001.
        </div>,
      ]}
    />
  );
}
