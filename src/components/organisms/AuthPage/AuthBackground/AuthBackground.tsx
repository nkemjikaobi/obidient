import Image from "next/image";
import React from "react";

const AuthBackground = () => {
  return (
    <div className="hidden smallLaptop:block smallLaptop:relative smallLaptop:w-[60%] smallLaptop:min-h-[1117px]">
      <Image alt="obidient token" fill src="/images/png/authBg.png" />
      <div className="absolute top-[80px] text-white left-[80px]">
        <h3 className="text-16 bigLaptop:text-18 font-semibold mb-[11px]">Featured</h3>
        <h1 className="font-semibold text-[30px] bigLaptop:text-[40px] mb-6 w-[70%]">Welcome to Obidient Token Tokenized Party Membership portal.</h1>
        <p className="text-14 bigLaptop:text-18 text-obiGray-330 mb-[62px] w-[60%] opacity-80">
          The purpose of the project is to create and tokenize Party membership with a major focus on fundraising and providing evidential benefits.
        </p>
        <Image alt="" height={528} src="/images/png/authBg1.png" width={929} />
      </div>
    </div>
  );
};

export default AuthBackground;
