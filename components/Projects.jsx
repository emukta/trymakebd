"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { projects } from "@/lib/data";
import { SplitText } from "./ui/motion";

/** স্ক্রল করলে হরাইজন্টালি চলবে — পিন করা গ্যালারি */
export default function Projects() {
  const target = useRef(null);
  const track = useRef(null);
  const distRef = useRef(0);
  const [height, setHeight] = useState("300vh");

  useEffect(() => {
    const measure = () => {
      if (!track.current) return;
      const d = Math.max(0, track.current.scrollWidth - window.innerWidth);
      distRef.current = d;
      setHeight(`${d + window.innerHeight}px`);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, (v) => -v * distRef.current);
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="projects" ref={target} style={{ height }} className="relative bg-cream">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-10 flex w-full max-w-[1440px] items-end justify-between gap-6 px-5 md:mb-14 md:px-10">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-stone">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> নির্বাচিত কাজ
            </p>
            <SplitText text={"আমাদের *প্রজেক্ট*"} className="font-display text-5xl leading-none md:text-7xl" />
          </div>
          <div className="hidden w-48 md:block">
            <div className="mb-2 flex justify-between text-xs text-stone">
              <span>স্ক্রল করুন</span>
              <span>০{projects.length.toLocaleString("bn-BD")} প্রজেক্ট</span>
            </div>
            <div className="h-px w-full bg-ink/10">
              <motion.div style={{ scaleX: progress }} className="h-full origin-left bg-ink" />
            </div>
          </div>
        </div>

        <motion.div ref={track} style={{ x }} className="flex w-max gap-5 px-5 will-change-transform md:gap-7 md:px-10">
          {projects.map((p, i) => (
            <Card key={p.title} p={p} i={i} />
          ))}
          <div className="flex w-[70vw] shrink-0 items-center justify-center sm:w-[40vw] lg:w-[28vw]">
            <p className="font-display text-4xl leading-tight text-stone md:text-5xl">
              পরবর্তী প্রজেক্ট <br />
              <span className="italic text-gold">আপনার?</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Card({ p, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: Math.min(i, 3) * 0.08 }}
      className={`group relative w-[78vw] shrink-0 sm:w-[46vw] lg:w-[30vw] ${i % 2 ? "lg:mt-16" : ""}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-sand">
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(min-width:1024px) 30vw, (min-width:640px) 46vw, 78vw"
          className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/20" />
        <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs uppercase tracking-wider text-ink backdrop-blur">
          {p.tag}
        </span>
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="text-xl font-medium text-ink">{p.title}</h3>
        <span className="font-display text-lg text-stone">{String(i + 1).padStart(2, "0")}</span>
      </div>
    </motion.article>
  );
}
