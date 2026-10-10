import Image from "next/image";
import { assets, type FigmaIconName } from "@/lib/assets";
import { cn } from "@/lib/utils";

export function FigmaIcon({
  name,
  className,
  size = 20,
  alt = "",
}: {
  name: FigmaIconName;
  className?: string;
  size?: number;
  alt?: string;
}) {
  return (
    <Image
      src={assets.icons[name]}
      alt={alt}
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      unoptimized
    />
  );
}
