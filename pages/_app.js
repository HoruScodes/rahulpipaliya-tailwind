import "tailwindcss/tailwind.css";
import "../styles/global.css";

import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import React, { useRef, useEffect } from "react";

import Cursor from "../components/Cursor/Cursor";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const cursorRef = useRef(null);

  useEffect(() => {
    router.events.on("routeChangeComplete", progressDone);
    router.events.on("routeChangeError", progressDone);

    return () => {
      router.events.off("routeChangeComplete", progressDone);
      router.events.off("routeChangeError", progressDone);
    };
  }, []);

  const progressDone = () => {
    const { cursor } = cursorRef;
    if (cursor) {
      cursor.update();
    }
  };

  return (
    <>
      <Cursor ref={cursorRef} />
      <Head>
        <title>Rahul Pipaliya</title>
        <meta name="facebook-domain-verification" content="7w1d9u4505t7rgpkzpi7q2p0yvyr36" />
      </Head>
      <ThemeProvider enableColorScheme={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
