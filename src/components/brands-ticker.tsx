"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Fragment } from "react";
import acmeLogo from "@/assets/acme-corp.svg";
import apexLogo from "@/assets/apex.svg";
import celestialLogo from "@/assets/celestial.svg";
import echoLogo from "@/assets/echo-valley.svg";
import outsideLogo from "@/assets/outside.svg";
import pulseLogo from "@/assets/pulse.svg";
import quantumLogo from "@/assets/quantum.svg";
import twiceLogo from "@/assets/twice.svg";

const BRANDS = [
  { name: "Quantum", logo: quantumLogo },
  { name: "Apex", logo: apexLogo },
  { name: "Celestial", logo: celestialLogo },
  { name: "Twice", logo: twiceLogo },
  { name: "Outside", logo: outsideLogo },
  { name: "Pulse", logo: pulseLogo },
  { name: "Echo Valley", logo: echoLogo },
  { name: "Acme Corp", logo: acmeLogo },
];

export function BrandsTicker() {
  return (
    <section className="overflow-x-clip pt-20 pb-24">
      <div className="container">
        <h1 className="text-pretty text-center text-primary/50 text-xl">
          Already chosen by those market leaders
        </h1>
        <div className="mt-10 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
            className="flex flex-none gap-24 pr-24"
          >
            {Array.from({ length: 2 }).map((_, index) => (
              <Fragment key={index}>
                {BRANDS.map((brand) => (
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    key={brand.name}
                    className="w-auto"
                  />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
