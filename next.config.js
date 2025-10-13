/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static export for GitHub Pages
  output: 'export',
  trailingSlash: true,
  // Configure images for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Set the correct base path if your repo name is different from your username
  basePath: '/dita-website', // Uncomment and set if needed
}

export default nextConfig
