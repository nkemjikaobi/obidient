import React, { FC } from "react";

import GetStarted from "@components/organisms/LandingPage/GetStarted/GetStarted";
import HeroSection from "@components/organisms/LandingPage/HeroSection/HeroSection";
import KeyFeatures from "@components/organisms/LandingPage/KeyFeatures/KeyFeatures";

export const HomePage: FC = () => (
  <>
    <HeroSection />
    <GetStarted />
    <KeyFeatures />
  </>
);
