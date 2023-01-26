import React from "react";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Logo from "@components/atoms/Logo/Logo";
import FooterOptions from "@components/FooterOptions.tsx/DesktopFooterOptions";

const MobileFooter = () => {
  const FollowUs = [
    {
      id: 1,
      name: "facebook",
      route: "#",
    },
    {
      id: 2,
      name: "twitter",
      route: "#",
    },
    {
      id: 3,
      name: "instagram",
      route: "#",
    },
  ];

  return (
    <>
      <div className="relative">
        <div className="bg-black p-5 pb-7 text-white min-h-[420px] tablet:min-h-[470px]">
          <CustomLink destination="/">
            <Logo />
          </CustomLink>
          <p className="mt-8 text-sm leading-6 my-4 text-obiGray-300">The purpose of the project is to create and tokenize Party membership .</p>
          <FooterOptions hasIcons={true} options={FollowUs} title="Follow us" />
          <hr />
          <p className="text-center text-obiGray-300 pt-6 text-14">Obedient Token © 2022 All Right Reserved</p>
          <p className="text-center my-4 text-obiGray-300">Powered by Africa BIoT Labs</p>
        </div>
      </div>
    </>
  );
};

export default MobileFooter;
