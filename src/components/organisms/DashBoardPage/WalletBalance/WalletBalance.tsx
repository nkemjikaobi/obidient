import { range } from "lodash";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Icon from "@components/atoms/Icons";

import RenderBalance from "../RenderBalance/RenderBalance";

const WalletBalance = () => {
  const [balanceToRender, setBalanceToRender] = useState<number>(1);
  return (
    <div className="pt-6 smallLaptop:pt-[35px] px-6 smallLaptop:px-[46px]">
      <h4 className="text-16 smallLaptop:text-18 mt-[35px] mb-[15px]">Your Wallet ID : 2567WWG68 </h4>
      <RenderBalance balanceToRender={balanceToRender} />
      <div className="flex items-center space-x-4 justify-center mt-8">
        {range(3).map((ind) =>
          balanceToRender !== ind + 1 ? (
            <Icon className="cursor-pointer" key={uuidv4()} name="circleEmpty" onClick={() => setBalanceToRender(ind + 1)} />
          ) : (
            <Icon className="cursor-pointer" key={uuidv4()} name="circleFilled" onClick={() => setBalanceToRender(ind + 1)} />
          )
        )}
      </div>
      <div className="flex items-center justify-between mt-16">
        {walletActionsData.map((data) => (
          <div key={data.id}>
            <Icon name={data.name} />
            <p className="capitalize mt-4 text-12 smallLaptop:text-14 text-center">{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletBalance;

const walletActionsData = [
  {
    id: 1,
    name: "buy",
  },
  {
    id: 2,
    name: "sell",
  },
  {
    id: 3,
    name: "transfer",
  },
  {
    id: 4,
    name: "more",
  },
];
