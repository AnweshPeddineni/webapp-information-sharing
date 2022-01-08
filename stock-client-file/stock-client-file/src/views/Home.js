import React from "react";
import Disclosures from "../components/home/Disclosures";
import HomePageHeroSection from "../components/home/HomePageHeroSection";
import Inclusions from "../components/home/Inclusions";
import Services from "../components/home/Services";
import "../components/home/Home.css";

const Home = () => {
  return (
    <>
      <HomePageHeroSection />
      <Services />
      <Inclusions />
      <Disclosures />
    </>
  );
};

export default Home;
