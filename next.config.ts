import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/en/the-67-in-black",
        destination: "https://www.etsy.com/de/listing/4561798676/der-67-in-schwarz-auto-mantel-aus",
        permanent: false,
      },
    ];
  },
};
export default nextConfig;