import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { bins } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function BinLayoutMapPage() {
  return (
    <AppShell breadcrumbs={[{ label: "Bin Location", href: "/bins" }, { label: "Layout Map" }]}>
      <PageHeader
        title="Bin Layout"
        actions={
          <Link href="/bins">
            <Button variant="outline">Table view</Button>
          </Link>
        }
      />
      <Card className="p-5">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-6">
          {Array.from({ length: 24 }, (_, i) => {
            const bin = bins[i % bins.length];
            return (
              <Link
                key={i}
                href={`/bins/${bin.code}`}
                className={cn(
                  "aspect-square rounded-[10px] border p-2 text-[10px]",
                  bin.status === "Empty" && "bg-surface text-text-muted",
                  bin.status === "Low" && "border-warning/40 bg-warning-bg",
                  bin.status === "Occupied" && "border-primary-200 bg-primary-50",
                )}
              >
                <p className="font-semibold">{bin.code.split("-").slice(-2).join("-")}</p>
                <p className="mt-1 truncate">{bin.sku}</p>
              </Link>
            );
          })}
        </div>
      </Card>
    </AppShell>
  );
}
