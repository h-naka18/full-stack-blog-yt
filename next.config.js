/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        ROOT: process.env.NODE_ENV === 'production' ? `https://full-stack-blog-rdb7hlwqt-hitoshis-projects.vercel.app` : `http://localhost:3000`
    }
}

module.exports = nextConfig
