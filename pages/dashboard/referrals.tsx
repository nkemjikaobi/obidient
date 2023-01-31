import type { NextPage } from "next";
import React, { useEffect } from "react";
import { showToast } from "src/helpers/showToast";

import DashboardLayout from "@components/layouts/DashboardLayout/DashboardLayout";
import Referals from "@components/organisms/ReferalPage/Referals/Referals";

import useAlert from "@hooks/useAlert";
import useWallet from "@hooks/useWallet";

export interface IAlert {
  id: number;
  message: string;
  type: string;
  timeout?: string;
}

const ReferalsPage: NextPage = () => {
  const { alerts } = useAlert();
  const { monitorAccountChanged, monitorDisconnect, provider, connectWallet } = useWallet();

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
    <DashboardLayout title="Obidient Dashboard">
      <Referals />
    </DashboardLayout>
  );
};

export default ReferalsPage;
