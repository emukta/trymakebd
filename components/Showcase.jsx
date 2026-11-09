"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

/** স্ক্রলের সাথে ছবিটা ছোট ফ্রেম থেকে ফুল-স্ক্রিনে খুলে যায় */
export default function Showcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const clip = useTransform(scrollYProgress, [0, 1], ["inset(14% 12% 14% 12% round 40px)", "inset(0% 0% 0% 0% round 0px)"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const textY = useTransform(scrollYProgress, [0.4, 1], [80, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <section ref={ref} className="relative bg-cream">
      <motion.div style={{ clipPath: clip }} className="relative h-[90svh] min-h-[560px] overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0">
          <Image src="/images/foyer-stone.webp" alt="স্টোন ও কাঠের ফিচার ওয়াল" fill sizes="100vw" className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-ink/45" />
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-cream"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-cream/70">From concept to completion</p>
          <h2 className="font-display text-5xl leading-[1.05] md:text-8xl">
            কল্পনা থেকে <span className="italic text-gold-soft">বাস্তব</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg text-cream/80">
            3D-তে যা দেখবেন, সাইটে ঠিক সেটাই পাবেন — প্রতিটি লাইন, আলো আর ফিনিশিং।
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
