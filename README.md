# TryMake — TryMakebd.com

Interior design landing page — **Next.js 16 · React 19 · Tailwind CSS v4 · Framer Motion · Lenis smooth scroll**
সম্পূর্ণ **JavaScript (TypeScript নেই)** এবং **Static Export** — যেকোনো হোস্টিংয়ে (Cloudflare Pages, Netlify, cPanel) চলবে।

## চালানোর নিয়ম

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # স্ট্যাটিক সাইট তৈরি হবে → out/ ফোল্ডারে
```

`out/` ফোল্ডারের সব ফাইল আপনার হোস্টিংয়ে আপলোড করলেই সাইট লাইভ।

**Cloudflare Pages:** Build command `npm run build` · Output directory `out`

## কোথায় কী বদলাবেন

| কী বদলাতে চান | ফাইল |
|---|---|
| ফোন, ইমেইল, ঠিকানা, Facebook, সব সেবা, প্রজেক্ট, FAQ, গ্যালারি | `lib/data.js` |
| রং ও ফন্ট | `app/globals.css` (`@theme`) ও `app/layout.jsx` |
| SEO টাইটেল / ডেসক্রিপশন | `app/layout.jsx` → `metadata` |
| ছবি | `public/images/` (একই নামে রিপ্লেস করুন, বা `data.js`-এ নতুন পাথ দিন) |
| লোগো | `public/logo.png` (হালকা ব্যাকগ্রাউন্ড), `public/logo-light.png` (ডার্ক ব্যাকগ্রাউন্ড) |

## সেকশন ও অ্যানিমেশন

1. **Preloader** — কার্টেন-রিভিল ইন্ট্রো
2. **Header** — স্ক্রল-ডাউনে লুকায়, আপে ফিরে আসে; ট্রান্সপারেন্ট → গ্লাস ব্লার
3. **Hero** — ফুল-স্ক্রিন ছবি, মাস্কড ওয়ার্ড রিভিল হেডলাইন, প্যারালাক্স, ম্যাগনেটিক বাটন, ঘুরন্ত ব্যাজ
4. **About** — স্ক্রলের সাথে শব্দ-শব্দ হাইলাইট, কাউন্ট-আপ সংখ্যা, ক্লিপ-পাথ ইমেজ রিভিল
5. **Services** — ৫ ক্যাটাগরির ট্যাব, ছবি ওয়াইপ ট্রানজিশন, স্ট্যাগার্ড লিস্ট
6. **Projects** — স্ক্রল করলে হরাইজন্টাল পিনড গ্যালারি
7. **Showcase** — স্ক্রলে ছোট ফ্রেম থেকে ফুল-স্ক্রিনে খুলে যাওয়া ছবি
8. **Process** — ৬ ধাপ, স্ক্রলের সাথে গোল্ড লাইন পূরণ হয়
9. **Why Us** — স্ক্রল-ভেলোসিটি মার্কি + হোভার কার্ড
10. **Gallery** — ফিল্টার, ম্যাসনরি গ্রিড, লাইটবক্স (কীবোর্ড ← → Esc)
11. **FAQ** — স্মুথ অ্যাকর্ডিয়ন
12. **Contact** — ফর্ম পূরণ করলে সরাসরি WhatsApp/ইমেইলে মেসেজ চলে যায় (সার্ভার লাগে না)
13. **Footer** + ফ্লোটিং WhatsApp বাটন + স্ক্রল প্রোগ্রেস বার

`prefers-reduced-motion` চালু থাকলে স্মুথ স্ক্রল ও ভারী অ্যানিমেশন বন্ধ থাকে।
