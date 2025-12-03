"use client";

import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FeatureCard } from "@/components/ui/feature-card";
import { KeyboardKey } from "@/components/ui/keyboard-key";
import { Tag } from "@/components/ui/tag";

const FEATURES = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

export function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="container flex flex-col items-center justify-center">
        <Tag>Features</Tag>
        <h1 className="mt-6 max-w-2xl text-center font-medium text-6xl">
          Where great powers meet{" "}
          <span className="text-lime-400">simplicity</span>
        </h1>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-3">
          <FeatureCard
            title="Real-time Collaboration"
            description="Work together seamlessly with conflict-free team editing."
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="flex aspect-video h-full w-full items-center justify-center">
              <Avatar className="size-20 border-4 border-blue-500 bg-background p-1">
                <AvatarImage
                  src="/images/avatar-florence-shaw.jpg"
                  className="rounded-full"
                />
                <AvatarFallback>FS</AvatarFallback>
              </Avatar>
              <Avatar className="-ml-6 size-20 border-4 border-indigo-500 bg-background p-1">
                <AvatarImage
                  src="/images/avatar-lula-meyers.jpg"
                  className="rounded-full"
                />
                <AvatarFallback>LM</AvatarFallback>
              </Avatar>
              <Avatar className="-ml-6 size-20 border-4 border-yellow-500 bg-background p-1">
                <AvatarImage
                  src="/images/avatar-ashwin-santiago.jpg"
                  className="rounded-full"
                />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <Avatar className="-ml-6 size-20 border-4 border-pink-500 bg-background p-1">
                <AvatarImage
                  src="/images/avatar-owen-garcia.jpg"
                  className="rounded-full"
                />
                <AvatarFallback>FS</AvatarFallback>
              </Avatar>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Interactive Prototyping"
            description="Engage your clients with prototypes that react to user actions"
            className="group md:col-span-2 lg:col-span-1"
          >
            <div className="flex aspect-video h-full w-full items-center justify-center">
              <p className="text-center font-extrabold text-4xl text-foreground/20 transition duration-500 group-hover:text-foreground/10">
                We&apos;ve achieved{" "}
                <span className="relative bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  <span>incredible</span>
                  <video
                    src="/images/gif-incredible.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="-translate-x-1/2 pointer-events-none absolute bottom-full left-1/2 rounded-2xl opacity-0 shadow-xl transition duration-500 group-hover:opacity-100"
                  />
                </span>{" "}
                growth this year.
              </p>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Keyboard Quick Actions"
            description="Powerful commands to help you create designs more quickly."
            className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
          >
            <div className="flex aspect-video h-full w-full items-center justify-center gap-4">
              <KeyboardKey className="w-28">shift</KeyboardKey>
              <KeyboardKey>alt</KeyboardKey>
              <KeyboardKey>C</KeyboardKey>
            </div>
          </FeatureCard>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3 xl:max-w-screen-md">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-2xl border bg-neutral-900 px-3 py-1.5 transition duration-500 hover:scale-105 md:px-5 md:py-2"
            >
              <span className="inline-flex size-5 items-center justify-center rounded-full bg-lime-400 text-background transition duration-500 group-hover:rotate-45">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
