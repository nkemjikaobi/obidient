import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import PaymentStatus from "@components/organisms/PaymentPage/PaymentStatus/PaymentStatus";

import useAuth from "@hooks/useAuth";

import { setAuthToken } from "@shared/libs/helpers";

const PaymentStatusPage: NextPage = () => {
  const { loadUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, []);

  useEffect(() => {
    loadUser(router);
  }, []);

  return (
    <div className="bg-[#F5FAFF]">
      <Head>
        <title>Obidient Membership Form</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <div className="bg-[#F5FAFF] py-64">
        <PaymentStatus />
      </div>
    </div>
  );
};

export default PaymentStatusPage;
