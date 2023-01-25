import React from "react";

import { MembershipStatus } from "@shared/libs/helpers";

interface RenderMembershipStatusProps {
  status?: string;
}
const RenderMembershipStatus = ({ status }: RenderMembershipStatusProps) => {
  return (
    <>
      {status === MembershipStatus.ACTIVE ? (
        <div className="flex justify-center items-center text-obiGreen-400 rounded-[5px] bg-green-100 text-8 smallLaptop:text-10 capitalize w-[67px] h-[31px] font-semibold">
          {status}{" "}
        </div>
      ) : (
        <div className="flex justify-center items-center text-red-400 rounded-[5px] bg-red-100 text-8 smallLaptop:text-10 capitalize w-[67px] h-[31px] font-semibold">{status}</div>
      )}
    </>
  );
};

export default RenderMembershipStatus;

RenderMembershipStatus.defaultProps = {
  status: "",
};
