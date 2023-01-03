import type { NextPage } from "next";
import React from "react";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";

import { HomePage } from "@modules/landingPages";

const Home: NextPage = () => {
  return (
    <BasePageLayout title="Obidient Home">
      <div className="max-w-[90rem] mx-auto">
        <HomePage />
      </div>
    </BasePageLayout>
  );
};

export default Home;
