import type { NextPage } from "next";
import React from "react";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";

import { LoginPage } from "@modules/authPages";

const Login: NextPage = () => {
  return (
    <BasePageLayout showDesktopNavigation={false} showFooter={false} showMobileNavigation={true} showNavigation={true} title="Obidient Login">
      <LoginPage />
    </BasePageLayout>
  );
};

export default Login;
