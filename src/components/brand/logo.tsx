import Image from "next/image";
import Link from "next/link";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/utils";

export function Logo({
  href = "/",
  className,
  compact = false,
}: {
  href?: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative inline-flex h-10 items-center overflow-hidden",
        compact ? "w-10 justify-center" : "w-[150px]",
        className,
      )}
    >
      <span
        className={cn(
          "relative shrink-0 overflow-hidden",
          compact ? "h-9 w-7" : "h-[40px] w-[42px]",
        )}
      >
        <Image
          src={assets.logoMark}
          alt="Goodra"
          width={42}
          height={56}
          className="h-full w-full object-contain object-center"
          priority
        />
      </span>
      {!compact && (
        <span
          className="font-display ml-0.5 text-[38px] font-medium leading-none tracking-tight"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(4, 91, 101, 0.6) 0%, #045b65 50%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          oodra
        </span>
      )}
    </Link>
  );
}
