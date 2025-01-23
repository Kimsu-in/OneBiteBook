import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  // 모든 페이지들의 부모 컴포넌트
  return <Component {...pageProps} />;
}
