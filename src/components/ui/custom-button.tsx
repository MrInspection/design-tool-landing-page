import { cva } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  size?: "sm";
}

const buttonVariants = cva(
  "h-12 rounded-full border px-6 font-medium text-sm transition-colors hover:bg-muted focus-visible:outline-none",
  {
    variants: {
      variant: {
        primary:
          "border-none bg-lime-400 text-neutral-950 shadow hover:bg-lime-400/80 focus:outline-none",
        secondary: "border-muted",
      },
      size: {
        sm: "h-10",
      },
    },
  },
);

export function CustomButton({
  variant,
  className,
  children,
  size,
  ...props
}: CustomButtonProps) {
  return (
    <button
      className={cn(className, buttonVariants({ variant, size }))}
      {...props}
    >
      {children}
    </button>
  );
}
