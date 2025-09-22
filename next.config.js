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
    unoptimized: true, // Required for static exports
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

  // Disable source maps completely
  productionBrowserSourceMaps: false,

  // Enable static exports - the key setting for static websites
  output: "export",

  // Disable source maps for static exports
  webpack: (config) => {
    // Disable source maps in all environments
    config.devtool = false;
    return config;
  },
};

module.exports = nextConfig;
