import React from "react";

import CustomInput from "@components/atoms/CustomInput/CustomInput";
import Icon from "@components/atoms/Icons";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between pt-[47px] pr-[117px]">
      <h3 className="font-medium text-20">Welcome Back, James !</h3>
      <div className="flex items-center">
        <CustomInput
          className="border border-glass-450 rounded-[0.313rem] mr-[35px] mt-2 h-[56px]"
          icon="search"
          inputClassName="placeholder:text-sm"
          name="search"
          placeholder="Search"
          type="text"
        />
        <Icon className="mr-[30px]" name="bell" />
        <div className="w-[59.75px] h-[43.75px] rounded-full bg-profilePic bg-cover bg-center bg-no-repeat cursor-pointer" />
      </div>
    </div>
  );
};

export default TopBar;
