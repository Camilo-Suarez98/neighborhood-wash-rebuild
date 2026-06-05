import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Modern formats first for any raster images added later.
    formats: ["image/avif", "image/webp"],
    // The gallery/hero placeholders are first-party SVGs we author ourselves,
    // so it's safe to let next/image serve them. The CSP + attachment
    // disposition keep any future SVG from executing in the document context.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
