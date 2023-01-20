import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Logo from "@components/atoms/Logo/Logo";

import useClickOutside from "@hooks/useClickOutside";

import { ButtonProperties, executeScroll } from "@shared/libs/helpers";

import { DesktopNav } from "./DesktopNavigation";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const node = useClickOutside(() => {
    setIsOpen(false);
  });

  const router = useRouter();

  const handleClick = (identifier: string) => {
    setIsOpen(false);
    executeScroll(identifier);
  };

  return (
    <>
      <div className="flex justify-between py-3 px-4 items-center bg-white">
        <CustomLink customClass="cursor-pointer mt-4" destination="/">
          <Logo />
        </CustomLink>
        {isOpen ? (
          <AiOutlineClose className="cursor-pointer text-citiGreen-500" onClick={() => setIsOpen(false)} />
        ) : (
          <GiHamburgerMenu className="cursor-pointer text-citiGreen-500" onClick={() => setIsOpen(true)} />
        )}
      </div>
      <div className={`px-4 pb-5 bg-white ${isOpen ? "openNav" : "closeNav"}`} ref={node}>
        {DesktopNav.map((data) => (
          <div key={data.id} onClick={() => handleClick(data.identifier)}>
            <div className="capitalize mr-12 mb-4 cursor-pointer text-citiGray-500 hover:text-citiGreen-600 text-sm">
              <span>{data.name}</span>
            </div>
          </div>
        ))}
        <div>
          <CustomButton
            customClass="!rounded-none mb-2 !rounded-md"
            handleClick={() => {
              router.push("/auth/login");
            }}
            size={ButtonProperties.SIZES.small}
            title="Sign In"
            variant={ButtonProperties.VARIANT.primary.name}
          />
        </div>
        <div>
          <CustomButton
            customClass="!rounded-md"
            handleClick={() => {
              router.push("/auth/create-account");
            }}
            size={ButtonProperties.SIZES.small}
            title="Get Started"
            variant={ButtonProperties.VARIANT.primary.name}
          />
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
