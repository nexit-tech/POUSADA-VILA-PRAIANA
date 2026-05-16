/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Tenta AVIF primeiro (até 50% menor que WebP), cai pra WebP, depois pra original
        formats: ['image/avif', 'image/webp'],
        // Cache do otimizador no Vercel/Railway por 1 ano — segundas visitas ficam instantâneas
        minimumCacheTTL: 60 * 60 * 24 * 365,
        remotePatterns: [
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'cdn.coverr.co' },
            { protocol: 'https', hostname: 'pub-04503d7ce2e34ce0a79adb19dd326408.r2.dev' },
        ],
    },
    // Compactação gzip/brotli em todos os assets estáticos
    compress: true,
};

export default nextConfig;
