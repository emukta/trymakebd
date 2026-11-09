// ─────────────────────────────────────────────────────────────
//  সাইটের সব টেক্সট / কন্টাক্ট / ছবি এখান থেকে বদলাতে পারবেন
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "TryMake",
  domain: "TryMakebd.com",
  tagline: "Make Your Dream Perfect",
  phone: "01884552180",
  phoneIntl: "+8801884552180",
  whatsapp: "8801884552180",
  email: "trymakebd@gmail.com",
  facebook: "https://www.facebook.com/trymakebd",
  address: "247 Gm Bari Road, Satarkul, Badda, Dhaka 1212",
};

export const nav = [
  { id: "services", label: "সেবাসমূহ" },
  { id: "projects", label: "প্রজেক্ট" },
  { id: "process", label: "কাজের ধাপ" },
  { id: "gallery", label: "গ্যালারি" },
  { id: "faq", label: "প্রশ্নোত্তর" },
];

export const services = [
  {
    id: "office",
    en: "Office & Corporate Interior",
    bn: "অফিস ও কর্পোরেট ইন্টেরিয়র",
    blurb: "কাজের পরিবেশ যেমন হবে, টিমের এনার্জিও তেমন হবে — প্ল্যানিং থেকে ফাইনাল টাচ পর্যন্ত।",
    image: "/images/office-executive.webp",
    items: [
      "অফিস ইন্টেরিয়র ডিজাইন ও এক্সিকিউশন",
      "কর্পোরেট অফিস ও ওয়ার্কস্পেস ডেভেলপমেন্ট",
      "স্পেস প্ল্যানিং ও ওয়ার্কস্টেশন ডিজাইন",
      "রিসেপশন ও লবি ডিজাইন",
      "মিটিং ও কনফারেন্স রুম ডিজাইন",
      "ম্যানেজমেন্ট ও এক্সিকিউটিভ কেবিন",
      "ফলস সিলিং ও লাইটিং সলিউশন",
    ],
  },
  {
    id: "showroom",
    en: "Showroom & Retail Interior",
    bn: "শোরুম ও রিটেইল ইন্টেরিয়র",
    blurb: "আপনার ব্র্যান্ডের গল্প বলবে এমন স্টোর — যেখানে কাস্টমার থামে, দেখে, কেনে।",
    image: "/images/restaurant.webp",
    items: [
      "শোরুম ইন্টেরিয়র ডিজাইন ও ডেভেলপমেন্ট",
      "রিটেইল আউটলেট ডিজাইন",
      "ব্র্যান্ড অনুযায়ী শপ কনসেপ্ট ডেভেলপমেন্ট",
      "ডিসপ্লে র‍্যাক ও কাস্টম ফিক্সচার",
      "ক্যাশ কাউন্টার ও কাস্টমার এরিয়া",
      "স্টোর ফ্রন্ট ও ভিজ্যুয়াল মার্চেন্ডাইজিং সাপোর্ট",
    ],
  },
  {
    id: "exterior",
    en: "Exterior & Branding",
    bn: "এক্সটেরিয়র ও ব্র্যান্ডিং",
    blurb: "প্রথম দেখাতেই পরিচয় — ফ্রন্ট, ফ্যাসাড আর সাইনেজে আপনার ব্র্যান্ড।",
    image: "/images/foyer-stone.webp",
    items: [
      "অফিস ও শোরুম ফ্রন্ট ডিজাইন",
      "ফ্যাসাড ও এক্সটেরিয়র ডেভেলপমেন্ট",
      "গ্লাস, ACP ও ক্ল্যাডিং কাজ",
      "সাইনেজ ও ব্র্যান্ড আইডেন্টিটি বাস্তবায়ন",
      "প্রবেশপথ ও ফ্রন্টেজ ডেভেলপমেন্ট",
    ],
  },
  {
    id: "renovation",
    en: "Renowned and Maintenance",
    bn: "সংস্কার ও রক্ষণাবেক্ষণ",
    blurb: "পুরোনো স্পেসে নতুন প্রাণ — সিভিল, ইলেকট্রিক্যাল থেকে ফার্নিচার পর্যন্ত এক টিমে।",
    image: "/images/bath-round-mirror.webp",
    items: [
      "অফিস ও শোরুম রেনোভেশন",
      "সিভিল ও মেইনটেন্যান্স কাজ",
      "ইলেকট্রিক্যাল ও লাইটিং কাজ",
      "পার্টিশন, সিলিং ও ফ্লোরিং",
      "কাস্টমাইজড ফার্নিচার ও ফিক্সচার",
      "প্রজেক্ট ম্যানেজমেন্ট ও সাইট সুপারভিশন",
    ],
  },
  {
    id: "design",
    en: "Design & Consultancy",
    bn: "ডিজাইন ও কনসালটেন্সি",
    blurb: "কাজ শুরুর আগেই দেখে নিন ফলাফল — লেআউট, 3D, BOQ আর বাজেট এক জায়গায়।",
    image: "/images/partition-living.webp",
    items: [
      "2D Layout ও Space Planning",
      "3D Interior & Exterior Visualization",
      "Working Drawing ও BOQ",
      "বাজেট ও Cost Estimation",
      "Material Selection ও Procurement Support",
    ],
  },
];

