import Image from "next/image";
import React from "react";

const Purpose = () => {
  return (
    <div className="bg-black -ml-[50vw] left-[50%] relative w-screen smallLaptop:h-[488px] text-white mt-[200px]">
      <p className="text-20 px-6 py-12 smallLaptop:pl-[170px] smallLaptop:pt-[170px] smallLaptop:w-[45%] leading-10 bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent">
        The purpose of the project is to create and tokenize Party membership with a major focus on fundraising and providing evidential benefits.
      </p>
      <div className="hidden smallLaptop:block smallLaptop:absolute smallLaptop:right-[100px] smallLaptop:-top-[150px]">
        <Image alt="flying coins" height={456} src="/images/png/flying-coins.png" width={404} />
      </div>
    </div>
  );
};

export default Purpose;
