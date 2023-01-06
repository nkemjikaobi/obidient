import { useRouter } from "next/router";
import React from "react";

const Logo = () => {
  const router = useRouter();
  return (
    <>
      <h2 className="font-semibold text-[33px] cursor-pointer" onClick={() => router.push("/")}>
        Obidient
      </h2>
    </>
  );
};

export default Logo;
