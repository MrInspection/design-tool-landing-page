"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "How is Layers different from other design tools?",
    answer:
      "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
  },
  {
    question: "Is there a learning curve?",
    answer:
      "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
  },
  {
    question: "How do you handle version control?",
    answer:
      "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
    question: "Can I work offline?",
    answer:
      "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
    question: "How does Layers handle collaboration?",
    answer:
      "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
  },
];

export function FAQSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="py-24">
      <div className="container flex flex-col items-center justify-center">
        <Tag>Faqs</Tag>
        <h2 className="mt-6 max-w-xl text-center font-medium text-6xl">
          Questions? We&apos;ve got{" "}
          <span className="text-lime-400">answers</span>
        </h2>
        <div className="mt-12 flex max-w-3xl flex-col gap-6">
          {FAQS.map((faq, index) => (
            // biome-ignore lint/a11y/noStaticElementInteractions: ignored
            <div
              key={index}
              className="cursor-pointer rounded-2xl border border-foreground/10 bg-neutral-900 p-6"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-lg">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={cn(
                    "feather feather-plus shrink-0 text-lime-400",
                    selectedIndex === index &&
                      "rotate-45 transition duration-300",
                  )}
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
              <AnimatePresence>
                {selectedIndex === index && (
                  <motion.div
                    initial={{ height: 0, marginTop: 0 }}
                    animate={{ height: "auto", marginTop: 16 }}
                    exit={{ height: 0, marginTop: 0 }}
                    className={cn("mt-4 overflow-hidden")}
                  >
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
