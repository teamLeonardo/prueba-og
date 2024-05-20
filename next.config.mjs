/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DEV: process.env.NODE_ENV === 'development'
    }
};

export default nextConfig;
