import type { NextPage } from "next";
import React from "react";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";

import { LoginPage } from "@modules/authPages";

const Login: NextPage = () => {
  return (
    <BasePageLayout showFooter={false} showNavigation={false} title="Obidient Login">
      <LoginPage />
    </BasePageLayout>
  );
};

export default Login;
