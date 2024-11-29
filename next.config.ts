import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    output: 'export', // <=== enables static exports
    reactStrictMode: true,
    images: {
        unoptimized: true, // Disable default image optimization
    },
};

export default nextConfig;
