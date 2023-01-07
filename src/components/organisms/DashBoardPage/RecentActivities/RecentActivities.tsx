import React from "react";

import CustomTabs from "@components/atoms/CustomTabs/CustomTabs";

import AllActivities from "../AllActivities/AllActivities";
import FiatPayments from "../FiatPayments/FiatPayments";
import MembershipPayments from "../MembershipPayments/MembershipPayments";
import TokenSales from "../TokenSales/TokenSales";

const RecentActivities = () => {
  const getTabNames = () => {
    return [{ name: "All" }, { name: "Membership Payments" }, { name: "Token Sales" }, { name: "Fiat Payments" }];
  };

  const tabComponents = [
    {
      element: () => <AllActivities />,
    },
    {
      element: () => <MembershipPayments />,
    },
    {
      element: () => <TokenSales />,
    },
    {
      element: () => <FiatPayments />,
    },
  ];

  return (
    <div className="bg-white px-[34px] pt-[44px] rounded-[20px] w-[1018px] pb-8">
      <h4 className="text-18 mb-[50px]">Recent Activities</h4>
      <CustomTabs tabComponents={tabComponents} tabNames={getTabNames()} />
    </div>
  );
};

export default RecentActivities;
