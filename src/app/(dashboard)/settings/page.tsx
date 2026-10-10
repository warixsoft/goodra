"use client";

import Link from "next/link";
import { useState } from "react";
import { LogOut } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { cn } from "@/lib/utils";

const tabs = ["Profile", "Users & Roles", "Notifications", "AI & Automation"] as const;

const users = [
  { name: "Jamal Ray Rahman", email: "jamal@goodra.app", role: "Administrator", status: "Active" },
  { name: "Ayla Putri", email: "ayla@goodra.app", role: "Warehouse Manager", status: "Active" },
  { name: "Rafi Nugraha", email: "rafi@goodra.app", role: "Operator", status: "Active" },
  { name: "Dewi Lestari", email: "dewi@goodra.app", role: "Viewer", status: "Inactive" },
];

export default function SettingsPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Profile");

  return (
    <AppShell breadcrumbs={[{ label: "Settings" }, { label: tab }]}>
      <PageHeader title="Settings" subtitle="Manage workspace preferences and access." />
      <div className="mb-4 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium",
              tab === t ? "bg-primary-600 text-white" : "border border-border bg-white text-text-secondary",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "Profile" && (
        <Card className="max-w-xl space-y-4 p-5">
          <h3 className="text-base font-semibold">Profile</h3>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Full name</label>
            <Input defaultValue="Jamal Ray Rahman" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Email</label>
            <Input defaultValue="jamal@goodra.app" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Role</label>
            <Input defaultValue="Administrator" disabled />
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            <Button>Save changes</Button>
            <Link href="/sign-in">
              <Button variant="outline" className="text-danger hover:bg-danger-bg">
                <LogOut className="h-4 w-4" strokeWidth={1.75} />
                Log out
              </Button>
            </Link>
          </div>
        </Card>
      )}

      {tab === "Users & Roles" && (
        <Card>
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <h3 className="font-semibold">Users</h3>
            <Button size="sm">Invite user</Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface text-text-secondary">
                <tr>
                  {["Name", "Email", "Role", "Status"].map((h) => (
                    <th key={h} className="px-4 py-3 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.email} className="border-t border-border">
                    <td className="px-4 py-3 font-medium">{u.name}</td>
                    <td className="px-4 py-3 text-text-secondary">{u.email}</td>
                    <td className="px-4 py-3">{u.role}</td>
                    <td className="px-4 py-3">
                      <StatusBadge status={u.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {tab === "Notifications" && (
        <Card className="max-w-xl space-y-3 p-5">
          <h3 className="mb-2 font-semibold">Notification preferences</h3>
          {[
            "Low stock alerts",
            "Restock approvals",
            "Stock In QC pending",
            "Transfer received",
            "AI recommendations",
          ].map((n) => (
            <label key={n} className="flex items-center justify-between gap-3 text-sm">
              <span>{n}</span>
              <input type="checkbox" className="h-4 w-4 rounded border-border" defaultChecked />
            </label>
          ))}
          <Button className="mt-2">Save preferences</Button>
        </Card>
      )}

      {tab === "AI & Automation" && (
        <Card className="max-w-xl space-y-4 p-5">
          <h3 className="font-semibold">AI & Automation</h3>
          {[
            ["Auto restock suggestions", true],
            ["AI putaway optimization", true],
            ["AI pick path optimization", true],
            ["Auto approve low-risk adjustments", false],
          ].map(([label, on]) => (
            <label key={String(label)} className="flex items-center justify-between gap-3 text-sm">
              <span>{label as string}</span>
              <input type="checkbox" className="h-4 w-4 rounded border-border" defaultChecked={Boolean(on)} />
            </label>
          ))}
          <Button>Save automation</Button>
        </Card>
      )}
    </AppShell>
  );
}
