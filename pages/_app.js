import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rahul Pipaliya</title>
      </Head>
      <ThemeProvider enableColorScheme={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
