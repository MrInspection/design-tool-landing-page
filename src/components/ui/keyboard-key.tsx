import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function KeyboardKey({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={cn(
        "inline-flex size-14 items-center justify-center rounded-2xl bg-neutral-300 text-neutral-950 text-xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
