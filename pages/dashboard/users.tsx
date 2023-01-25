import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { showToast } from "src/helpers/showToast";

import DashboardLayout from "@components/layouts/DashboardLayout/DashboardLayout";
import Users from "@components/organisms/UserPage/Users/Users";

import useAlert from "@hooks/useAlert";
import useAuth from "@hooks/useAuth";
import useWallet from "@hooks/useWallet";

import { UserTypes } from "@shared/libs/helpers";

export interface IAlert {
  id: number;
  message: string;
  type: string;
  timeout?: string;
}

const UsersPage: NextPage = () => {
  const { alerts } = useAlert();
  const { user } = useAuth();
  const { monitorAccountChanged, monitorDisconnect, provider, connectWallet } = useWallet();
  const router = useRouter();

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

  useEffect(() => {
    if (user && user.userType !== UserTypes.ADMIN) {
      router.push("/auth/login");
    }
  }, [user]);

  return (
    <DashboardLayout title="Obidient Dashboard">
      <Users />
    </DashboardLayout>
  );
};

export default UsersPage;
