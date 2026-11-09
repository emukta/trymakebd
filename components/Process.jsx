"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { process } from "@/lib/data";
import { ease, FadeUp, RevealImage, SplitText } from "./ui/motion";

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const line = useSpring(scrollYProgress, { stiffness: 100, damping: 28 });

  return (
    <section id="process" className="bg-sand/50 py-24 md:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <FadeUp>
              <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-stone">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> কাজের ধাপ
              </p>
            </FadeUp>
            <SplitText text={"কীভাবে আমরা\n*কাজ* করি"} className="font-display text-5xl leading-[1.05] md:text-7xl" />
            <FadeUp delay={0.1} className="mt-6 max-w-md text-lg text-ink-soft">
              পরিষ্কার পরিকল্পনা, স্বচ্ছ হিসাব আর নিয়মিত তদারকি — যাতে প্রতিটি ধাপে আপনি জানেন কী হচ্ছে।
            </FadeUp>
            <RevealImage className="mt-10 hidden aspect-[5/4] rounded-[24px] lg:block">
              <Image src="/images/vanity-spec.webp" alt="মাপ ও স্পেসিফিকেশন সহ ডিজাইন" fill sizes="40vw" className="object-cover" />
            </RevealImage>
          </div>
        </div>

        <div ref={ref} className="relative lg:col-span-7">
          {/* progress line */}
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-ink/10 md:left-[27px]" />
          <motion.div
            style={{ scaleY: line }}
            className="absolute bottom-0 left-[19px] top-0 w-px origin-top bg-gold md:left-[27px]"
          />

          <ol className="space-y-6 md:space-y-8">
            {process.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease }}
                className="relative flex gap-6 md:gap-8"
              >
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold bg-cream font-display text-lg text-gold md:h-14 md:w-14 md:text-2xl">
                  {(i + 1).toLocaleString("bn-BD")}
                </span>
                <div className="flex-1 rounded-[22px] border border-ink/5 bg-cream p-6 transition-shadow duration-500 hover:shadow-[0_20px_60px_-30px_rgba(20,17,15,0.35)] md:p-8">
                  <h3 className="text-xl font-semibold text-ink md:text-2xl">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{step.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
