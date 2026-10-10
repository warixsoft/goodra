import { Sparkles } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/ui/page-header";
import { aiSuggestions } from "@/lib/data";

export default function AiAssistantPage() {
  return (
    <AppShell breadcrumbs={[{ label: "Dashboard", href: "/" }, { label: "AI Assistant" }]}>
      <PageHeader
        title="AI Assistant"
        subtitle="Ask Goodra AI about inventory, fulfillment, and warehouse optimization."
      />
      <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <Card className="flex min-h-[560px] flex-col p-0">
          <div className="flex-1 space-y-4 p-5">
            <div className="max-w-[80%] rounded-[12px] bg-surface px-4 py-3 text-sm text-text">
              Hi Jamal — I found 12 SKUs below reorder point and 3 transfer opportunities. Want a summary?
            </div>
            <div className="ml-auto max-w-[80%] rounded-[12px] bg-primary-gradient px-4 py-3 text-sm text-white">
              Yes, prioritize WH-001 and show restock candidates.
            </div>
            <div className="max-w-[80%] rounded-[12px] bg-surface px-4 py-3 text-sm text-text">
              Top restock candidates: SKN-014, SKN-052, SKN-031. I can create a bulk restock request when you&apos;re ready.
            </div>
          </div>
          <div className="border-t border-border p-4">
            <div className="flex gap-2">
              <Input placeholder="Ask AI anything about your warehouse..." />
              <Button>
                <Sparkles className="h-4 w-4" />
                Send
              </Button>
            </div>
          </div>
        </Card>
        <Card className="bg-primary-gradient p-5 text-white">
          <h3 className="mb-4 font-semibold">Suggested actions</h3>
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
