/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'meroproperty.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'nepalpropertybazaar.com',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  