import "@/styles/globals.css";

import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#22c55e" />
      <Component {...pageProps} />
    </>
  );
}
