"use client";

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation"; // Page Router와 다름

export default function Searchbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    router.push(`/search?q=${search}`);
  };

  return (
    <div>
      <input value={search} onChange={onChangeSearch} />
      <button onClick={onSubmit}>검색</button>
    </div>
  );
}
