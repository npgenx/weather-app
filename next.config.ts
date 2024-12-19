import type { NextConfig } from 'next';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    /* config options here */
    output: 'export', // <=== enables static exports
    reactStrictMode: true,
    images: {
        unoptimized: true, // Disable default image optimization
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    basePath: isProd ? '/weather-app' : ''
};

export default nextConfig;
