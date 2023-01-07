import React, { FC } from "react";

import MembershipPlan from "@components/organisms/DashBoardPage/MembershipPlan/MembershipPlan";
import TopBar from "@components/organisms/DashBoardPage/TopBar/TopBar";

export const DashBoard: FC = () => (
  <div className="pl-[48px]">
    <TopBar />
    <div>
      <MembershipPlan />
    </div>
  </div>
);
