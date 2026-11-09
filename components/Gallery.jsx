"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { gallery, galleryFilters } from "@/lib/data";
import { ease, FadeUp, SplitText } from "./ui/motion";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [index, setIndex] = useState(null);
  const items = filter === "all" ? gallery : gallery.filter((g) => g.cat === filter);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (index === null) return;
    window.__lenis?.stop();
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.__lenis?.start();
    };
  }, [index, close, step]);

  return (
    <section id="gallery" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp>
              <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-stone">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> গ্যালারি
              </p>
            </FadeUp>
            <SplitText text={"ডিজাইন ও *ডিটেইল*"} className="font-display text-5xl leading-none md:text-7xl" />
          </div>

          <FadeUp delay={0.1}>
            <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 md:mx-0 md:flex-wrap md:px-0">
              {galleryFilters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm transition-colors duration-300 ${
                    filter === f.id ? "text-cream" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {filter === f.id && (
                    <motion.span layoutId="gal-pill" className="absolute inset-0 rounded-full bg-ink" transition={{ duration: 0.5, ease }} />
                  )}
                  {filter !== f.id && <span className="absolute inset-0 rounded-full border border-ink/12" />}
                  <span className="relative">{f.label}</span>
                </button>
              ))}
            </div>
          </FadeUp>
        </div>

        <motion.div layout className="columns-2 gap-3 md:columns-3 md:gap-5 xl:columns-4">
          <AnimatePresence mode="popLayout">
            {items.map((g, i) => (
              <motion.button
                key={g.src}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.7, ease, delay: (i % 8) * 0.04 }}
                onClick={() => setIndex(i)}
                className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-[18px] bg-sand md:mb-5"
                aria-label={`বড় করে দেখুন: ${g.alt}`}
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={800}
                  height={1000}
                  sizes="(min-width:1280px) 25vw, (min-width:768px) 33vw, 50vw"
                  className="h-auto w-full transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-105"
                />
                <span className="absolute inset-x-3 bottom-3 translate-y-3 rounded-full bg-cream/90 px-3 py-1.5 text-left text-xs text-ink opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.alt}
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {index !== null && items[index] && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={items[index].src}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5, ease }}
                className="relative h-full w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image src={items[index].src} alt={items[index].alt} fill sizes="100vw" className="object-contain" />
              </motion.div>
            </AnimatePresence>

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-cream/70">
              {items[index].alt} · {(index + 1).toLocaleString("bn-BD")}/{items.length.toLocaleString("bn-BD")}
            </p>
            <LbBtn className="right-4 top-4 md:right-8 md:top-8" onClick={close} label="বন্ধ করুন">
              <path d="M6 6l12 12M18 6L6 18" />
            </LbBtn>
            <LbBtn className="left-3 top-1/2 -translate-y-1/2 md:left-8" onClick={(e) => { e.stopPropagation(); step(-1); }} label="আগের ছবি">
              <path d="M15 6l-6 6 6 6" />
            </LbBtn>
            <LbBtn className="right-3 top-1/2 -translate-y-1/2 md:right-8" onClick={(e) => { e.stopPropagation(); step(1); }} label="পরের ছবি">
              <path d="M9 6l6 6-6 6" />
            </LbBtn>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function LbBtn({ children, className, onClick, label }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`absolute flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-cream hover:text-ink ${className}`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        {children}
      </svg>
    </button>
  );
}
