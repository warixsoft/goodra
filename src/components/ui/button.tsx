import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger" | "ai";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-primary-gradient text-white border-transparent hover:opacity-95",
  secondary: "bg-primary-600 text-white border-transparent hover:bg-primary-700",
  outline: "bg-white text-text border-border hover:bg-surface",
  ghost: "bg-transparent text-text-secondary border-transparent hover:bg-surface",
  danger: "bg-danger text-white border-transparent hover:bg-red-700",
  ai: "bg-white text-primary-600 border-primary-600/40 hover:bg-primary-50",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-xs gap-1.5 rounded-[8px]",
  md: "h-[42px] px-4 text-sm gap-2 rounded-[8px]",
  lg: "h-12 px-5 text-base gap-2 rounded-[10px]",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex items-center justify-center font-medium border transition-colors disabled:opacity-50 disabled:pointer-events-none focus-ring",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  ),
);
Button.displayName = "Button";
