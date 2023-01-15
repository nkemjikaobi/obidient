import { useRouter } from "next/router";
import React from "react";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";

import useAuth from "@hooks/useAuth";
import useWallet from "@hooks/useWallet";

const DashboardSideBar = () => {
  const router = useRouter();
  const { logout } = useAuth();
  const { disconnectWallet, web3Modal } = useWallet();

  const onLogOut = () => {
    logout();
    disconnectWallet(web3Modal, router);
    router.push("/auth/login");
  };

  return (
    <div className="bg-white h-full w-[120px] pt-[62px] pl-[42px] pr-[46px] min-h-[1117px]">
      <CustomLink destination="/">
        <Icon className="mb-[85px]" name="obiSign" />
      </CustomLink>
      <ul className="space-y-[5.5rem] text-14 font-medium">
        {DashboardSideBarData.map((data) => (
          <li className="flex items-center space-x-4 cursor-pointer relative" key={data.id} onClick={() => router.push(data.route)}>
            <Icon name={data.icon} />
          </li>
        ))}
        <li className="flex items-center space-x-4 cursor-pointer">
          <Icon name="logout" onClick={() => onLogOut()} />
        </li>
      </ul>
    </div>
  );
};

export default DashboardSideBar;

const DashboardSideBarData = [
  {
    id: 1,
    icon: "grid",
    route: "/dashboard",
  },
  // {
  //   id: 2,
  //   icon: "card",
  //   route: "#",
  // },
  // {
  //   id: 3,
  //   icon: "cash",
  //   route: "#",
  // },
  // {
  //   id: 4,
  //   icon: "wallet",
  //   route: "#",
  // },
  // {
  //   id: 5,
  //   icon: "transaction",
  //   route: "#",
  // },
];
