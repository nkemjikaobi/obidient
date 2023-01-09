import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from "react";

import MembershipForm from "@components/organisms/MembershipPage/MembershipForm/MembershipForm";

import { setAuthToken } from "@shared/libs/helpers";

const MembershipFormPage: NextPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.token) {
      setAuthToken(localStorage.token);
    }
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
