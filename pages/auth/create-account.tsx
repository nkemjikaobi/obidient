import type { NextPage } from "next";
import React, { useEffect } from "react";
import { showToast } from "src/helpers/showToast";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";

import useAuth from "@hooks/useAuth";

import { NotificationTypes } from "@shared/libs/helpers";

import { RegisterPage } from "@modules/authPages";

const CreateAccount: NextPage = () => {
  const { error, clearErrors, message, clearMessages } = useAuth();

  useEffect(() => {
    if (error) {
      showToast(error, NotificationTypes.ERROR);
      clearErrors();
    }
  }, [error]);

  useEffect(() => {
    if (message) {
      showToast(message, NotificationTypes.SUCCESS);
      clearMessages();
    }
  });
  return (
    <BasePageLayout showDesktopNavigation={false} showFooter={false} showMobileNavigation={true} showNavigation={true} title="Obidient Create Account">
      <RegisterPage />
    </BasePageLayout>
  );
};

export default CreateAccount;
