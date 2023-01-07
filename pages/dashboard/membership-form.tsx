import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

import MembershipForm from "@components/organisms/MembershipPage/MembershipForm/MembershipForm";

const MembershipFormPage: NextPage = () => {
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
