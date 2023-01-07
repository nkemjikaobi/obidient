import { useRouter } from "next/router";
import React from "react";

import { useWindowSize } from "@hooks/useWindowSize";

const Logo = () => {
  const router = useRouter();
  const [width] = useWindowSize();

  return (
    <>
      <h2 className={`font-semibold ${width > 768 ? "text-[33px]" : "text-[24px]"} cursor-pointer`} onClick={() => router.push("/")}>
        Obidient
      </h2>
    </>
  );
};

export default Logo;
