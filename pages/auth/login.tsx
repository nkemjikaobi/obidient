import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { showToast } from "src/helpers/showToast";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";

import useAlert from "@hooks/useAlert";
import useWallet from "@hooks/useWallet";

import { NotificationTypes } from "@shared/libs/helpers";

import { IAlert } from "@pages/dashboard";

import { LoginPage } from "@modules/authPages";

const Login: NextPage = () => {
  const { alerts } = useAlert();
  const { monitorAccountChanged, monitorDisconnect, provider, connectWallet } = useWallet();

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
    router.push("/auth/login");
  };

  useEffect(() => {
    if (email && token) {
      verifyUser(email, token);
    }
  }, [email, token]);

  // Handle Notifications
  useEffect(() => {
    let mounted = true;

    if (mounted && alerts.length > 0) {
      alerts.map((alert: IAlert) => showToast(alert.message, alert.type));
    }
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line
  }, [alerts]);

  // monitior account changed and monitor disconnect
  useEffect(() => {
    let mounted = true;

    if (mounted && provider !== null) {
      monitorAccountChanged(provider);
      monitorDisconnect(provider);
    }
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line
  }, [provider]);

  // Reconnect wallet on page refresh
  useEffect(() => {
    let mounted = true;

    if (mounted && localStorage?.getItem("isWalletConnected") === "true") {
      connectWallet();
    }
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line
  }, []);

  return (
    <BasePageLayout showDesktopNavigation={false} showFooter={false} showMobileNavigation={true} showNavigation={true} title="Obidient Login">
      <LoginPage />
    </BasePageLayout>
  );
};

export default Login;
