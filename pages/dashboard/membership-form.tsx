import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";

import MembershipForm from "@components/organisms/MembershipPage/MembershipForm/MembershipForm";
import MembershipForm2 from "@components/organisms/MembershipPage/MembershipForm2/MembershipForm2";

const MembershipFormPage: NextPage = () => {
  const [isFirstStepDone] = useState<boolean>(true);
  return (
    <div>
      <Head>
        <title>Obidient Membership Form</title>
      </Head>
      <div>{isFirstStepDone ? <MembershipForm2 /> : <MembershipForm />}</div>
    </div>
  );
};

export default MembershipFormPage;
