"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LayersLogo from "@/assets/logo.svg";
import { buttonVariants } from "@/components/ui/button";
import { CustomButton } from "@/components/ui/custom-button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#", label: "Home" },
  { href: "#", label: "Features" },
  { href: "#", label: "Integrations" },
  { href: "#", label: "FAQs" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full py-4">
      <div className="container max-w-5xl max-md:px-4">
        <div className="rounded-[27px] border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center justify-between px-4 py-2 md:pr-2">
            <Link href="/">
              <Image
                src={LayersLogo}
                alt="Layers Logo"
                width={200}
                height={50}
                className="h-9 w-fit md:h-11"
              />
            </Link>
            <nav className="hidden items-center gap-6 font-medium lg:flex">
              {NAV_LINKS.map((link, index) => (
                <Link key={index} href={link.href}>
                  <span className="text-primary/60 text-sm transition duration-300 hover:text-primary">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
            <div>
              <button
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    className:
                      "-ml-2 mr-2 h-8 w-8 cursor-pointer px-0 text-base transition duration-300 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden",
                  }),
                )}
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={cn("!size-6", isOpen && "hidden")}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
                <X
                  className={cn(
                    "!size-6 text-muted-foreground",
                    !isOpen && "hidden",
                  )}
                />
                <span className="sr-only">Toggle Menu</span>
              </button>
              <div className="inline-flex items-center gap-2 max-md:hidden">
                <CustomButton variant="secondary">Log In</CustomButton>
                <CustomButton variant="primary">Sign Up</CustomButton>
              </div>
            </div>
          </div>
          <MobileNav isOpen={isOpen} />
        </div>
      </div>
    </header>
  );
}

function MobileNav({ isOpen }: { isOpen: boolean }) {
  return (
    <section className={cn(isOpen && "px-4 pb-4", "overflow-hidden")}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col items-center gap-4 overflow-hidden"
          >
            {NAV_LINKS.map((link, index) => (
              <Link key={index} href={link.href}>
                <span>{link.label}</span>
              </Link>
            ))}
            <CustomButton variant="secondary" size="sm">
              Log In
            </CustomButton>
            <CustomButton variant="primary" size="sm">
              Sign Up
            </CustomButton>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
