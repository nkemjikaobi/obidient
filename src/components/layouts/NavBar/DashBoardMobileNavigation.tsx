import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Logo from "@components/atoms/Logo/Logo";

import useAuth from "@hooks/useAuth";
import useClickOutside from "@hooks/useClickOutside";
import useWallet from "@hooks/useWallet";

import { UserTypes } from "@shared/libs/helpers";

const DashboardMobileNavigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const { logout, user } = useAuth();
  const { disconnectWallet, web3Modal } = useWallet();

  const node = useClickOutside(() => {
    setIsOpen(false);
  });

  const onLogOut = () => {
    logout();
    disconnectWallet(web3Modal, router);
    router.push("/auth/login");
  };

  const DashboardNav = [
    {
      id: 1,
      name: "Dashboard",
      route: "#",
      isVisible: true,
    },
    {
      id: 2,
      name: "Users",
      route: "/dashboard/users",
      isVisible: user?.userType === UserTypes.ADMIN ? true : false,
    },
    {
      id: 3,
      name: "Referrals",
      route: "/dashboard/referrals",
      isVisible: true,
    },
    // {
    //   id: 2,
    //   name: "Membership Plan",
    //   route: "#",
    // },
    // {
    //   id: 3,
    //   name: "NFT Card",
    //   route: "#",
    // },
    // {
    //   id: 4,
    //   name: "My Wallet",
    //   route: "#",
    // },
    // {
    //   id: 5,
    //   name: "Recent Activities",
    //   route: "#",
    // },
  ];

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
        {DashboardNav.map(
          (data) =>
            data.isVisible && (
              <Link href={data.route} key={data.id}>
                <div className="capitalize mr-12 mb-4 cursor-pointer text-citiGray-500 hover:text-citiGreen-600 text-sm">
                  <span>{data.name}</span>
                </div>
              </Link>
            )
        )}
        <div className="capitalize mr-12 mb-4 cursor-pointer text-citiGray-500 hover:text-citiGreen-600 text-sm" onClick={() => onLogOut()}>
          <span>Logout</span>
        </div>
      </div>
    </>
  );
};

export default DashboardMobileNavigation;
