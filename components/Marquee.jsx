"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const wrap = (min, max, v) => {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
};

/** স্ক্রল ভেলোসিটি অনুযায়ী গতি বাড়ে/দিক বদলায় এমন ইনফিনিট মার্কি */
export default function Marquee({ items, baseVelocity = -2.2, className = "" }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [0, 1000], [0, 4], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);
  const dir = useRef(1);

  useAnimationFrame((_, delta) => {
    let move = dir.current * baseVelocity * (delta / 1000);
    if (factor.get() < 0) dir.current = -1;
    else if (factor.get() > 0) dir.current = 1;
    move += dir.current * move * factor.get();
    baseX.set(baseX.get() + move);
  });

  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div style={{ x }} className="flex flex-nowrap whitespace-nowrap">
        {[0, 1, 2, 3].map((k) => (
          <span key={k} className="flex shrink-0 items-center" aria-hidden={k > 0}>
            {items.map((t, i) => (
              <span key={i} className="flex items-center">
                <span className={i % 2 ? "italic text-gold" : ""}>{t}</span>
                <span className="mx-8 inline-block h-3 w-3 rotate-45 border border-current opacity-50 md:mx-12" />
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
