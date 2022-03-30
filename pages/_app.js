import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Eric</title>
        <meta
          name="description"
          content="Eric's personal site - FullStack web3 engineer"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
