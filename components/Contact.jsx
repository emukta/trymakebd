"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services, site } from "@/lib/data";
import { ease, FadeUp, Magnetic, SplitText } from "./ui/motion";
import { Arrow } from "./Hero";

const contacts = [
  { label: "ফোন", value: site.phone, href: `tel:${site.phoneIntl}` },
  { label: "WhatsApp", value: site.phone, href: `https://wa.me/${site.whatsapp}`, ext: true },
  { label: "ইমেইল", value: site.email, href: `mailto:${site.email}` },
  { label: "Facebook", value: "facebook.com/trymakebd", href: site.facebook, ext: true },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", size: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildText = () =>
    [
      "আসসালামু আলাইকুম, TryMake!",
      `নাম: ${form.name}`,
      `ফোন: ${form.phone}`,
      form.service && `সেবা: ${form.service}`,
      form.size && `স্পেসের আকার: ${form.size}`,
      form.message && `বিস্তারিত: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "নাম লিখুন";
    if (!/^(\+?88)?01[3-9]\d{8}$/.test(form.phone.replace(/[\s-]/g, ""))) e.phone = "সঠিক মোবাইল নম্বর দিন";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const sendWhatsApp = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(buildText())}`, "_blank", "noopener");
    setSent(true);
  };

  const sendEmail = () => {
    if (!validate()) return;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      "কোটেশন অনুরোধ — " + (form.service || "ইন্টেরিয়র")
    )}&body=${encodeURIComponent(buildText())}`;
    setSent(true);
  };

  const field =
    "w-full rounded-2xl border border-cream/12 bg-cream/[0.04] px-5 py-4 text-cream placeholder:text-cream/35 outline-none transition-colors duration-300 focus:border-gold-soft focus:bg-cream/[0.07]";

  return (
    <section id="contact" className="grain relative overflow-hidden bg-navy py-24 text-cream md:py-36">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-gold/20 blur-[140px]" />

      <div className="relative mx-auto grid max-w-[1440px] gap-16 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <FadeUp>
            <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cream/55">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-soft" /> যোগাযোগ
            </p>
          </FadeUp>
          <SplitText
            text={"আপনার স্বপ্নের\nস্পেস নিয়ে *কথা* বলি"}
            accentClass="italic text-gold-soft"
            className="font-display text-5xl leading-[1.08] md:text-7xl"
          />
          <FadeUp delay={0.1} className="mt-6 max-w-md text-lg text-cream/70">
            ফর্মটি পূরণ করুন — সরাসরি আমাদের WhatsApp-এ চলে যাবে। অথবা নিচের যেকোনো মাধ্যমে যোগাযোগ করুন।
          </FadeUp>

          <ul className="mt-12 divide-y divide-cream/10 border-y border-cream/10">
            {contacts.map((c, i) => (
              <motion.li
                key={c.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease, delay: 0.1 + i * 0.06 }}
              >
                  <a
                    href={c.href}
                    {...(c.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span className="text-sm text-cream/50">{c.label}</span>
                    <span className="flex items-center gap-3 text-lg transition-colors duration-300 group-hover:text-gold-soft">
                      {c.value}
                      <Arrow className="-rotate-45 transition-transform duration-500 group-hover:rotate-0" />
                    </span>
                  </a>
              </motion.li>
            ))}
          </ul>
          <FadeUp delay={0.4} className="mt-6 text-cream/55">
            📍 {site.address}
          </FadeUp>
        </div>

        <div className="lg:col-span-7">
          <FadeUp delay={0.15}>
            <div className="relative rounded-[28px] border border-cream/10 bg-cream/[0.03] p-6 backdrop-blur md:p-10">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease }}
                    className="flex min-h-[460px] flex-col items-center justify-center text-center"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-soft text-ink"
                    >
                      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <motion.path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.6, delay: 0.35, ease }}
                        />
                      </svg>
                    </motion.span>
                    <h3 className="mt-8 font-display text-4xl">ধন্যবাদ, {form.name}!</h3>
                    <p className="mt-3 max-w-sm text-cream/70">
                      মেসেজটি পাঠানো সম্পন্ন করুন — আমাদের টিম দ্রুত আপনার সাথে যোগাযোগ করবে।
                    </p>
                    <button onClick={() => setSent(false)} className="mt-8 text-sm text-gold-soft underline underline-offset-4">
                      আবার ফর্ম পূরণ করুন
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={sendWhatsApp}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    noValidate
                    className="grid gap-4 sm:grid-cols-2"
                  >
                    <Field label="আপনার নাম *" error={errors.name}>
                      <input className={field} value={form.name} onChange={set("name")} placeholder="যেমন: রহিম আহমেদ" autoComplete="name" />
                    </Field>
                    <Field label="মোবাইল নম্বর *" error={errors.phone}>
                      <input className={field} value={form.phone} onChange={set("phone")} placeholder="01XXXXXXXXX" inputMode="tel" autoComplete="tel" />
                    </Field>
                    <Field label="কোন সেবা প্রয়োজন">
                      <select className={`${field} appearance-none`} value={form.service} onChange={set("service")}>
                        <option value="" className="bg-navy">সিলেক্ট করুন</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.en} className="bg-navy">
                            {s.en}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="স্পেসের আকার (আনুমানিক)">
                      <input className={field} value={form.size} onChange={set("size")} placeholder="যেমন: ১২০০ স্কয়ার ফুট" />
                    </Field>
                    <Field label="প্রজেক্টের বিস্তারিত" className="sm:col-span-2">
                      <textarea
                        className={`${field} min-h-[140px] resize-none`}
                        value={form.message}
                        onChange={set("message")}
                        placeholder="লোকেশন, বাজেট, কবে কাজ শুরু করতে চান…"
                      />
                    </Field>

                    <div className="mt-2 flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
                      <Magnetic strength={0.2}>
                        <button
                          type="submit"
                          className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gold-soft py-4 pl-7 pr-4 font-medium text-ink sm:w-auto"
                        >
                          <span className="absolute inset-0 origin-bottom scale-y-0 rounded-full bg-cream transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-y-100" />
                          <span className="relative">WhatsApp-এ পাঠান</span>
                          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-ink text-cream transition-transform duration-500 group-hover:rotate-[-45deg]">
                            <Arrow />
                          </span>
                        </button>
                      </Magnetic>
                      <button
                        type="button"
                        onClick={sendEmail}
                        className="rounded-full border border-cream/20 px-6 py-4 text-cream/85 transition-colors hover:border-cream hover:text-cream"
                      >
                        ইমেইলে পাঠান
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm text-cream/60">{label}</span>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-2 block text-sm text-red-300"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
}