export const marqueeWords = [
  "Office Interior",
  "Showroom Design",
  "3D Visualization",
  "Facade & ACP",
  "False Ceiling",
  "Custom Furniture",
  "Renovation",
  "BOQ & Estimation",
];

export const projects = [
  { title: "এক্সিকিউটিভ অফিস কেবিন", tag: "Office", image: "/images/office-executive.webp" },
  { title: "চাইনিজ ও কাবাব রেস্টুরেন্ট", tag: "Commercial", image: "/images/restaurant.webp" },
  { title: "লিভিং রুম পার্টিশন", tag: "Residential", image: "/images/partition-living.webp" },
  { title: "ফিচার ওয়াল ও ফয়ার", tag: "Entrance", image: "/images/foyer-stone.webp" },
  { title: "মাস্টার ওয়ার্ডরোব", tag: "Furniture", image: "/images/wardrobe-green.webp" },
  { title: "লাক্সারি ভ্যানিটি", tag: "Bath", image: "/images/vanity-gold.webp" },
  { title: "ওয়ার্কস্টেশন সেটআপ", tag: "Office", image: "/images/office-workstation.webp" },
];

export const process = [
  { title: "কনসালটেশন ও সাইট ভিজিট", text: "আপনার প্রয়োজন, বাজেট আর সময়সীমা বুঝে নিই; সাইট মেপে প্রাথমিক পরিকল্পনা।" },
  { title: "2D লেআউট ও স্পেস প্ল্যানিং", text: "প্রতিটি স্কয়ার ফুটের সঠিক ব্যবহার — ওয়ার্কফ্লো আর মুভমেন্ট মাথায় রেখে।" },
  { title: "3D ভিজ্যুয়ালাইজেশন", text: "কাজ শুরুর আগেই রিয়েলিস্টিক 3D-তে দেখে নিন আপনার স্পেস, প্রয়োজনে পরিবর্তন।" },
  { title: "Working Drawing, BOQ ও বাজেট", text: "স্বচ্ছ মেটেরিয়াল লিস্ট ও কস্ট এস্টিমেশন — কোথায় কত খরচ, আগে থেকেই পরিষ্কার।" },
  { title: "এক্সিকিউশন ও সাইট সুপারভিশন", text: "নিজস্ব টিম দিয়ে সিভিল, ইলেকট্রিক্যাল, সিলিং, ফার্নিচার — প্রতিটি ধাপে তদারকি।" },
  { title: "হ্যান্ডওভার", text: "ফাইনাল চেক শেষে আপনার স্বপ্নের স্পেস বুঝিয়ে দিই — Make Your Dream Perfect." },
];

export const gallery = [
  { src: "/images/partition-glow.webp", cat: "living", alt: "লাইটিং সহ কাঠের পার্টিশন ওয়াল" },
  { src: "/images/office-executive.webp", cat: "office", alt: "এক্সিকিউটিভ অফিস ও ফলস সিলিং" },
  { src: "/images/bath-beige.webp", cat: "bath", alt: "বেইজ টোনের মডার্ন বাথরুম" },
  { src: "/images/restaurant.webp", cat: "commercial", alt: "রেস্টুরেন্ট ইন্টেরিয়র" },
  { src: "/images/foyer-marble.webp", cat: "living", alt: "মার্বেল ও গোল্ড লাইনের ফিচার ওয়াল" },
  { src: "/images/vanity-marble.webp", cat: "bath", alt: "LED মিরর সহ ভ্যানিটি" },
  { src: "/images/wardrobe-green.webp", cat: "living", alt: "গ্রিন ওয়ার্ডরোব ও ড্রেসিং ইউনিট" },
  { src: "/images/office-workstation.webp", cat: "office", alt: "ওয়ার্কস্টেশন ও গ্লাস পার্টিশন" },
  { src: "/images/bath-monochrome.webp", cat: "bath", alt: "সাদা-কালো বাথরুম ডিজাইন" },
  { src: "/images/foyer-stone.webp", cat: "living", alt: "স্টোন ও কাঠের ফয়ার ওয়াল" },
  { src: "/images/office-chairs.webp", cat: "office", alt: "অফিস ওয়ার্কস্পেস সেটআপ" },
  { src: "/images/bath-grey.webp", cat: "bath", alt: "গ্রে টাইলস বাথরুম" },
  { src: "/images/vanity-gold.webp", cat: "bath", alt: "গোল্ড বেসিন সহ লাক্সারি ভ্যানিটি" },
  { src: "/images/partition-living.webp", cat: "living", alt: "লিভিং রুম পার্টিশন" },
  { src: "/images/bath-round-mirror.webp", cat: "bath", alt: "রাউন্ড মিরর বাথরুম" },
  { src: "/images/vanity-spec.webp", cat: "bath", alt: "ভ্যানিটি মাপ ও স্পেসিফিকেশন" },
];

