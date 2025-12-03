import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Tag({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-lime-400 px-3 py-1 text-lime-400 uppercase",
        className,
      )}
      {...props}
    >
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  );
}
