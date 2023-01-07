import type { NextPage } from "next";
import React from "react";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";

import { RegisterPage } from "@modules/authPages";

const CreateAccount: NextPage = () => {
  return (
    <BasePageLayout showDesktopNavigation={false} showFooter={false} showMobileNavigation={true} showNavigation={true} title="Obidient Create Account">
      <RegisterPage />
    </BasePageLayout>
  );
};

export default CreateAccount;
