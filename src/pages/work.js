import React from "react";

import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

const WorkPage = () => {
  return(
    <section>
      <Hero heading='My Work' message='This is some of my recent work traveling the world.'/>
      <Portfolio />
    </section>
  )
};

export default WorkPage;