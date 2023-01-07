import Head from "next/head";
import React from "react";

import DashboardSideBar from "../DashboardSideBar/DashboardSideBar";

interface DashboardLayout {
  children: any;
  title?: string;
  description?: string;
  keywords?: string;
  showFooter?: boolean;
}

const DashboardLayout = ({ children, title, description, keywords, showFooter }: DashboardLayout) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta content={keywords} name="keywords" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <section className="smallLaptop:px-0 relative bg-[#F5FAFF]">
        <>
          <div className="block sticky w-full top-0 z-50 overflow-hidden">
            <div className="flex flex-col smallLaptop:flex-row">
              <div className="hidden smallLaptop:block">
                <DashboardSideBar />
              </div>
              {/* <div className="block smallLaptop:hidden">
                <DashboardMobileNavigation />
              </div> */}
              <div className="w-full">
                <main className="h-full">{children}</main>
              </div>
            </div>
          </div>
        </>
      </section>
    </div>
  );
};

DashboardLayout.defaultProps = {
  showFooter: true,
  showNavigation: true,
  title: "Obidient Token",
  description: "Tokenized Party, Membership",
  keywords: "token, crypto, election, decentralized",
};

export default DashboardLayout;
