import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { SelectField, TextField } from "@/components/ui/form-field";
import { products } from "@/lib/data";

export default function PrintBarcodePage() {
  return (
    <AppShell
      breadcrumbs={[
        { label: "Item Management", href: "/products" },
        { label: "Print Barcode" },
      ]}
    >
      <PageHeader
        title="Print Barcode Label"
        actions={<Button>Print labels</Button>}
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="space-y-4 p-5">
          <SelectField label="Product" options={products.map((p) => `${p.sku} — ${p.name}`)} />
          <TextField label="Quantity of labels" type="number" defaultValue="10" />
          <SelectField label="Label size" options={["40×30 mm", "50×30 mm", "60×40 mm"]} />
        </Card>
        <Card className="flex flex-col items-center justify-center p-8">
          <div className="rounded-[12px] border border-border bg-white p-6 text-center shadow-[var(--shadow-card)]">
            <div className="mb-3 h-16 w-48 bg-[repeating-linear-gradient(90deg,#111_0_2px,transparent_2px_4px)]" />
            <p className="font-mono text-sm font-semibold">{products[0].sku}</p>
            <p className="text-xs text-text-secondary">{products[0].name}</p>
          </div>
          <p className="mt-4 text-sm text-text-secondary">Preview</p>
        </Card>
      </div>
    </AppShell>
  );
}
