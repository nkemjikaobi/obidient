import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { ImSpinner9 } from "react-icons/im";
import { showToast } from "src/helpers/showToast";

import useAuth from "@hooks/useAuth";

import { NotificationTypes, changeDateFormat } from "@shared/libs/helpers";

import RenderMembershipStatus from "../RenderMembershipStatus/RenderTransactionStatus";

const MembershipPlan = () => {
  const { user, loading } = useAuth();
  return (
    <>
      <div className="bg-white px-6 smallLaptop:px-[34px] pt-[44px] rounded-[20px] smallLaptop:w-[380px] television:w-[480px] smallLaptop:h-[513.88px] bigLaptop:pb-8">
        {loading ? (
          <div className="flex items-center">
            <ImSpinner9 className="animate-spin mr-2 text-2xl" /> <span className="text-14">Fetching data...</span>
          </div>
        ) : (
          <>
            <h4 className="text-18 mb-6">Membership Plan</h4>
            <div className="border border-obiBlue-300 px-[28px] pt-[29px] w-[311px] television:w-[411px]">
              <div className="flex items-center justify-between">
                <p className="text-12 smallLaptop:text-14 text-obiGray-320 capitalize">{user?.current_subscription?.plan?.interval}</p>
                <RenderMembershipStatus status={user?.current_subscription?.status} />
              </div>
              <h3 className="font-medium text-24 smallLaptop:text-[32px] mt-6 mb-[28px] text-obiBlack-300">
                {user?.current_subscription?.currency} {Number(user?.current_subscription?.amount || 0).toLocaleString()}{" "}
                <span className="text-14 text-obiGray-320 ml-2 capitalize">{user?.current_subscription?.plan?.interval}</span>
              </h3>
              <h4 className="text-16 smallLaptop:text-18 mb-6">Obidient Movement Membership Subscription</h4>
              <p className="text-12 smallLaptop:text-14 text-obiGray-320 mt-[33px] mb-[36px]">
                Expires on the {changeDateFormat(user?.current_subscription?.expiry_date, "DD MMM YYYY - LT")}
              </p>
              <CopyToClipboard
                onCopy={() => {
                  console.log("here");
                  showToast("Referral Link Copied", NotificationTypes.SUCCESS);
                }}
                text={`${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}/auth/create-account?ref=${user?.urlKey}`}
              >
                <p className="text-center text-[0.8rem] text-obiRed-500 cursor-pointer mb-4">{`${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}/auth/create-account?ref=${user?.urlKey}`}</p>
              </CopyToClipboard>
            </div>
            {/* <CustomButton
              customClass="!rounded-[5px] !border-obiGray-100 !text-obiGray-350 !bg-obiGray-100 hover:!bg-obiGray-250 my-4 bigLaptop:!my-6 !w-full"
              handleClick={() => {}}
              size={ButtonProperties.SIZES.small}
              title="Change Plan"
              variant={ButtonProperties.VARIANT.primary.name}
            /> */}
          </>
        )}
      </div>
    </>
  );
};

export default MembershipPlan;
