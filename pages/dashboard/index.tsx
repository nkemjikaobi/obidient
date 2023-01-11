import type { NextPage } from "next";
import React, { useEffect } from "react";
import { showToast } from "src/helpers/showToast";

import DashboardLayout from "@components/layouts/DashboardLayout/DashboardLayout";

import useAuth from "@hooks/useAuth";

import { NotificationTypes } from "@shared/libs/helpers";

import { DashBoard } from "@modules/dashboardPages";

const Home: NextPage = () => {
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
    <DashboardLayout title="Obidient Dashboard">
      <DashBoard />
    </DashboardLayout>
  );
};

export default Home;
