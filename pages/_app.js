import React from "react";
// next imports
import App from "next/app";
import Head from "next/head";

// app css
import "../styles/globals.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const title = "Usage Based Pricing Done Right";
    const description =
      "Discover companies that put customers first with usage-based pricing";
    const keywords = "user-based-pricing, saas";
    const url = "https://www.usagebased.org";

    return (
      <>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          {/* OG Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content={url} />
          <meta property="og:description" content={description} />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/toolspacedev/image/upload/v1682606510/Usage_Based_izyzmf.png"
          />
          <meta property="og:image:alt" content={title} />
          {/* Twitter Cards */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@theappsmith" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/toolspacedev/image/upload/v1682606510/Usage_Based_izyzmf.png"
          />
          {/* Other Meta Tags */}
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
          <link rel="canonical" href={url} />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

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

        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
