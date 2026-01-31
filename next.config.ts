import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
        {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "xynshcnkxdliapebmyaz.supabase.co", 
      },
      {
        protocol: "https",
        hostname: "syqhlgfgmxqmgqdaizsy.supabase.co", 
      },
         {
        protocol: "https",
        hostname: "wukhkmtdjitflnubxeos.supabase.co", 
      },
     
    ],
  },
};

export default nextConfig;
