"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  animate,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export const ease = [0.16, 1, 0.3, 1];
export const easeInOut = [0.76, 0, 0.24, 1];
/** প্রিলোডার শেষ হওয়ার পর হিরো অ্যানিমেশন শুরু হবে */
/* প্রিলোডার পেজ লোডের ~১.১ সেকেন্ডে সরতে শুরু করে। JS দেরিতে এলে বাকি সময়টুকুই অপেক্ষা,
   যাতে প্রিলোডার সরে যাওয়ার পর হিরো খালি দেখা না যায়। */
const PRELOADER_OUT = 1.15;
export const INTRO_DELAY =
  typeof performance !== "undefined"
    ? Math.max(0.1, PRELOADER_OUT - performance.now() / 1000)
    : PRELOADER_OUT;

/* ───────── Fade-up on scroll ───────── */
export function FadeUp({ children, delay = 0, y = 40, className = "", amount = 0.25 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 1.1, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ───────── Masked word-by-word reveal ─────────
   "\n" = নতুন লাইন, *word* = ইটালিক গোল্ড অ্যাকসেন্ট */
export function SplitText({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
  stagger = 0.07,
  onMount = false,
  accentClass = "italic text-gold",
}) {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const child = {
    hidden: { y: "115%", rotate: 4 },
    show: { y: "0%", rotate: 0, transition: { duration: 1.15, ease } },
  };
  const trigger = onMount
    ? { initial: "hidden", animate: "show" }
    : { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.4 } };

  const plain = text.replace(/\*/g, "").replace(/\n/g, " ");
  const lines = text.split("\n");

  return (
    <Tag className={className} aria-label={plain}>
      <motion.span className="block" variants={container} {...trigger} aria-hidden="true">
        {lines.map((line, li) => {
          const words = line.split(" ").filter(Boolean);
          return (
            <span key={li} className="block">
              {words.map((w, wi) => {
                const accent = w.startsWith("*") && w.endsWith("*");
                const word = accent ? w.slice(1, -1) : w;
                return (
                  <span key={wi}>
                    <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
                      <motion.span
                        variants={child}
                        className={`inline-block origin-bottom-left will-change-transform ${accent ? accentClass : ""}`}
                      >
                        {word}
                      </motion.span>
                    </span>
                    {wi < words.length - 1 ? " " : ""}
                  </span>
                );
              })}
            </span>
          );
        })}
      </motion.span>
    </Tag>
  );
}

/* ───────── Scroll-linked word highlight ───────── */
export function ScrollText({ text, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => {
        const start = i / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, start + 1 / words.length]}>
            {w}
          </Word>
        );
      })}
    </p>
  );
}

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <>
      <motion.span style={{ opacity }}>{children}</motion.span>{" "}
    </>
  );
}

/* ───────── Parallax image wrapper ───────── */
export function Parallax({ children, offset = 80, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute -inset-y-[12%] inset-x-0">
        {children}
      </motion.div>
    </div>
  );
}

/* ───────── Clip-path image reveal ───────── */
export function RevealImage({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.4, ease: easeInOut, delay }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.3 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.8, ease, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ───────── Magnetic hover ───────── */
export function Magnetic({ children, strength = 0.3, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.3 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ───────── Count-up number (বাংলা সংখ্যা) ───────── */
const bn = (n) => Math.round(n).toLocaleString("bn-BD");

export function Counter({ to, suffix = "", duration = 2, latin = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const fmt = latin ? (n) => String(Math.round(n)) : bn;
  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration,
      ease,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = fmt(v) + suffix;
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, to, suffix, duration]);
  return <span ref={ref}>{fmt(0) + suffix}</span>;
}
