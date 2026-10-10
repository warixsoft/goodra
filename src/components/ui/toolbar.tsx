import { Input } from "./input";
import { Button } from "./button";
import { Filter, ArrowUpDown, Search } from "lucide-react";

export function Toolbar({
  placeholder = "Search",
  actions,
}: {
  placeholder?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 border-b border-border p-3 sm:p-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-2">
          <Input
            className="min-w-0 flex-1 sm:max-w-md"
            placeholder={placeholder}
            leftIcon={<Search className="h-4 w-4" />}
          />
          <Button variant="outline" size="md" className="shrink-0 px-3 sm:hidden" aria-label="Filter">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <Button variant="outline" size="md">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="md">
            <ArrowUpDown className="h-4 w-4" />
            Sort
          </Button>
        </div>
      </div>
      {actions && (
        <div className="flex flex-wrap items-center gap-2 [&_>a]:flex-1 sm:[&_>a]:flex-none [&_button]:flex-1 sm:[&_button]:flex-none">
          {actions}
        </div>
      )}
    </div>
  );
}
