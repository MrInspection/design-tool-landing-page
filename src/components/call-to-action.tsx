"use client";

import {
  type AnimationPlaybackControls,
  motion,
  useAnimate,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

export function CallToAction() {
  const animation = useRef<AnimationPlaybackControls>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Number.POSITIVE_INFINITY },
    );
  }, []);

  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.speed = 0.5;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [isHovered]);

  return (
    <section className="py-24">
      <div className="flex overflow-x-clip p-4">
        <motion.div
          ref={scope}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex flex-none gap-16 pr-16 font-medium text-7xl"
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex items-center gap-16">
              <span className="text-lime-400">&#10038;</span>
              <span>Try it for free</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
