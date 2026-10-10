import { FigmaIcon } from "@/components/icons/figma-icon";
import type { FigmaIconName } from "@/lib/assets";
import { cn } from "@/lib/utils";

const map: Record<string, FigmaIconName> = {
  "layout-dashboard": "chartPie",
  "triangle-alert": "boxMinus",
  "package-plus": "fileTextPlus",
  "arrow-left-right": "arrowsRepeat",
  "file-bar-chart": "fileText",
  boxes: "box",
  warehouse: "warehouse",
  settings: "settings",
};

export function NavIcon({
  name,
  className,
  size = 24,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const icon = map[name] ?? "chartPie";
  return <FigmaIcon name={icon} size={size} className={cn(className)} />;
}
