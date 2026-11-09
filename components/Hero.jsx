"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/lib/data";
import { scrollToId } from "./SmoothScroll";
import { ease, INTRO_DELAY, Magnetic, SplitText } from "./ui/motion";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const d = INTRO_DELAY;

  return (
    <section ref={ref} id="top" className="grain relative h-[100svh] min-h-[680px] overflow-hidden bg-ink text-cream">
      {/* background image */}
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.25, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease, delay: d - 0.5 }}
        >
          <Image
            src="/images/partition-glow.webp"
            alt="TryMake — লাইটিং সহ কাঠের পার্টিশন ইন্টেরিয়র"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_40%]"
          />
        </motion.div>
      </motion.div>

      {/* overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />

      {/* content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-14 md:px-10 md:pb-20"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: d + 0.1 }}
          className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cream/75"
        >
          <span className="h-px w-10 bg-gold-soft" />
          Interior · Exterior · Renovation — Dhaka
        </motion.p>

        <SplitText
          as="h1"
          onMount
          delay={d + 0.15}
          text={"Make Your Dream\n*Perfect.*"}
          accentClass="italic text-gold-soft"
          className="font-display text-[15vw] font-medium leading-[0.92] tracking-[-0.02em] sm:text-[12vw] lg:text-[9.2vw] xl:text-[8.6rem]"
        />

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: d + 0.7 }}
            className="max-w-md text-lg leading-relaxed text-cream/80 md:text-xl"
          >
            অফিস, শোরুম ও কমার্শিয়াল স্পেসের জন্য ডিজাইন থেকে এক্সিকিউশন — এক ছাদের নিচে, এক টিমে।
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: d + 0.85 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <button
                onClick={() => scrollToId("contact")}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-cream py-4 pl-7 pr-4 text-[15px] font-medium text-ink"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 rounded-full bg-gold transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-y-100" />
                <span className="relative transition-colors duration-500 group-hover:text-cream">কনসালটেশন বুক করুন</span>
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-ink text-cream transition-transform duration-500 group-hover:rotate-[-45deg]">
                  <Arrow />
                </span>
              </button>
            </Magnetic>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-4 text-[15px] backdrop-blur-sm transition-colors duration-500 hover:border-cream hover:bg-cream/10"
            >
              WhatsApp
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* rotating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease, delay: d + 1 }}
        className="absolute right-10 top-32 z-10 hidden lg:block"
      >
        <button onClick={() => scrollToId("services")} aria-label="সেবাসমূহ দেখুন" className="relative block h-32 w-32">
          <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
            <defs>
              <path id="circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
            </defs>
            <text className="fill-cream/80 text-[9.5px] uppercase tracking-[0.32em]">
              <textPath href="#circle">TryMake • Interior • Exterior •</textPath>
            </text>
          </svg>
          <span className="absolute inset-0 m-auto flex h-11 w-11 items-center justify-center rounded-full bg-gold-soft text-ink">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </span>
        </button>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: d + 1.3, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <div className="h-12 w-px overflow-hidden bg-cream/20">
          <motion.div
            className="h-1/2 w-full bg-cream"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export function Arrow({ className = "" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
