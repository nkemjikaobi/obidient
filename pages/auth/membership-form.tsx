import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import { showToast } from "src/helpers/showToast";

import MembershipForm from "@components/organisms/MembershipPage/MembershipForm/MembershipForm";

import useAlert from "@hooks/useAlert";
import useAuth from "@hooks/useAuth";
import useWallet from "@hooks/useWallet";

import { setAuthToken } from "@shared/libs/helpers";

import { IAlert } from "@pages/dashboard";

const MembershipFormPage: NextPage = () => {
  const { loadUser } = useAuth();
  const { alerts } = useAlert();
  const { monitorAccountChanged, monitorDisconnect, provider, connectWallet } = useWallet();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, []);

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
    <div>
      <Head>
        <title>Obidient Membership Form</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <div>
        <MembershipForm />
      </div>
    </div>
  );
};

export default MembershipFormPage;
