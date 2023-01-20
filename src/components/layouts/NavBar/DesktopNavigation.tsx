import { useRouter } from "next/router";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Logo from "@components/atoms/Logo/Logo";

import { ButtonProperties, executeScroll } from "@shared/libs/helpers";

const DesktopNavigation = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center h-24 -ml-[50vw] left-[50%] relative w-screen px-16 bigLaptop:px-20 television:pl-64 television:pr-40 bg-white py-[106px]">
      <CustomLink destination="/">
        <Logo />
      </CustomLink>
      <ul className="flex items-center justify-center">
        {DesktopNav.map((data) => (
          <li className={`ml-4 mr-[47px] text-16 font-medium whitespace-nowrap`} key={data.id} onClick={() => executeScroll(data.identifier)}>
            <div className="hover:text-obiRed-500 cursor-pointer">{data.name}</div>
          </li>
        ))}
        <>
          <li>
            <CustomButton
              customClass="!rounded-[5px] !bg-white border border-black !text-black ml-[113px] mr-[43px]"
              handleClick={() => router.push("/auth/login")}
              size={ButtonProperties.SIZES.small}
              title="Sign In"
              variant={ButtonProperties.VARIANT.primary.name}
            />
          </li>
          <li>
            <CustomButton
              customClass="!rounded-[5px]"
              handleClick={() => router.push("/auth/create-account")}
              size={ButtonProperties.SIZES.small}
              title="Get Started"
              variant={ButtonProperties.VARIANT.primary.name}
            />
          </li>
        </>
      </ul>
    </div>
  );
};

export default DesktopNavigation;

export const DesktopNav = [
  {
    id: 1,
    name: "How it Works",
    route: "#",
    identifier: "how-it-works",
  },
  {
    id: 2,
    name: "Features",
    route: "#",
    identifier: "features",
  },
  {
    id: 3,
    name: "Token",
    route: "#",
    identifier: "token",
  },
  {
    id: 4,
    name: "Blog",
    route: "#",
    identifier: "blog",
  },
];
