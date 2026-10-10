import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, leftIcon, rightIcon, ...props }, ref) => (
    <div className={cn("relative w-full", className)}>
      {leftIcon && (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
          {leftIcon}
        </span>
      )}
      <input
        ref={ref}
        className={cn(
          "h-[42px] w-full rounded-[12px] border border-border bg-white px-4 text-base text-text placeholder:text-text-muted focus-ring",
          leftIcon && "pl-11",
          rightIcon && "pr-10",
        )}
        {...props}
      />
      {rightIcon && (
        <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-text-muted">{rightIcon}</span>
      )}
    </div>
  ),
);
Input.displayName = "Input";
