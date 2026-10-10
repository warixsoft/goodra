"use client";

import { WizardShell } from "@/components/transactions/wizard-shell";
import { SelectField, TextField } from "@/components/ui/form-field";
import { products } from "@/lib/data";

export default function StockInAddPage() {
  return (
    <WizardShell
      breadcrumbs={[
        { label: "Stock In", href: "/transactions/stock-in" },
        { label: "Add" },
      ]}
      title="Create Stock In"
      steps={["Select items", "Storage assignment", "Confirm"]}
      successHref="/transactions/stock-in/add/success"
      panels={[
        <div key="1" className="space-y-4 max-w-xl">
          <SelectField label="Supplier" options={["Lumina Labs", "ClearGlow Co", "AuraLab"]} />
          <SelectField label="Warehouse" options={["WH-001 Jakarta", "WH-002 Bandung"]} />
          <SelectField label="Item" options={products.map((p) => `${p.sku} — ${p.name}`)} />
          <TextField label="Quantity" type="number" defaultValue="24" />
        </div>,
        <div key="2" className="space-y-4 max-w-xl">
          <p className="text-sm text-text-secondary">AI suggests putaway locations based on zone capacity.</p>
          <SelectField label="Zone" options={["A-01 Receiving", "A-02 Bulk Storage"]} />
          <SelectField label="Rack" options={["R-A01-01", "R-A01-02"]} />
          <SelectField label="Bin" options={["BIN-A01-01-01", "BIN-A01-02-01"]} />
        </div>,
        <div key="3" className="space-y-2 text-sm max-w-xl">
          <p className="font-semibold">Confirm stock in</p>
          <p className="text-text-secondary">24 pcs from Lumina Labs → WH-001 / A-01 / R-A01-01 / BIN-A01-01-01</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-text-secondary">
            <li>QC required before putaway</li>
            <li>Reference will be generated as SI-####</li>
          </ul>
        </div>,
      ]}
    />
  );
}
