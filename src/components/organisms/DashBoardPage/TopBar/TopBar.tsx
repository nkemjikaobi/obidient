import React from "react";

import CustomInput from "@components/atoms/CustomInput/CustomInput";
import Icon from "@components/atoms/Icons";

import useAuth from "@hooks/useAuth";

const TopBar = () => {
  const { user } = useAuth();
  return (
    <div className="flex items-center justify-between pt-[47px] pr-[117px]">
      <h3 className="font-medium text-16 smallLaptop:text-20 whitespace-nowrap">Welcome Back, {user?.firstName || user?.lastName}</h3>
      <div className="hidden smallLaptop:flex items-center">
        <CustomInput
          className="border border-glass-450 rounded-[0.313rem] mr-[35px] mt-2 h-[56px]"
          icon="search"
          inputClassName="placeholder:text-sm"
          name="search"
          placeholder="Search"
          type="text"
        />
        <Icon className="mr-[30px]" name="bell" />
        <div className="w-[59.75px] h-[43.75px] rounded-full bg-profilePic bg-cover bg-center bg-no-repeat cursor-pointer mr-6" />
      </div>
    </div>
  );
};

export default TopBar;
