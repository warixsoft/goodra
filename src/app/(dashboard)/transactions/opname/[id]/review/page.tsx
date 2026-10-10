import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";

const variances = [
  { sku: "SKN-001", system: 48, counted: 46, delta: -2 },
  { sku: "SKN-014", system: 12, counted: 12, delta: 0 },
  { sku: "SKN-031", system: 36, counted: 38, delta: 2 },
];

export default async function OpnameReviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <AppShell breadcrumbs={[{ label: "Stock Opname", href: "/transactions/opname" }, { label: id }, { label: "Review" }]}>
      <PageHeader
        title={`Variance Review — ${id}`}
        actions={
          <Link href={`/transactions/opname/${id}/submit`}>
            <Button>Submit review</Button>
          </Link>
        }
      />
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface text-text-secondary">
              <tr>
                {["SKU", "System qty", "Counted", "Variance"].map((h) => (
                  <th key={h} className="px-4 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {variances.map((v) => (
                <tr key={v.sku} className="border-t border-border">
                  <td className="px-4 py-3 font-medium">{v.sku}</td>
                  <td className="px-4 py-3">{v.system}</td>
                  <td className="px-4 py-3">{v.counted}</td>
                  <td className={`px-4 py-3 font-semibold ${v.delta < 0 ? "text-danger" : v.delta > 0 ? "text-success" : ""}`}>
                    {v.delta > 0 ? `+${v.delta}` : v.delta}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </AppShell>
  );
}
