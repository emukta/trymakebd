"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { nav, site } from "@/lib/data";
import { scrollToId } from "./SmoothScroll";
import { ease, easeInOut, INTRO_DELAY } from "./ui/motion";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(v > prev && v > 240);
    setSolid(v > 40);
  });

  useEffect(() => {
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
  }, [open]);

  const go = (id) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 450 : 0);
  };

  const dark = solid || open; // dark text on light bg

  return (
    <>
      <motion.header
        initial={{ y: "-100%" }}
        animate={{ y: hidden && !open ? "-100%" : "0%" }}
        transition={{ duration: 0.7, ease, delay: hidden ? 0 : 0.05 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        {/* announcement bar */}
        <motion.div
          animate={{ height: solid ? 0 : "auto", opacity: solid ? 0 : 1 }}
          transition={{ duration: 0.5, ease }}
          className="overflow-hidden bg-gold text-cream"
        >
          <p className="px-4 py-2 text-center text-[13px] tracking-wide">
            কনসালটেশন ও কোটেশনের জন্য কল করুন{" "}
            <a href={`tel:${site.phoneIntl}`} className="font-semibold underline-offset-4 hover:underline">
              {site.phone}
            </a>
          </p>
        </motion.div>

        <div
          className={`transition-[background-color,backdrop-filter,box-shadow] duration-500 ${
            solid && !open ? "bg-cream/80 shadow-[0_1px_0_rgba(20,17,15,0.08)] backdrop-blur-xl" : "bg-transparent"
          }`}
        >
          <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-10">
            <button onClick={() => go("top")} aria-label="TryMake — হোম" className="relative h-9 w-[132px] md:h-10 md:w-[148px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="TryMake"
                className={`absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-500 ${dark ? "opacity-100" : "opacity-0"}`}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-light.png"
                alt=""
                aria-hidden="true"
                className={`absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-500 ${dark ? "opacity-0" : "opacity-100"}`}
              />
            </button>

            <nav className="hidden items-center gap-1 lg:flex">
              {nav.map((n, i) => (
                <motion.button
                  key={n.id}
                  onClick={() => go(n.id)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: INTRO_DELAY + 0.4 + i * 0.06, duration: 0.8, ease }}
                  className={`group relative px-4 py-2 text-[15px] transition-colors duration-500 ${dark ? "text-ink" : "text-cream"}`}
                >
                  {n.label}
                  <span className="absolute inset-x-4 bottom-1 h-px origin-right scale-x-0 bg-current transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:origin-left group-hover:scale-x-100" />
                </motion.button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => go("contact")}
                className={`hidden rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-500 sm:inline-flex ${
                  dark ? "bg-ink text-cream hover:bg-gold" : "bg-cream text-ink hover:bg-gold hover:text-cream"
                }`}
              >
                কোটেশন নিন
              </button>
              <button
                onClick={() => setOpen((o) => !o)}
                aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
                aria-expanded={open}
                className={`relative flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-500 lg:hidden ${
                  dark ? "border-ink/15 text-ink" : "border-cream/30 text-cream"
                }`}
              >
                <span className="relative block h-3 w-5">
                  <motion.span
                    animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.5, ease }}
                    className="absolute left-0 top-0 h-[1.5px] w-full bg-current"
                  />
                  <motion.span
                    animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.5, ease }}
                    className="absolute bottom-0 left-0 h-[1.5px] w-full bg-current"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-between bg-cream px-6 pb-10 pt-32 lg:hidden"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.8, ease: easeInOut }}
          >
            <ul className="space-y-2">
              {nav.concat({ id: "contact", label: "যোগাযোগ" }).map((n, i) => (
                <li key={n.id} className="overflow-hidden">
                  <motion.button
                    onClick={() => go(n.id)}
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.8, ease, delay: 0.25 + i * 0.06 }}
                    className="flex w-full items-baseline gap-4 py-1 text-left font-display text-4xl text-ink"
                  >
                    <span className="font-sans text-xs text-stone">0{i + 1}</span>
                    {n.label}
                  </motion.button>
                </li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease }}
              className="space-y-1 text-sm text-stone"
            >
              <a href={`tel:${site.phoneIntl}`} className="block text-lg text-ink">{site.phone}</a>
              <a href={`mailto:${site.email}`} className="block">{site.email}</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
