/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  output: "export",
  reactStrictMode: false,
  images: {
    unoptimized: true, // 이미지 처리
  },
  compiler: {
    styledComponents: true, // 컴포넌트 사용 시 컴파일러에 추가
  },
};

export default nextConfig;
