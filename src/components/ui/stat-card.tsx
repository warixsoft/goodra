import { cn } from "@/lib/utils";

export function StatCard({
  icon,
  label,
  value,
  meta,
  tone = "primary",
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  meta?: React.ReactNode;
  tone?: "primary" | "danger" | "warning" | "info" | "purple" | "success";
}) {
  const tones = {
    primary: "bg-primary-50 text-primary-700",
    danger: "bg-danger-bg text-danger",
    warning: "bg-warning-bg text-warning",
    info: "bg-info-bg text-info",
    purple: "bg-purple-bg text-purple",
    success: "bg-success-bg text-success",
  };

  return (
    <div className="card flex items-start gap-3 p-4">
      <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px]", tones[tone])}>
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium text-text-secondary">{label}</p>
        <p className="mt-0.5 text-lg font-semibold text-text">{value}</p>
        {meta && <div className="mt-1 text-xs text-text-secondary">{meta}</div>}
      </div>
    </div>
  );
}
