import type { NextConfig } from "next";

const SERVER_API = process.env.NEXT_PUBLIC_SERVER_API!;

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: `${SERVER_API}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
