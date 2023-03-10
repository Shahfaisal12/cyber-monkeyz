import Head from "next/head";
import React from "react";
import Contact from "../../components/elements/contact/Contact";

const index = () => {
  return (
    <>
      <Head>
        <title>Contact Page</title>
        <meta name="Shah Faisal" content="this is Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contact />
    </>
  );
};

export default index;
