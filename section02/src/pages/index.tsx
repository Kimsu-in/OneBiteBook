// CSS Module
// 유니크한 값으로 변경되어서 다른 className과 겹치는 것을 방지
import style from "./index.module.css";

export default function Home() {
  return (
    <>
      <h1 className={style.h1}>인덱스</h1>
      <h2 className={style.h2}>H2</h2>
    </>
  );
}
