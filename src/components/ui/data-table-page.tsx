import { AppShell } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Pagination } from "@/components/ui/pagination";
import { ResponsiveTable } from "@/components/ui/responsive-table";
import { Toolbar } from "@/components/ui/toolbar";

export function DataTablePage({
  breadcrumbs,
  title,
  subtitle,
  actions,
  columns,
  rows,
  showing,
}: {
  breadcrumbs: { label: string; href?: string }[];
  title: string;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  columns: string[];
  rows: React.ReactNode[][];
  showing?: string;
}) {
  return (
    <AppShell breadcrumbs={breadcrumbs}>
      <PageHeader title={title} subtitle={subtitle} actions={actions} />
      <Card className="overflow-hidden">
        <Toolbar actions={actions} />
        <ResponsiveTable columns={columns} rows={rows} />
        <Pagination showing={showing} />
      </Card>
    </AppShell>
  );
}
