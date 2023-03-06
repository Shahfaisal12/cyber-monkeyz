import Head from "next/head";
import React from "react";
import Hero from "../../components/elements/marketing/Hero";
import TalkUs from "../../components/elements/home/TalkUs";
import OurExperience from "../../components/elements/marketing/OurExperience";
import WhyStrategy from "../../components/elements/marketing/WhyStrategy";

const index = () => {
  return (
    <>
      <Head>
        <title>Marketing Page</title>
        <meta name="Shah Faisal" content="this is Strategy Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <WhyStrategy />
      <OurExperience />
      <TalkUs />
    </>
  );
};

export default index;
