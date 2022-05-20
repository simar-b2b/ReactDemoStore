import React from "react";
import about from "../src/images/about-us.png";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={about}
        visit="/contact"
        btnname="Contact Us"
      />
    </>
  );
};

export default About;
