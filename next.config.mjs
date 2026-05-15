/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'cdn.coverr.co' },
            { protocol: 'https', hostname: 'pub-04503d7ce2e34ce0a79adb19dd326408.r2.dev' },
        ],
    },
};

export default nextConfig;
