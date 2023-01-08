import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Logo from "@components/atoms/Logo/Logo";

import useClickOutside from "@hooks/useClickOutside";

const DashboardMobileNavigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const node = useClickOutside(() => {
    setIsOpen(false);
  });

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
        {DashboardNav.map((data) => (
          <Link href={data.route} key={data.id}>
            <div className="capitalize mr-12 mb-4 cursor-pointer text-citiGray-500 hover:text-citiGreen-600 text-sm">
              <span>{data.name}</span>
            </div>
          </Link>
        ))}
        <div className="capitalize mr-12 mb-4 cursor-pointer text-citiGray-500 hover:text-citiGreen-600 text-sm">
          <span>Logout</span>
        </div>
      </div>
    </>
  );
};

export default DashboardMobileNavigation;

export const DashboardNav = [
  {
    id: 1,
    name: "Dashboard",
    route: "#",
  },
  {
    id: 2,
    name: "Membership Plan",
    route: "#",
  },
  {
    id: 3,
    name: "NFT Card",
    route: "#",
  },
  {
    id: 4,
    name: "My Wallet",
    route: "#",
  },
  {
    id: 3,
    name: "Recent Activities",
    route: "#",
  },
];
