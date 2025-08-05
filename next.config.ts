import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://ymfqvkphcrvqazwkxcse.supabase.co/storage/v1/object/public/**'), new URL('https://placehold.co/**')],
  },
};

export default nextConfig;
