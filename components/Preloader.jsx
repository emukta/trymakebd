"use client";

import { useEffect } from "react";

/*
  প্রিলোডার এখন সম্পূর্ণ CSS দিয়ে চলে (globals.css → .tm-preloader)।
  JavaScript দেরিতে লোড হলেও বা লোড না হলেও এটি নিজে থেকেই ~১.৯ সেকেন্ডে সরে যায়,
  তাই প্রথমবার ভিজিটে সাইট আর আটকে থাকবে না — রিফ্রেশ লাগবে না।
*/
const HIDE_AT = 1900; // ms — CSS অ্যানিমেশন শেষ হওয়ার সময়ের সাথে মিল রেখে

export default function Preloader() {
  useEffect(() => {
    const remaining = HIDE_AT - performance.now();
    // JS দেরিতে এলে (প্রিলোডার ইতিমধ্যে শেষ) কিছুই লক করব না
    if (remaining <= 0) return;

    window.scrollTo(0, 0);
    document.documentElement.style.overflow = "hidden";
    const stop = requestAnimationFrame(() => window.__lenis?.stop());
    const t = setTimeout(() => {
      document.documentElement.style.overflow = "";
      window.__lenis?.start();
    }, remaining);
    return () => {
      cancelAnimationFrame(stop);
      clearTimeout(t);
      document.documentElement.style.overflow = "";
      window.__lenis?.start();
    };
  }, []);

  return (
    <div className="tm-preloader fixed inset-0 z-[100] flex items-center justify-center bg-ink text-cream" aria-hidden="true">
      <div className="flex flex-col items-center gap-6">
        <div className="overflow-hidden">
          <div className="tm-pl-title font-display text-5xl md:text-7xl tracking-tight">
            Try<span className="italic text-gold-soft">Make</span>
          </div>
        </div>
        <div className="h-px w-40 overflow-hidden bg-cream/15">
          <div className="tm-pl-line h-full origin-left bg-gold-soft" />
        </div>
        <p className="tm-pl-tag text-[11px] uppercase tracking-[0.35em]">Make Your Dream Perfect</p>
      </div>
    </div>
  );
}
