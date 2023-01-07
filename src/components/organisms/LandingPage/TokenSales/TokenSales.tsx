import Image from "next/image";
import React from "react";

import CustomLink from "@components/atoms/CustomLink/CustomLink";

const TokenSales = () => {
  return (
    <div className="pt-[100px] pb-[60px] px-6 smallLaptop:px-24">
      <h3 className="text-center text-40 mb-6 smallLaptop:mb-[114px] whitespace-nowrap">Token Sales</h3>
      <div className="flex flex-col smallLaptop:flex-row">
        <Image alt="phone" height={750} src="/images/png/phone.png" width={390} />
        <div className="smallLaptop:pl-[100px] bigLaptop:pl-[200px]">
          <p className="uppercase text-obiRed-500 text-14 font-semibold my-12">about</p>
          <p className="text-obiGreen-500 font-semibold text-[30px] smallLaptop:text-[40px] capitalize my-4">obidient token</p>
          <p className="font-semibold text-[30px] smallLaptop:text-[40px] capitalize mb-4">tokenized party</p>
          <p className="font-semibold text-[30px] smallLaptop:text-[40px] capitalize mb-4">membership.</p>
          <p className="mt-2 text-obiBlack-200 text-14 w-[80%] mb-4 leading-5">
            The purpose of the project is to create and tokenize Party membership with a major focus on fundraising and providing evidential benefits.
          </p>
          <div className="flex items-center text-14 mt-8 mb-4 font-medium">
            <p>Membership Mangement</p>
            <p className="pl-20">Wallet Generation</p>
          </div>
          <div className="flex items-center text-14 mt-4 mb-8 font-medium">
            <p>NFT Membership ID</p>
            <p className="pl-20">Utility Token</p>
          </div>
          <CustomLink customClass="underline text-obiRed-500 text-14 font-semibold" destination="#">
            More Information
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

export default TokenSales;
