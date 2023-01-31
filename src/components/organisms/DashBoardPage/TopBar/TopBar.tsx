import { useRouter } from "next/router";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import Icon from "@components/atoms/Icons";

import useAuth from "@hooks/useAuth";
import useWallet from "@hooks/useWallet";

import { ButtonProperties, UserTypes } from "@shared/libs/helpers";

const TopBar = () => {
  const { user } = useAuth();
  const { connectWallet } = useWallet();
  const router = useRouter();
  return (
    <div className="flex items-center justify-between pt-[47px] pr-[117px]">
      <h3 className="font-medium text-16 smallLaptop:text-20 whitespace-nowrap">Welcome Back, {user?.firstName || user?.lastName}</h3>
      <div className="hidden smallLaptop:flex items-center">
        {user?.userType === UserTypes.ADMIN && (
          <CustomButton
            customClass="!rounded-[5px] ml-[113px] mr-[43px]"
            handleClick={() => router.push("/dashboard/users")}
            size={ButtonProperties.SIZES.small}
            title="View Users"
            variant={ButtonProperties.VARIANT.primary.name}
          />
        )}
        <span className="mr-4 text-14 cursor-pointer hover:text-obiRed-500" onClick={() => connectWallet()}>
          Connect Wallet
        </span>
        <Icon className="mr-[30px]" name="bell" />
        <div className="w-[59.75px] h-[43.75px] rounded-full bg-profilePic bg-cover bg-center bg-no-repeat cursor-pointer mr-6" />
      </div>
    </div>
  );
};

export default TopBar;
