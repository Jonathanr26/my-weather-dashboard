/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  trailingSlash: true,
  images: {
    loader: "imgix",
    path: "",
  },
};

export default nextConfig;
