import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui"],
  compiler: {
    styledComponents: true,
  },
}

export default nextConfig
