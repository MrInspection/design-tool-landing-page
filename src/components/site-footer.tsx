import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SiteFooter() {
  return (
    <>
      <footer className="border-t">
        <div className="container max-w-6xl py-6">
          <section className="flex items-center justify-between max-md:flex-col max-md:gap-4">
            <Link href="/">
              <Image src={logo} alt="Layers Logo" className="h-10 w-auto" />
            </Link>
            <nav className="flex items-center gap-6">
              <p className="cursor-pointer font-medium text-muted-foreground text-sm transition duration-300 hover:text-foreground">
                Contact
              </p>
              <p className="cursor-pointer font-medium text-muted-foreground text-sm transition duration-300 hover:text-foreground">
                Privacy
              </p>
              <p className="cursor-pointer font-medium text-muted-foreground text-sm transition duration-300 hover:text-foreground">
                Terms & Conditions
              </p>
            </nav>
          </section>
        </div>
      </footer>
      <section className="border-t-2 bg-neutral-950 p-4">
        <div className="container flex max-w-6xl items-center justify-between max-md:flex-col max-md:gap-4">
          <div className="text-muted-foreground text-sm max-md:text-balance max-md:text-center">
            Build by{" "}
            <a
              href="https://github.com/MrInspection"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              Moussa
            </a>
            . The source is available on{" "}
            <a
              href="https://github.com/MrInspection/design-tool-landing-page"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </div>
          <div className="max-md:hidden">
            <Link
              href="https://github.com/MrInspection/design-tool-landing-page"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              <Star className="size-4 fill-lime-400 stroke-lime-400" /> Star on
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
