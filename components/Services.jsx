"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/lib/data";
import { scrollToId } from "./SmoothScroll";
import { ease, easeInOut, FadeUp, SplitText } from "./ui/motion";
import { Arrow } from "./Hero";

export default function Services() {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <section id="services" className="grain relative overflow-hidden bg-ink py-24 text-cream md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp>
              <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cream/55">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-soft" /> 🏢 আমাদের প্রধান সেবাসমূহ
              </p>
            </FadeUp>
            <SplitText
              text={"এক টিম, *পাঁচটি* বিশেষজ্ঞতা"}
              accentClass="italic text-gold-soft"
              className="font-display text-5xl leading-[1.05] md:text-7xl"
            />
          </div>
          <FadeUp delay={0.15} className="max-w-sm text-cream/65">
            ডিজাইন কনসালটেন্সি থেকে শুরু করে ফুল এক্সিকিউশন — আপনার প্রজেক্টের প্রয়োজন অনুযায়ী যেকোনো সেবা আলাদাভাবে বা একসাথে।
          </FadeUp>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* tab list */}
          <div className="lg:col-span-5">
            <ul className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:block lg:space-y-0 lg:overflow-visible lg:px-0">
              {services.map((item, i) => {
                const on = i === active;
                return (
                  <li key={item.id} className="shrink-0 lg:border-b lg:border-cream/10">
                    <button
                      onClick={() => setActive(i)}
                      onMouseEnter={() => window.matchMedia("(hover: hover)").matches && setActive(i)}
                      className={`group relative flex w-full items-center gap-5 rounded-full px-5 py-3 text-left transition-colors duration-500 lg:rounded-none lg:px-0 lg:py-7 ${
                        on ? "bg-cream text-ink lg:bg-transparent lg:text-cream" : "bg-cream/5 text-cream/60 hover:text-cream lg:bg-transparent"
                      }`}
                    >
                      <span className="hidden font-sans text-xs tabular-nums text-cream/40 lg:inline">0{i + 1}</span>
                      <span className="flex-1">
                        <span className="block whitespace-nowrap font-display text-lg lg:text-[2.1rem] lg:leading-tight">{item.en}</span>
                        <span className="mt-1 hidden text-sm text-cream/50 lg:block">{item.bn}</span>
                      </span>
                      <span className="relative hidden h-10 w-10 items-center justify-center lg:flex">
                        {on && (
                          <motion.span
                            layoutId="svc-dot"
                            className="absolute inset-0 rounded-full bg-gold-soft"
                            transition={{ duration: 0.6, ease }}
                          />
                        )}
                        <Arrow className={`relative transition-colors duration-300 ${on ? "text-ink" : "text-cream/30 group-hover:text-cream"}`} />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* panel */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-ink-soft">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={s.id}
                  className="absolute inset-0"
                  initial={{ clipPath: "inset(0% 0% 0% 100%)" }}
                  animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  exit={{ opacity: 0.4 }}
                  transition={{ duration: 1, ease: easeInOut }}
                >
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.6, ease }}
                  >
                    <Image src={s.image} alt={s.bn} fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={s.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease }}
                    className="max-w-md text-lg text-cream/90 md:text-xl"
                  >
                    {s.blurb}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.ul
                key={s.id}
                initial="hidden"
                animate="show"
                exit="exit"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
                  exit: { opacity: 0, transition: { duration: 0.2 } },
                }}
                className="mt-8 grid gap-x-8 sm:grid-cols-2"
              >
                {s.items.map((it) => (
                  <motion.li
                    key={it}
                    variants={{
                      hidden: { opacity: 0, y: 18 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
                    }}
                    className="flex items-start gap-3 border-b border-cream/10 py-4 text-[17px] text-cream/85"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-soft" />
                    {it}
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>

            <button
              onClick={() => scrollToId("contact")}
              className="group mt-8 inline-flex items-center gap-3 text-[15px] text-gold-soft"
            >
              <span className="relative">
                এই সেবার জন্য কোটেশন নিন
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left bg-current transition-transform duration-500 group-hover:scale-x-0" />
              </span>
              <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
