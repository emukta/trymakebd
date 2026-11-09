"use client";

import { motion } from "framer-motion";
import Marquee from "./Marquee";
import { whyUs, marqueeWords } from "@/lib/data";
import { ease, SplitText } from "./ui/motion";

const icons = {
  layers: <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5" />,
  cube: <path d="M12 2l9 5v10l-9 5-9-5V7l9-5zM12 22V12M21 7l-9 5-9-5" />,
  doc: <path d="M7 3h7l5 5v13H7V3zM14 3v5h5M10 13h6M10 17h6" />,
  shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM8.5 12l2.5 2.5 4.5-5" />,
};

export default function WhyUs() {
  return (
    <section className="overflow-hidden bg-cream pb-24 md:pb-36">
      <Marquee
        items={marqueeWords}
        className="border-y border-ink/10 py-6 font-display text-4xl text-ink md:py-8 md:text-6xl"
      />

      <div className="mx-auto mt-24 max-w-[1440px] px-5 md:mt-32 md:px-10">
        <div className="mb-14 max-w-3xl">
          <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-stone">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> কেন TryMake
          </p>
          <SplitText
            text={"আপনার স্পেস, আমাদের *দায়িত্ব*"}
            className="font-display text-5xl leading-[1.05] md:text-7xl"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5">
          {whyUs.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease, delay: i * 0.09 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[24px] border border-ink/8 bg-sand/40 p-7 md:p-8"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-y-100" />
              <div className="relative">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-cream">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
                    {icons[w.icon]}
                  </svg>
                </span>
                <h3 className="mt-10 text-xl font-semibold text-ink transition-colors duration-500 group-hover:text-cream">{w.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft transition-colors duration-500 group-hover:text-cream/70">{w.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
