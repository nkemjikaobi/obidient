import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";

import MembershipForm2 from "@components/organisms/MembershipPage/MembershipForm2/MembershipForm2";

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
        <MembershipForm2 />
      </div>
    </div>
  );
};

export default MembershipFormPage;
