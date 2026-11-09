"use client";

import Image from "next/image";
import { Counter, FadeUp, Parallax, RevealImage, ScrollText } from "./ui/motion";

const stats = [
  { to: 5, suffix: "", label: "সার্ভিস ক্যাটাগরি" },
  { to: 29, suffix: "+", label: "ইন্টেরিয়র ও এক্সটেরিয়র সেবা" },
  { to: 3, suffix: "D", label: "কাজের আগেই ভিজ্যুয়ালাইজেশন", latin: true },
];

export default function About() {
  return (
    <section className="relative bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <FadeUp className="lg:col-span-3">
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-stone">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> আমাদের সম্পর্কে
            </p>
          </FadeUp>

          <div className="lg:col-span-9">
            <ScrollText
              className="font-display text-[1.9rem] leading-[1.35] text-ink md:text-5xl md:leading-[1.25]"
              text="TryMake বিশ্বাস করে — একটি সুন্দর স্পেস শুধু চোখের আরাম নয়, এটি আপনার ব্যবসার পরিচয়। তাই প্ল্যানিং, 3D ডিজাইন, BOQ থেকে শুরু করে সাইটে ফাইনাল হ্যান্ডওভার পর্যন্ত পুরো কাজ আমরা এক টিমে সম্পন্ন করি।"
            />

            <div className="mt-16 grid grid-cols-1 gap-10 border-t border-ink/10 pt-10 sm:grid-cols-3">
              {stats.map((s, i) => (
                <FadeUp key={s.label} delay={i * 0.1}>
                  <div className="font-display text-6xl text-ink md:text-7xl">
                    <Counter to={s.to} suffix={s.suffix} latin={s.latin} />
                  </div>
                  <p className="mt-2 text-stone">{s.label}</p>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

        {/* image composition */}
        <div className="mt-24 grid gap-5 md:mt-32 md:grid-cols-12 md:gap-6">
          <RevealImage className="aspect-[4/5] rounded-[28px] md:col-span-5">
            <Image src="/images/foyer-marble.webp" alt="মার্বেল ও গোল্ড লাইনের ফিচার ওয়াল" fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
          </RevealImage>
          <div className="flex flex-col justify-between gap-6 md:col-span-7">
            <Parallax className="aspect-[16/11] rounded-[28px]" offset={60}>
              <Image src="/images/wardrobe-green.webp" alt="গ্রিন ওয়ার্ডরোব ও ড্রেসিং ইউনিট" fill sizes="(min-width:768px) 55vw, 100vw" className="object-cover" />
            </Parallax>
            <FadeUp className="grid gap-6 sm:grid-cols-2">
              <p className="text-lg leading-relaxed text-ink-soft">
                প্রতিটি প্রজেক্ট শুরু হয় আপনার কথা শোনার মাধ্যমে — কীভাবে কাজ করেন, কাস্টমার কীভাবে আসে, বাজেট কত।
              </p>
              <p className="text-lg leading-relaxed text-ink-soft">
                তারপর সেই প্রয়োজনকে আমরা রূপ দিই মেটেরিয়াল, আলো আর ডিটেইলে — যাতে ফলাফল হয় ঠিক আপনার স্বপ্নের মতো।
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
