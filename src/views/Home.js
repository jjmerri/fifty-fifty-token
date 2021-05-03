import React from "react";
import Hero from "../components/sections/Hero";
import Tokenomics from "../components/sections/Tokenomics";
import HowToBuy from "../components/sections/HowToBuy";
import HowToParticipate from "../components/sections/HowToParticipate";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <Tokenomics />
      <HowToBuy
        invertMobile
        topDivider
        bottomDivider
        imageFill
        className="illustration-section-02"
      />
      <HowToParticipate bottomDivider className="illustration-section-03" />
    </>
  );
};

export default Home;
