import React, { FC } from "react";

import MembershipCard from "@components/organisms/DashBoardPage/MembershipCard/MembershipCard";
import MembershipPlan from "@components/organisms/DashBoardPage/MembershipPlan/MembershipPlan";
import RecentActivities from "@components/organisms/DashBoardPage/RecentActivities/RecentActivities";
import TopBar from "@components/organisms/DashBoardPage/TopBar/TopBar";
import WalletBalance from "@components/organisms/DashBoardPage/WalletBalance/WalletBalance";
import WalletTransactions from "@components/organisms/DashBoardPage/WalletTransactions/WalletTransactions";

export const DashBoard: FC = () => (
  <div className="pl-[48px]">
    <TopBar />
    <div className="flex mt-12">
      <div className="">
        <div className="flex items-center space-x-12 mb-8">
          <MembershipPlan />
          <MembershipCard />
        </div>
        <RecentActivities />
      </div>
      <div className="bg-white h-[1434px] ml-8 television:w-[531px] overflow-y-scroll">
        <WalletBalance />
        <WalletTransactions />
      </div>
    </div>
  </div>
);
