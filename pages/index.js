import React from "react";
import Contact from "../components/elements/home/Contact";
import Hero from "../components/elements/home/Hero";
import OurServices from "../components/elements/home/OurServices";
import OurWork from "../components/elements/home/OurWork";
import Head from 'next/head'

const index = () => {
  return (
    <>
      <Head>
        <title>Cyber Monkeyz</title>
        <meta name="Shah Faisal" content="this is landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <OurServices />
      <OurWork />
      <Contact />
    </>
  );
};

export default index;
