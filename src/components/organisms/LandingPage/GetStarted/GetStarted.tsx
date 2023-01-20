import React from "react";
import { AiFillIdcard } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { RiContactsBook2Fill } from "react-icons/ri";

import Icon from "@components/atoms/Icons";

import GetStartedItem from "./GetStartedItem";

export interface GetStartedProp {
  id: number;
  icon: IconType;
  name: string;
  info: string;
}

const GetStarted = () => {
  return (
    <div className="mt-12 smallLaptop:mt-[190px]  bg-[#FCFCFF] -ml-[50vw] left-[50%] relative w-screen pt-[112px] pl-6 smallLaptop:px-[146px] pb-[192px]" id="how-it-works">
      <h3 className="text-center text-[32px] smallLaptop:text-40 mb-6 smallLaptop:mb-[114px] whitespace-nowrap">Get Started</h3>
      <div className="grid grid-cols-1  tablet:grid-cols-2 smallLaptop:flex smallLaptop:justify-center smallLaptop::items-center mb-[87px]">
        {GetStartedData.map((data) => (
          <GetStartedItem item={data} key={data.id} />
        ))}
      </div>
      <h3 className="text-center flex items-center justify-center">
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
    icon: FaUser,
    name: "Create an Account",
    info: "The purpose of the project is to create and tokenize Party membership with.",
  },
  {
    id: 2,
    icon: RiContactsBook2Fill,
    name: "Complete Your Profile",
    info: "The purpose of the project is to create and tokenize Party membership with.",
  },
  {
    id: 3,
    icon: AiFillIdcard,
    name: "Renew Membership",
    info: "The purpose of the project is to create and tokenize Party membership with.",
  },
];
