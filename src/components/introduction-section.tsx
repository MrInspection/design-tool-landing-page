"use client";

import { useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

const argument =
  " You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves. ";
const words = argument.split(" ");

export function IntroductionSection() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, words.length - 1],
  );

  useEffect(() => {
    wordIndex.on("change", (value) => {
      setCurrentWord(value);
    });
  }, [wordIndex]);

  return (
    <section className="py-24">
      <div className="container">
        <div className="sticky top-40 flex flex-col items-center justify-center md:top-48">
          <Tag>Introducing Layers</Tag>
          <div className="mt-10 max-w-5xl text-pretty text-center font-medium text-4xl md:text-6xl lg:max-w-7xl lg:text-7xl">
            <span>Your creative process deserves better.</span>
            <span className="text-primary/15">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={cn(
                    index < currentWord && "text-white transition duration-500",
                  )}
                >
                  {`${word} `}
                </span>
              ))}
            </span>
            <span className="text-lime-400">
              That&apos;s why we built Layers.
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget} />
      </div>
    </section>
  );
}
