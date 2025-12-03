import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
};

export function FeatureCard({
  title,
  description,
  className,
  children,
}: FeatureCardProps) {
  return (
    <section className={cn("rounded-3xl border bg-neutral-950 p-6", className)}>
      <div className="aspect-video">{children}</div>
      <h4 className="mt-6 font-medium text-2xl">{title}</h4>
      <p className="mt-2 text-balance text-primary/50">{description}</p>
    </section>
  );
}
