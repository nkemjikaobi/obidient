import React from "react";

const GovernanceTokenBalance = () => {
  return (
    <div className="border rounded-[7px] border-obiGray-320">
      <h4 className="text-18 mt-[31px] mb-[6px] text-center whitespace-nowrap">Governance Token Balance </h4>
      <h4 className="text-[40px] font-medium mb-[5px] text-center whitespace-nowrap">71.226 LPO </h4>
      <h4 className="text-18 text-obiGray-320 mb-[23px] text-center">12,000 NGN </h4>
      {/* <div className="flex items-center">
          <CustomButton
            customClass="mt-12 !w-[100px] !bg-obiPurple-400"
            handleClick={() => {}}
            size={ButtonProperties.SIZES.big}
            title="Deposit"
            type="submit"
            variant={ButtonProperties.VARIANT.secondary.name}
          />
          <CustomButton
            customClass="mt-12 !w-[100px] !border-obiGray-100 !text-obiGray-350 !bg-obiGray-100 hover:!bg-obiGray-250"
            handleClick={() => {}}
            size={ButtonProperties.SIZES.big}
            title="Deposit"
            type="submit"
            variant={ButtonProperties.VARIANT.secondary.name}
          />
        </div> */}
    </div>
  );
};

export default GovernanceTokenBalance;
