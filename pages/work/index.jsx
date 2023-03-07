import Head from "next/head";
import React from "react";
import Hero from "../../components/elements/work/Hero";

const index = () => {
  return (
    <>
      <Head>
        <title>Work Page</title>
        <meta name="Shah Faisal" content="this is Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  );
};

export default index;
