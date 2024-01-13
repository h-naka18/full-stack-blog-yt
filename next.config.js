/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // ROOT: process.env.NODE_ENV === 'production' ? `https://full-stack-blog-yt.vercel.app` : `http://localhost:3000`
        ROOT: process.env.NODE_ENV === 'production' ? `full-stack-blog-1czljgjop-hitoshis-projects.vercel.app` : `http://localhost:3000`
    }
}

module.exports = nextConfig
