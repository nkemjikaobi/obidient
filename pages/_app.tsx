import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import React from "react";
import "nprogress/nprogress.css";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

import AlertState from "@context/alert/AlertState";
import AuthState from "@context/auth/AuthState";
import WalletState from "@context/wallet/WalletState";

/**
 * App wrapper for the whole application
 * @param {NextComponentType<NextPageContext, any, {}>} Component
 * @param {any} pageProps
 * @return {AppProps}
 */
const MyApp = ({ Component, pageProps }: AppProps) => {
  NProgress.configure({
    easing: "ease-out",
    minimum: 0.2,
  });

  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  return (
    <WalletState>
      <AlertState>
        <AuthState>
          <Toaster position="bottom-left" />
          <Component {...pageProps} />
        </AuthState>
      </AlertState>
    </WalletState>
  );
};

export default MyApp;
