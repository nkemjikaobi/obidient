import type { NextPage } from "next";
import React from "react";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";

import { ResetPasswordPage } from "@modules/authPages/resetPasswordPage";

const ForgotPassword: NextPage = () => {
  return (
    <BasePageLayout showDesktopNavigation={false} showFooter={false} showMobileNavigation={true} showNavigation={true} title="Obidient Reset Password">
      <ResetPasswordPage />
    </BasePageLayout>
  );
};

export default ForgotPassword;
