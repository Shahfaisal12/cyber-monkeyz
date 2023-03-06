import Head from "next/head";
import React from "react";
import Hero from "../../components/elements/design/Hero";
import TalkUs from "../../components/elements/home/TalkUs";
import OurExperience from "../../components/elements/design/OurExperience";
import WhyStrategy from "../../components/elements/design/WhyStrategy";

const index = () => {
  return (
    <>
      <Head>
        <title>Design Page</title>
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
