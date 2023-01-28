import type { NextPage } from "next";
import React from "react";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";

import { ForgotPasswordPage } from "@modules/authPages/forgotPasswordPage";

const ForgotPassword: NextPage = () => {
  return (
    <BasePageLayout showDesktopNavigation={false} showFooter={false} showMobileNavigation={true} showNavigation={true} title="Obidient Forgot Password">
      <ForgotPasswordPage />
    </BasePageLayout>
  );
};

export default ForgotPassword;
