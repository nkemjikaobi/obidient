import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import MembershipForm from "@components/organisms/MembershipPage/MembershipForm/MembershipForm";

import useAuth from "@hooks/useAuth";

import { setAuthToken } from "@shared/libs/helpers";

const MembershipFormPage: NextPage = () => {
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
    <div>
      <Head>
        <title>Obidient Membership Form</title>
      </Head>
      <div>
        <MembershipForm />
      </div>
    </div>
  );
};

export default MembershipFormPage;
