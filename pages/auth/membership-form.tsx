import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from "react";

import MembershipForm from "@components/organisms/MembershipPage/MembershipForm/MembershipForm";

import useAuth from "@hooks/useAuth";

import { setAuthToken } from "@shared/libs/helpers";

const MembershipFormPage: NextPage = () => {
  const { loadUser } = useAuth();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, []);

  useEffect(() => {
    loadUser();
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
