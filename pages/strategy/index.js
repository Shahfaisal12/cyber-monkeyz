import Head from "next/head";
import React from "react";
import Hero from "../../components/elements/strategy/Hero";
import LetsTalk from "../../components/elements/strategy/LetsTalk";
import OurExperience from "../../components/elements/strategy/OurExperience";
import WhyStrategy from "../../components/elements/strategy/WhyStrategy";

const index = () => {
  return (
    <>
      <Head>
        <title>Strategy Page</title>
        <meta name="Shah Faisal" content="this is Strategy Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <WhyStrategy />
      <OurExperience />
      <LetsTalk />
    </>
  );
};

export default index;
