import React from "react";
import HeroBanner from "../components/HeroBanner";
import banner from "../images/hero.jpg";
import Services from "../components/Services";
import Experience from "../components/Experience";
import FeaturedProject1 from "../components/FeaturedProject1";

function Home() {
  return (
    <>
      <HeroBanner
        heroHeading="I'm Mahabur"
        titleOne="Freelance"
        titleTwo=" FullStack Developer"
        titleThree=" React Developer"
        titleFour=" Web Designer"
        btnText="Contact"
        btnUrl="/contact"
        imgSrc={banner}
      />
      <Services />
      <Experience />
      <FeaturedProject1 />
    </>
  );
}

export default Home;
