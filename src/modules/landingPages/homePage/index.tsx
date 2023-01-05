import React, { FC } from "react";

import Blog from "@components/organisms/LandingPage/Blog/Blog";
import GetStarted from "@components/organisms/LandingPage/GetStarted/GetStarted";
import HeroSection from "@components/organisms/LandingPage/HeroSection/HeroSection";
import KeyFeatures from "@components/organisms/LandingPage/KeyFeatures/KeyFeatures";
import Partners from "@components/organisms/LandingPage/Partners/Partners";
import Purpose from "@components/organisms/LandingPage/Purpose/Purpose";
import TokenSales from "@components/organisms/LandingPage/TokenSales/TokenSales";

export const HomePage: FC = () => (
  <>
    <HeroSection />
    <GetStarted />
    <KeyFeatures />
    <Purpose />
    <TokenSales />
    <Blog />
    <Partners />
  </>
);
