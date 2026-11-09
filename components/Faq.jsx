"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs, site } from "@/lib/data";
import { ease, FadeUp, SplitText } from "./ui/motion";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-sand/50 py-24 md:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <FadeUp>
            <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-stone">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> প্রশ্নোত্তর
            </p>
          </FadeUp>
          <SplitText text={"সাধারণ *প্রশ্ন*"} className="font-display text-5xl leading-none md:text-7xl" />
          <FadeUp delay={0.1} className="mt-6 text-lg text-ink-soft">
            আরও কিছু জানতে চান? সরাসরি কল করুন{" "}
            <a href={`tel:${site.phoneIntl}`} className="font-semibold text-ink underline decoration-gold underline-offset-4">
              {site.phone}
            </a>
          </FadeUp>
        </div>

        <div className="lg:col-span-8">
          {faqs.map((f, i) => {
            const on = open === i;
            return (
              <FadeUp key={f.q} delay={i * 0.05} amount={0.4}>
                <div className="border-b border-ink/10">
                  <button
                    onClick={() => setOpen(on ? -1 : i)}
                    aria-expanded={on}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                  >
                    <span className={`text-xl transition-colors duration-300 md:text-2xl ${on ? "text-ink" : "text-ink-soft"}`}>{f.q}</span>
                    <span
                      className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ${
                        on ? "border-ink bg-ink text-cream" : "border-ink/15 text-ink"
                      }`}
                    >
                      <span className="absolute h-[1.5px] w-4 bg-current" />
                      <motion.span
                        animate={{ rotate: on ? 90 : 0, opacity: on ? 0 : 1 }}
                        transition={{ duration: 0.4, ease }}
                        className="absolute h-4 w-[1.5px] bg-current"
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-8 text-lg leading-relaxed text-ink-soft">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
