import React from "react";

import Icon from "@components/atoms/Icons";

import { GetStartedProp } from "./GetStarted";

interface GetStartedItemProps {
  item: GetStartedProp;
}

const GetStartedItem: React.FC<GetStartedItemProps> = ({ item }) => {
  return (
    <div className="bg-white w-[444px] h-[398px] rounded-[15px] px-[58px] py-[52px] shadow-get-started-card mr-[52px]">
      <div className="w-[150px] h-[148px] flex items-center justify-center shadow-get-started-card mb-[64px]">
        <Icon name={item.icon} />
      </div>
      <p className="font-semibold text-18">{item.name}</p>
      <p className="text-12 text-obiGray-300 w-[256px]">{item.info}</p>
    </div>
  );
};

export default GetStartedItem;
