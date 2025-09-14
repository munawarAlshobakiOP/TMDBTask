/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },
  experimental: {
    optimizePackageImports: ['styled-components'],
  },
  transpilePackages: ['styled-components'],
}

export default nextConfig;
