import Image from "next/image";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import Icon from "@components/atoms/Icons";

import { ButtonProperties } from "@shared/libs/helpers";

import Hero from "@images/png/hero.png";

const HeroSection = () => {
  return (
    <div className="flex justify-between items-center pl-16 bigLaptop:pl-20">
      <div>
        <p className="font-semibold mb-1 text-[35px] text-obiGreen-500">Obidient Token</p>
        <p className="font-semibold mb-1 text-[35px] text-black">Tokenized Party</p>
        <p className="font-semibold text-[35px] text-black">Membership</p>
        <p className="mt-[30px] text-14 mb-8 text-obiGray-400 w-[487px] leading-[27px]">
          The purpose of the project is to create and tokenize Party membership with a major focus on fundraising and providing evidential benefits.
        </p>
        <div className="flex items-center">
          <CustomButton
            customClass="!rounded-[5px] text-white mr-[45px]"
            handleClick={() => {}}
            size={ButtonProperties.SIZES.small}
            title="Get Started"
            variant={ButtonProperties.VARIANT.primary.name}
          />
          <div className="flex items-center cursor-pointer hover:text-obiRed-500">
            <Icon className="mr-[19px]" name="play" />
            <p className="text-14 font-medium">Watch Demo</p>
          </div>
        </div>
      </div>
      <Image alt="Ipad showing income" height={233} src={Hero} width={717} />
    </div>
  );
};

export default HeroSection;