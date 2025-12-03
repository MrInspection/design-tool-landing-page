"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Fragment } from "react";
import figmaIcon from "@/assets/figma-logo.svg";
import framerIcon from "@/assets/framer-logo.svg";
import githubIcon from "@/assets/github-logo.svg";
import notionIcon from "@/assets/notion-logo.svg";
import relumeIcon from "@/assets/relume-logo.svg";
import slackIcon from "@/assets/slack-logo.svg";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

const INTEGRATIONS = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: notionIcon,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slackIcon,
    description: "Slack is a powerful communication platform.",
  },
  {
    name: "Relume",
    icon: relumeIcon,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framerIcon,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    description: "GitHub is the leading platform for code collaboration",
  },
];

type IntegrationType = typeof INTEGRATIONS;

interface IntegrationColumnProps {
  integrations: IntegrationType;
  className?: string;
  reverseAnimation?: boolean;
}

function IntegrationColumn({
  integrations,
  className,
  reverseAnimation,
}: IntegrationColumnProps) {
  return (
    <motion.div
      initial={{ y: reverseAnimation ? "-50%" : 0 }}
      animate={{ y: reverseAnimation ? 0 : "-50%" }}
      transition={{
        duration: 15,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      }}
      className={cn("flex flex-col gap-4", className)}
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <Fragment key={index}>
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="rounded-3xl border bg-neutral-900 p-6"
            >
              <div className="flex justify-center">
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  className="size-24"
                />
              </div>
              <h3 className="mt-6 text-center text-3xl">{integration.name}</h3>
              <p className="mt-2 text-balance text-center text-foreground/50">
                {integration.description}
              </p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
}

export function IntegrationsSection() {
  return (
    <section className="overflow-hidden py-24">
      <div className="container">
        <div className="grid items-center lg:grid-cols-2 lg:gap-16">
          <section className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
            <Tag>Integrations</Tag>
            <h2 className="mt-6 text-balance font-medium text-6xl max-md:text-center">
              Plays well with <span className="text-lime-400">others</span>
            </h2>
            <p className="mt-4 text-balance text-lg text-muted-foreground max-md:text-center">
              Layers seamlessly connects with your favorite tools, making it
              easy to plug into any workflow and collaborate across platforms.
            </p>
          </section>
          <section>
            <div className="mt-8 grid h-[400px] gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:grid-cols-2 lg:mt-0 lg:h-[800px]">
              <IntegrationColumn integrations={INTEGRATIONS} />
              <IntegrationColumn
                integrations={INTEGRATIONS.slice().reverse()}
                className="max-md:hidden"
                reverseAnimation={true}
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
