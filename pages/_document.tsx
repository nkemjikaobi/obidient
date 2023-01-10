import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

/**
 * This is a document class that contains meta links for our application
 * @return {void}
 */
class MyDocument extends Document {
  /**
   *
   * @return {jsx}
   */
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link href="/favicon.ico" rel="icon" />
        </Head>
        <body className="font-poppins  box-border">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
