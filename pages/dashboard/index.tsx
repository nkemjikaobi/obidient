import type { NextPage } from "next";
import React from "react";

import DashboardLayout from "@components/layouts/DashboardLayout/DashboardLayout";

import { DashBoard } from "@modules/dashboardPages";

const Home: NextPage = () => {
  return (
    <DashboardLayout title="Obidient Dashboard">
      <DashBoard />
    </DashboardLayout>
  );
};

export default Home;
