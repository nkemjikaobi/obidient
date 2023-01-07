import Head from "next/head";
import React from "react";

// import MobileFooter from "../Footer/MobileFooter";
import DesktopFooter from "../Footer/DesktopFooter/DesktopFooter";
import MobileFooter from "../Footer/MobileFooter/MobileFooter";
import DesktopNavigation from "../NavBar/DesktopNavigation";
import MobileNavigation from "../NavBar/MobileNavigation";
// import MobileNavigation from "../NavBar/MobileNavigation";

interface BasePageLayout {
  children: any;
  showDesktopNavigation?: boolean;
  showMobileNavigation?: boolean;
  showNavigation?: boolean;
  showFooter?: boolean;
  title?: string;
  description?: string;
  keywords?: string;
}

const BasePageLayout = ({ children, showNavigation, showDesktopNavigation, showMobileNavigation, showFooter, title, description, keywords }: BasePageLayout) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta content={keywords} name="keywords" />
      </Head>
      <section className="smallLaptop:px-0">
        {showNavigation && (
          <>
            {showDesktopNavigation && (
              <div className="hidden smallLaptop:block smallLaptop:max-w-[90rem] smallLaptop:mx-auto smallLaptop:sticky smallLaptop:w-full smallLaptop:top-0 smallLaptop:z-50">
                <DesktopNavigation />
              </div>
            )}
            {showMobileNavigation && (
              <div className="block sticky w-full top-0 z-50 smallLaptop:hidden">
                <MobileNavigation />
              </div>
            )}
          </>
        )}
        <main className="h-auto">{children}</main>
        {showFooter && (
          <>
            <div className="hidden smallLaptop:block smallLaptop:w-full">
              <DesktopFooter />
            </div>
            <div className="block w-full smallLaptop:hidden">
              <MobileFooter />
            </div>
          </>
        )}
      </section>
    </div>
  );
};

BasePageLayout.defaultProps = {
  showFooter: true,
  showNavigation: true,
  title: "Obidient Token",
  description: "Tokenized Party, Membership",
  keywords: "token, crypto, election, decentralized",
  showDesktopNavigation: true,
  showMobileNavigation: true,
};

export default BasePageLayout;
