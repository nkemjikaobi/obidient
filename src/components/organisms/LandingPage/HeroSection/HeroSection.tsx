import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import Icon from "@components/atoms/Icons";

import { ButtonProperties } from "@shared/libs/helpers";

import Hero from "@images/png/hero.png";
// import Hero2 from "@images/png/hero2.png";

const HeroSection = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center pl-4 smallLaptop:pl-16 bigLaptop:pl-20">
      <div className="mt-6 smallLaptop:ml-0">
        <p className="font-semibold mb-1 text-[30px] smallLaptop:text-[35px] text-obiGreen-500">Obidient Token</p>
        <p className="font-semibold mb-1 text-[30px] smallLaptop:text-[35px] text-black">Tokenized Party</p>
        <p className="font-semibold text-[30px] smallLaptop:text-[35px] text-black">Membership</p>
        <p className="mt-[30px] text-14 mb-8 text-obiGray-400 smallLaptop:w-[487px] leading-[27px]">
          The purpose of the project is to create and tokenize Party membership with a major focus on fundraising and providing evidential benefits.
        </p>
        <div className="flex items-center">
          <CustomButton
            customClass="!rounded-[5px] text-white mr-[45px]"
            handleClick={() => router.push("/auth/create-account")}
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
      <div className="hidden bigLaptop:block">
        <Image alt="Ipad showing income" height={233} src={Hero} width={717} />
      </div>
      <div className="hidden smallLaptop:block bigLaptop:hidden">
        <Image alt="Ipad showing income" height={133} src={Hero} width={517} />
      </div>
      {/* <div className="block border border-black px-[20px] py-8 rounded-[7px] smallLaptop:hidden">
        <Image alt="Ipad showing income" height={185} src={Hero2} width={308} />
      </div> */}
    </div>
  );
};

export default HeroSection;
