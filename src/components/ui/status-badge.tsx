import { Badge } from "./badge";

const map = {
  "In Stock": "success",
  "Low of Stock": "warning",
  "Out of Stock": "danger",
  Complete: "success",
  Completed: "success",
  Pending: "warning",
  Approved: "info",
  "In Progress": "primary",
  "QC Pending": "warning",
  Putaway: "info",
  Picking: "purple",
  Packing: "info",
  Shipped: "success",
  "In Transit": "info",
  Received: "success",
  Healthy: "success",
  Warning: "warning",
  Critical: "danger",
  Inactive: "neutral",
  Occupied: "info",
  Low: "warning",
  Empty: "neutral",
  Out: "danger",
  Active: "success",
} as const;

export function StatusBadge({ status }: { status: string }) {
  const tone = (map as Record<string, "success" | "warning" | "danger" | "info" | "purple" | "neutral" | "primary">)[
    status
  ] ?? "neutral";
  return <Badge tone={tone} dot>{status}</Badge>;
}
