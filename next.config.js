/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // Add this to silence the warning about workspace root
  outputFileTracingRoot:
    "/Users/billsusanto/Documents/Projects/nusaterraglobal",

  // Add this to allow SVG images
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    qualities: [100],
  },

  // Disable TypeScript type checking during build
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  // Disable ESLint during build
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  // Disable source maps in production to avoid source-map dependency issues
  productionBrowserSourceMaps: false,

  // Disable source maps in development to avoid source-map dependency issues
  webpack: (config, { dev }) => {
    if (!dev) {
      config.devtool = false;
    }
    return config;
  },
};

module.exports = nextConfig;
