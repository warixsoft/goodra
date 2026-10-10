import { AppShell } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";

const items = [
  { title: "Low stock: SKN-052", body: "Retinol Night Oil is below minimum at WH-001.", time: "10m ago", tone: "warning" as const },
  { title: "Stock In SI-8821 ready for QC", body: "24 items from Lumina Labs await inspection.", time: "1h ago", tone: "info" as const },
  { title: "Transfer TR-3301 received", body: "Inbound transfer arrived at WH-001.", time: "Yesterday", tone: "success" as const },
  { title: "AI suggestion: redistribute stock", body: "Move 48 pcs of SKN-014 from WH-002 to WH-001.", time: "Yesterday", tone: "primary" as const },
];

export default function NotificationsPage() {
  return (
    <AppShell breadcrumbs={[{ label: "Notifications" }]}>
      <PageHeader title="Notifications" subtitle="System alerts and AI recommendations." />
      <Card className="divide-y divide-border">
        {items.map((n) => (
          <div key={n.title} className="flex items-start gap-3 p-4">
            <Badge tone={n.tone} className="mt-0.5 shrink-0">
              New
            </Badge>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-text">{n.title}</p>
              <p className="mt-0.5 text-sm text-text-secondary">{n.body}</p>
              <p className="mt-1 text-xs text-text-muted">{n.time}</p>
            </div>
          </div>
        ))}
      </Card>
    </AppShell>
  );
}
