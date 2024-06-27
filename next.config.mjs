/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images : {
      domains : ['localhost', 'avatars.githubusercontent.com', 'res.cloudinary.com'] // <== Domain name
    }
  }

export default nextConfig;
