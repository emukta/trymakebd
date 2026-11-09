/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` → সম্পূর্ণ স্ট্যাটিক সাইট তৈরি হবে `out/` ফোল্ডারে
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
