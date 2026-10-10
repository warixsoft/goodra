"use client";

import Link from "next/link";
import {
  ArrowLeftRight,
  CalendarDays,
  CircleX,
  ClipboardList,
  Clock,
  Hand,
  Inbox,
  Package,
  PackageCheck,
  PackageX,
  RefreshCw,
  Shield,
  ShieldAlert,
  SlidersHorizontal,
} from "lucide-react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import {
  aiSuggestions,
  fulfillmentPipeline,
  inventoryExceptions,
  operations,
  recentTransactions,
} from "@/lib/data";

const opIcons = {
  inbox: Inbox,
  "package-check": PackageCheck,
  hand: Hand,
  package: Package,
  "arrow-left-right": ArrowLeftRight,
  "clipboard-list": ClipboardList,
  "shield-alert": ShieldAlert,
  "sliders-horizontal": SlidersHorizontal,
} as const;

const exceptionIcons = {
  "triangle-alert": PackageX,
  "circle-x": CircleX,
  clock: Clock,
  shield: Shield,
  "package-x": PackageX,
} as const;

export function DashboardView() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        subtitle={
          <span className="inline-flex items-center gap-2">
            <RefreshCw className="h-3.5 w-3.5" />
            Last updated Today 10:30
          </span>
        }
        actions={
          <Button variant="outline" size="md">
            <CalendarDays className="h-4 w-4" />
            Today, 2 Jul 2026
          </Button>
        }
      />

      <section className="mb-6">
        <div className="mb-3 flex items-center gap-2">
          <h2 className="text-base font-semibold text-text">Ongoing Operations</h2>
          <Badge tone="primary">57 Need Action</Badge>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-8">
          {operations.map((op) => {
            const Icon = opIcons[op.icon];
            return (
              <Card key={op.label} className="p-3 text-left sm:text-center">
                <div
                  className={`mb-2 inline-flex h-9 w-9 items-center justify-center rounded-[10px] sm:mx-auto sm:h-10 sm:w-10 sm:rounded-full ${op.color}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-text">{op.label}</p>
                <p className="mt-0.5 text-xs text-text-secondary">
                  {op.count} {op.status}
                </p>
                <Link
                  href="/transactions/stock-in"
                  className="mt-2 hidden text-xs font-medium text-primary-600 sm:inline-block"
                >
                  See All →
                </Link>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mb-6 grid gap-4 xl:grid-cols-3">
        <Card
          className="border-0 p-5 text-white xl:col-span-1"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.05) 38%, rgba(255,255,255,0) 100%), linear-gradient(121deg, #034956 0%, #056f7a 38%, #0e968b 74%)",
          }}
        >
          <CardHeader
            className="mb-3 text-white"
            title={
              <span className="inline-flex items-center gap-2 text-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/icons/sparkle.svg" alt="" className="size-5 brightness-0 invert" />
                AI Suggestions
              </span>
            }
            action={<button className="text-xs text-white/80 hover:text-white">View All &gt;</button>}
          />
          <div className="space-y-3">
            {aiSuggestions.map((s) => (
              <div key={s.title} className="flex items-center gap-2 rounded-[8px] bg-white/10 p-2.5 backdrop-blur-sm">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{s.title}</p>
                  <p className="mt-0.5 truncate text-xs text-white/60">{s.description}</p>
                </div>
                <span className="shrink-0 rounded-md bg-[#f4f4f6] px-2 py-0.5 text-xs font-medium text-[#42424d]">
                  {s.action}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <CardHeader
            title="Inventory Exceptions"
            action={
              <Link href="/low-stock" className="text-xs font-medium text-primary-600">
                View Detail &gt;
              </Link>
            }
          />
          <ul className="space-y-3">
            {inventoryExceptions.map((item) => {
              const Icon = exceptionIcons[item.icon as keyof typeof exceptionIcons] ?? PackageX;
              return (
                <li key={item.label} className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-[10px] ${item.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-text">{item.label}</p>
                    <p className="text-xs text-text-secondary">{item.count} Items</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Card>

        <Card className="p-5">
          <CardHeader title="Order Fulfillment Pipeline" />
          <div className="h-[260px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={fulfillmentPipeline} layout="vertical" margin={{ left: 8, right: 16 }}>
                <XAxis type="number" hide />
                <YAxis
                  type="category"
                  dataKey="stage"
                  width={70}
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip cursor={{ fill: "rgba(4,91,101,0.06)" }} />
                <Bar dataKey="value" fill="#045b65" radius={[0, 8, 8, 0]} barSize={18} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </section>

      <Card className="overflow-hidden">
        <div className="border-b border-border px-4 py-4 sm:px-5">
          <h2 className="text-base font-semibold text-text">Recent Transactions</h2>
        </div>

        {/* Mobile compact (Date / SKU / Type) — matches Responsive Dashboard */}
        <div className="divide-y divide-border md:hidden">
          <div className="grid grid-cols-3 gap-2 bg-surface px-4 py-2.5 text-xs font-medium text-text-secondary">
            <span>Date</span>
            <span>SKU</span>
            <span>Type</span>
          </div>
          {recentTransactions.map((row) => (
            <div
              key={`${row.sku}-${row.date}-${row.type}-m`}
              className="grid grid-cols-3 gap-2 px-4 py-3 text-sm"
            >
              <span className="text-text-secondary">{row.date}</span>
              <span className="font-medium text-text">{row.sku}</span>
              <span>
                {row.type}
                <span className="mt-0.5 block text-xs text-text-muted">{row.qty}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="hidden overflow-x-auto md:block">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="bg-surface text-text-secondary">
              <tr>
                {["Date", "SKU", "Product", "Warehouse", "Type", "Qty", "Status", "User"].map((h) => (
                  <th key={h} className="px-4 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((row) => (
                <tr key={`${row.sku}-${row.date}-${row.type}`} className="border-t border-border">
                  <td className="px-4 py-3 text-text-secondary">{row.date}</td>
                  <td className="px-4 py-3 text-text-secondary">{row.sku}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-[8px] bg-primary-50" />
                      <div>
                        <p className="font-medium text-text">{row.product}</p>
                        <p className="text-xs text-text-muted">{row.brand}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-text-secondary">{row.warehouse}</td>
                  <td className="px-4 py-3">{row.type}</td>
                  <td className="px-4 py-3 font-medium">{row.qty}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={row.status} />
                  </td>
                  <td className="px-4 py-3 text-text-secondary">{row.user}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
