"use client";

import React, { useState } from "react";
import First from "./svg/First";
import Education from "./svg/Education";
import From from "./svg/From";
import Banner from "./Banner";
import Blend from "./Blend";
import About from "./About";
import Carousal from "./Carousal";
import Balls from "./Balls";
import Timeline from "./Timeline";
import Contact from "./Contact";

const Landing = () => {
  return (
    <div className="relaive  ">
      {/* firstsection banner */}
      <Banner />

      <About />
      <Carousal />

      <Balls />

      <Timeline />

      <Contact />
    </div>
  );
};

export default Landing;
