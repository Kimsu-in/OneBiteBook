import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

// 모든 페이지들의 부모 컴포넌트
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    // 프로그래매틱한 페이지 이동
    // 함수 내부에서 페이지를 CSR 방식으로 이동시키는 방법
    router.push("/test");
  };

  // 프로그래매틱 방식에 프리패칭 적용
  useEffect(() => {
    router.prefetch("/test");
  }, []);

  return (
    <>
      <header>
        {/* Link 컴포넌트를 사용하여 CSR 방식을 사용하여 빠르게 페이지 이동 가능 */}
        <Link href={"/"}>index</Link>
        &nbsp;
        <Link href={"/search"}>search</Link>
        &nbsp;
        <Link href={"/book/1"}>book/1</Link>
        <div>
          <button onClick={onClickButton}>/test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
