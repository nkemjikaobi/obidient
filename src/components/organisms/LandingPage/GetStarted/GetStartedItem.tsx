import React from "react";

import { GetStartedProp } from "./GetStarted";

interface GetStartedItemProps {
  item: GetStartedProp;
}

const GetStartedItem: React.FC<GetStartedItemProps> = ({ item }) => {
  return (
    <div className="bg-white smallLaptop:w-[344px] smallLaptop:h-[398px] rounded-[15px] px-6 smallLaptop:px-[58px] py-[52px] shadow-get-started-card mr-6 smallLaptop:mr-[52px] mb-8 smallLaptop:mb-4">
      <div className="w-[100px] h-[88px] flex items-center justify-center shadow-get-started-card mb-[64px]">
        <item.icon className="w-[55px] h-[55px]" />
      </div>
      <p className="font-semibold text-18">{item.name}</p>
      <p className="text-12 text-obiGray-300 w-[256px]">{item.info}</p>
    </div>
  );
};

export default GetStartedItem;
