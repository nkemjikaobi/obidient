import React from "react";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import { Developers } from "@components/componentData/Footer/Developers";
import { Products } from "@components/componentData/Footer/Products";
import { Resources } from "@components/componentData/Footer/Resources";
import { Socials } from "@components/componentData/Footer/Socials";
import FooterOptions from "@components/FooterOptions.tsx/DesktopFooterOptions";

const DesktopFooter = () => {
  return (
    <div>
      <div className="bg-black text-white relative">
        <div className="max-w-[90rem] mx-auto flex items-baseline justify-between py-16 pl-[3.25rem] pr-8 relative">
          <div>
            <h3 className="font-semibold text-[40px]">Obidient</h3>
            <p className="text-obiGray-320 w-[70%] my-4">The purpose of the project is to create and tokenize Party membership .</p>
            <div className="flex items-center mt-8">
              {Socials.map((socials) => (
                <div className="mr-4 cursor-pointer" key={socials.id}>
                  <a className=" hover:text-obiRed-500" href={socials.route} rel="noreferrer">
                    <socials.icon />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <FooterOptions options={Products} title="About Us" />
          <FooterOptions options={Resources} title="Features" />
          <FooterOptions options={Developers} title="Support" />
          {/* <FooterOptions options={Developers} title="Get in touch" /> */}
        </div>
      </div>
      <div className="bg-black text-white p-10 text-14 font-medium relative h-[164px]">
        <div className={`flex justify-between items-center pb-16 opacity-95 max-w-[90rem] mx-auto relative text-obiGray-320`}>
          <p>Obedient Token © 2022 All Right Reserved</p>
          <p>Powered by Africa BIoT Labs</p>
          <div className="flex items-center">
            <CustomLink customClass="mr-[24px]" destination="#">
              Terms of Service
            </CustomLink>
            <CustomLink destination="#">Privacy Policy</CustomLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopFooter;
