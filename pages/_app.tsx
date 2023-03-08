import Layout from "components/Layout";
import "styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { APP_DESCRIPTION, APP_TITLE } from "@/consts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
