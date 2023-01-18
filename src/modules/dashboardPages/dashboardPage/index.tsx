import React, { FC, useEffect } from "react";

import MembershipCard from "@components/organisms/DashBoardPage/MembershipCard/MembershipCard";
import MembershipPlan from "@components/organisms/DashBoardPage/MembershipPlan/MembershipPlan";
import RecentActivities from "@components/organisms/DashBoardPage/RecentActivities/RecentActivities";
import TopBar from "@components/organisms/DashBoardPage/TopBar/TopBar";
import WalletBalance from "@components/organisms/DashBoardPage/WalletBalance/WalletBalance";
import WalletTransactions from "@components/organisms/DashBoardPage/WalletTransactions/WalletTransactions";

import useAuth from "@hooks/useAuth";
import useWallet from "@hooks/useWallet";

import { setAuthToken } from "@shared/libs/helpers";

export const DashBoard: FC = () => {
  const { loadUser } = useAuth();
  const { getTokenDetails, nftContract, address, web3, loadContract } = useWallet();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    if (web3) {
      loadContract(web3);
    }
  }, [web3]);

  useEffect(() => {
    if (nftContract && address) {
      getTokenDetails(nftContract, address);
    }
  }, [nftContract, address]);

  return (
    <div className="pl-4 bigLaptop:pl-[48px]">
      <TopBar />
      <div className="flex flex-col bigLaptop:flex-row mt-12">
        <div className="">
          <div className="flex flex-col smallLaptop:flex-row smallLaptop:items-center smallLaptop:space-x-12 mb-8 pr-6 tablet:px-8 smallLaptop:px-0">
            <MembershipPlan />
            {/* <div className="hidden smallLaptop:block"> */}
            <div className="">
              <MembershipCard />
            </div>
          </div>
          <div className="hidden bigLaptop:block">
            <RecentActivities />
          </div>
        </div>
        <div className="bg-white h-[1434px] bigLaptop:ml-8 television:w-[531px] overflow-y-scroll">
          <WalletBalance />
          <WalletTransactions />
        </div>
      </div>
    </div>
  );
};
