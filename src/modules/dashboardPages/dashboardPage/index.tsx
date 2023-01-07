import React, { FC } from "react";

import MembershipCard from "@components/organisms/DashBoardPage/MembershipCard/MembershipCard";
import MembershipPlan from "@components/organisms/DashBoardPage/MembershipPlan/MembershipPlan";
import RecentActivities from "@components/organisms/DashBoardPage/RecentActivities/RecentActivities";
import TopBar from "@components/organisms/DashBoardPage/TopBar/TopBar";

export const DashBoard: FC = () => (
  <div className="pl-[48px]">
    <TopBar />
    <div className="flex items-center mt-12">
      <div className="">
        <div className="flex items-center space-x-12 mb-8">
          <MembershipPlan />
          <MembershipCard />
        </div>
        <RecentActivities />
      </div>
      <div>transactions</div>
    </div>
  </div>
);
