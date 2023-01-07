import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";

import { ButtonProperties, CURRENCIES } from "@shared/libs/helpers";

const MembershipPlan = () => {
  return (
    <div className="bg-white px-[34px] pt-[44px] rounded-[20px] w-[380px] television:w-[480px] h-[513.88px] bigLaptop:pb-8">
      <h4 className="text-18 mb-6">Membership Plan</h4>
      <div className="border border-obiBlue-300 px-[28px] pt-[29px] w-[311px] television:w-[411px]">
        <div className="flex items-center justify-between">
          <p className="text-14 text-obiGray-320">Monthly</p>
          <div className="flex justify-center items-center text-obiGreen-400 rounded-[5px] bg-green-100 text-10 w-[67px] h-[31px] font-semibold">Active</div>
        </div>
        <h3 className="font-medium text-[32px] mt-6 mb-[28px] text-obiBlack-300">
          {CURRENCIES.NAIRA} 1,000 <span className="text-14 text-obiGray-320 ml-2">Per month</span>
        </h3>
        <h4 className="text-18 mb-6">Labour Party Membership Subscription</h4>
        <p className="text-14 text-obiGray-320 mt-[33px] mb-[36px]">Expires on the 25th of January 2023</p>
      </div>
      <CustomButton
        customClass="!rounded-[5px] !border-obiGray-100 !text-obiGray-350 !bg-obiGray-100 hover:!bg-obiGray-250 my-4 bigLaptop:!my-6 !w-full"
        handleClick={() => {}}
        size={ButtonProperties.SIZES.small}
        title="Change Plan"
        variant={ButtonProperties.VARIANT.primary.name}
      />
    </div>
  );
};

export default MembershipPlan;
