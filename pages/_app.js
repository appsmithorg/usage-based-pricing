import React from "react";
// next imports
import App from "next/app";
import Head from "next/head";

// app css
import "../styles/globals.scss";

import { DefaultSeo } from "next-seo";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
            crossOrigin="anonymous"
          />
        </Head>
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FHZ93K2JHB"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-FHZ93K2JHB');`,
          }}
        ></script>
        <DefaultSeo
          title="Usage Based Pricing Done Right"
          description="Discover companies that put customers first with usage-based pricing"
          openGraph={{
            type: "website",
            locale: "en_IE",
            url: "https://www.usagebased.org",
            siteName: "usagebased.org",
            images: {
              url: "https://res.cloudinary.com/toolspacedev/image/upload/v1682597894/favicon_cleycj.png",
              width: 650,
              height: 650,
              alt: "logo",
            },
          }}
          twitter={{
            handle: "@theappsmithorg",
            site: "https://www.usagebased.org/",
            cardType: "summary",
          }}
        />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