export const galleryFilters = [
  { id: "all", label: "সব" },
  { id: "office", label: "অফিস" },
  { id: "commercial", label: "কমার্শিয়াল" },
  { id: "living", label: "ইন্টেরিয়র ও পার্টিশন" },
  { id: "bath", label: "বাথরুম ও ভ্যানিটি" },
];

export const whyUs = [
  { title: "এন্ড-টু-এন্ড সলিউশন", text: "ডিজাইন, মেটেরিয়াল, এক্সিকিউশন — একাধিক ভেন্ডরের ঝামেলা নেই, এক টিমেই সব।", icon: "layers" },
  { title: "আগেই 3D-তে দেখুন", text: "কাজ শুরুর আগে 3D ভিজ্যুয়ালাইজেশন দেখে সিদ্ধান্ত নিন — কোনো অনুমান নয়।", icon: "cube" },
  { title: "স্বচ্ছ BOQ ও বাজেট", text: "প্রতিটি আইটেমের খরচ লিখিতভাবে — লুকানো খরচ ছাড়া পরিষ্কার হিসাব।", icon: "doc" },
  { title: "সাইট সুপারভিশন", text: "প্রজেক্ট ম্যানেজমেন্ট ও নিয়মিত তদারকিতে মান আর সময় দুটোই নিশ্চিত।", icon: "shield" },
];

export const faqs = [
  {
    q: "কাজ শুরুর আগে কি সাইট ভিজিট করেন?",
    a: "হ্যাঁ। কনসালটেশনের পর আমাদের টিম সাইট ভিজিট করে মাপ নেয় এবং আপনার প্রয়োজন অনুযায়ী প্রাথমিক পরিকল্পনা দেয়। সময় ঠিক করতে কল বা WhatsApp করুন।",
  },
  {
    q: "কাজ শুরুর আগে কি ডিজাইনটা দেখতে পাব?",
    a: "অবশ্যই। 2D লেআউট ও 3D ইন্টেরিয়র/এক্সটেরিয়র ভিজ্যুয়ালাইজেশনের মাধ্যমে আপনি কাজ শুরুর আগেই চূড়ান্ত চেহারা দেখে নিতে পারবেন এবং প্রয়োজনে পরিবর্তন করতে পারবেন।",
  },
  {
    q: "বাজেট বা খরচ কিভাবে নির্ধারণ হয়?",
    a: "ডিজাইন চূড়ান্ত হলে আমরা Working Drawing ও BOQ তৈরি করি — প্রতিটি মেটেরিয়াল ও কাজের খরচ আলাদাভাবে উল্লেখ থাকে। মেটেরিয়াল সিলেকশনে আপনার বাজেট অনুযায়ী বিকল্পও দেখানো হয়।",
  },
  {
    q: "শুধু ডিজাইন বা কনসালটেন্সি নেওয়া যাবে?",
    a: "হ্যাঁ। 2D লেআউট, 3D ভিজ্যুয়ালাইজেশন, Working Drawing, BOQ ও Cost Estimation আলাদা সার্ভিস হিসেবেও নিতে পারবেন।",
  },
  {
    q: "কোন ধরনের প্রজেক্টে আপনারা কাজ করেন?",
    a: "অফিস ও কর্পোরেট ওয়ার্কস্পেস, শোরুম ও রিটেইল আউটলেট, রেস্টুরেন্ট ও কমার্শিয়াল স্পেস, ফ্যাসাড ও সাইনেজ, এবং অফিস/শোরুম রেনোভেশন।",
  },
  {
    q: "চালু অফিস বা শোরুমে রেনোভেশন করা সম্ভব?",
    a: "হ্যাঁ। কাজের ধাপ এমনভাবে পরিকল্পনা করা হয় যাতে আপনার দৈনন্দিন কার্যক্রমে যতটা সম্ভব কম ব্যাঘাত হয়।",
  },
];
