import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { useEffect } from "react";
import { showToast } from "src/helpers/showToast";

import MembershipForm2 from "@components/organisms/MembershipPage/MembershipForm2/MembershipForm2";

import useAuth from "@hooks/useAuth";

import { NotificationTypes, setAuthToken } from "@shared/libs/helpers";

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
  }, [message]);

  return (
    <div>
      <Head>
        <title>Obidient Membership Form</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <div>
        <MembershipForm2 />
      </div>
    </div>
  );
};

export default MembershipFormPage;
