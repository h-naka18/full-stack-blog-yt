/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        ROOT: process.env.NODE_ENV === 'production' ? `https://full-stack-blog-kui24po75-hitoshis-projects.vercel.app` : `http://localhost:3000`
    }
}

module.exports = nextConfig
