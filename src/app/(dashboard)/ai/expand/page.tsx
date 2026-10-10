import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";
import { operations, aiSuggestions, inventoryExceptions } from "@/lib/data";

export default function ExpandAiPage() {
  return (
    <AppShell breadcrumbs={[{ label: "Dashboard", href: "/" }, { label: "Expand AI" }]}>
      <PageHeader
        title="Dashboard"
        subtitle="Expanded AI panel"
        actions={
          <Link href="/ai">
            <Button variant="ai">Full AI Assistant</Button>
          </Link>
        }
      />
      <div className="grid gap-4 xl:grid-cols-[1fr_340px]">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-semibold">Ongoing Operations</h2>
            <Badge tone="primary">57 Need Action</Badge>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {operations.slice(0, 8).map((op) => (
              <Card key={op.label} className="p-3 text-center">
                <p className="text-sm font-medium">{op.label}</p>
                <p className="text-xs text-text-secondary">
                  {op.count} {op.status}
                </p>
              </Card>
            ))}
          </div>
          <Card className="p-5">
            <h3 className="mb-3 font-semibold">Inventory Exceptions</h3>
            <ul className="space-y-2 text-sm">
              {inventoryExceptions.map((i) => (
                <li key={i.label} className="flex justify-between">
                  <span>{i.label}</span>
                  <span className="font-medium">{i.count}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <Card className="h-fit bg-primary-gradient p-5 text-white">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold">AI Suggestions</h3>
            <Link href="/ai" className="text-xs text-white/80">
              View All &gt;
            </Link>
          </div>
          <div className="space-y-3">
            {aiSuggestions.map((s) => (
              <div key={s.title} className="rounded-[12px] bg-white/10 p-3">
                <p className="text-sm font-semibold">{s.title}</p>
                <p className="mt-1 text-xs text-white/80">{s.description}</p>
                <Button size="sm" className="mt-3 bg-white text-primary-800 hover:bg-white/90">
                  {s.action}
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
