import React from "react";
import Head from "next/head";
import Home from "./home/Home";

const index = () => {
  return (
    <>
      <Head>
        <title>Cyber Monkeyz</title>
        <meta name="Shah Faisal" content="this is landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
};

export default index;
