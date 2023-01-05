import React from "react";

import Icon from "@components/atoms/Icons";

import GetStartedItem from "./GetStartedItem";

export interface GetStartedProp {
  id: number;
  icon: string;
  name: string;
  info: string;
}

const GetStarted = () => {
  return (
    <div className="pt-[190px]">
      <h3 className="text-center text-40 mb-[114px]">Get Started</h3>
      <div className="flex items-center mb-[87px]">
        {GetStartedData.map((data) => (
          <GetStartedItem item={data} key={data.id} />
        ))}
      </div>
      <h3 className="text-center mb-[281px] flex items-center justify-center">
        <span className="text-12 text-obiGray-200">Learn more</span>
        <Icon className="ml-2" name="proceed" />
      </h3>
    </div>
  );
};

export default GetStarted;

const GetStartedData: GetStartedProp[] = [
  {
    id: 1,
    icon: "user",
    name: "Create an Account",
    info: "The purpose of the project is to create and tokenize Party membership with.",
  },
  {
    id: 2,
    icon: "contacts",
    name: "Complete Your Profile",
    info: "The purpose of the project is to create and tokenize Party membership with.",
  },
  {
    id: 3,
    icon: "invoice",
    name: "Renew Membership",
    info: "The purpose of the project is to create and tokenize Party membership with.",
  },
];
