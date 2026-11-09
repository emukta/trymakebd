"use client";

import { motion } from "framer-motion";
import { nav, services, site } from "@/lib/data";
import { scrollToId } from "./SmoothScroll";
import { ease } from "./ui/motion";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-ink pt-20 text-cream">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-12 border-b border-cream/10 pb-16 md:grid-cols-12">
          <div className="md:col-span-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-light.png" alt="TryMake" className="h-12 w-auto" />
            <p className="mt-6 max-w-xs text-cream/60">
              অফিস, শোরুম ও কমার্শিয়াল স্পেসের ইন্টেরিয়র, এক্সটেরিয়র ও রেনোভেশন — ডিজাইন থেকে এক্সিকিউশন।
            </p>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold-soft hover:bg-gold-soft hover:text-ink"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 8h3V4h-3c-2.8 0-4 1.7-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6.6-.6H14z" />
              </svg>
            </a>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-5 text-xs uppercase tracking-[0.3em] text-cream/40">সেবাসমূহ</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <button onClick={() => scrollToId("services")} className="text-left text-cream/75 transition-colors hover:text-gold-soft">
                    {s.en}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-5 text-xs uppercase tracking-[0.3em] text-cream/40">লিংক</h4>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.id}>
                  <button onClick={() => scrollToId(n.id)} className="text-cream/75 transition-colors hover:text-gold-soft">
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-5 text-xs uppercase tracking-[0.3em] text-cream/40">যোগাযোগ</h4>
            <ul className="space-y-3 text-cream/75">
              <li><a href={`tel:${site.phoneIntl}`} className="hover:text-gold-soft">{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="hover:text-gold-soft">{site.email}</a></li>
              <li className="text-cream/55">{site.address}</li>
            </ul>
          </div>
        </div>

        {/* giant wordmark */}
        <div className="relative select-none py-6" aria-hidden="true">
          <motion.p
            initial={{ y: "60%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.4, ease }}
            className="whitespace-nowrap text-center font-display text-[22vw] leading-[0.85] tracking-[-0.04em] text-cream/[0.06]"
          >
            Try<span className="italic text-gold/30">Make</span>
          </motion.p>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-cream/10 py-6 text-sm text-cream/45 md:flex-row">
          <p suppressHydrationWarning>© {new Date().getFullYear()} TryMake · {site.domain}</p>
          <button onClick={() => scrollToId("top")} className="hover:text-cream">উপরে যান ↑</button>
        </div>
      </div>
    </footer>
  );
}
