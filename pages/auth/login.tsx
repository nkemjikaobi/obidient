import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { showToast } from "src/helpers/showToast";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";

import useAuth from "@hooks/useAuth";

import { NotificationTypes } from "@shared/libs/helpers";

import { LoginPage } from "@modules/authPages";

const Login: NextPage = () => {
  const { error, clearErrors, message, clearMessages } = useAuth();

  const router = useRouter();

  const { email, token } = router.query;

  const verifyUser = async (email: any, token: any) => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/user/verify-account?email=${email}&token=${token}`);
      if (res.data.status === "success") {
        showToast("Email verified", NotificationTypes.SUCCESS);
      }
    } catch (error: any) {
      showToast(error.response.data.message, NotificationTypes.ERROR);
    }
  };

  useEffect(() => {
    if (email && token) {
      verifyUser(email, token);
    }
  }, [email, token]);

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
    <BasePageLayout showDesktopNavigation={false} showFooter={false} showMobileNavigation={true} showNavigation={true} title="Obidient Login">
      <LoginPage />
    </BasePageLayout>
  );
};

export default Login;
