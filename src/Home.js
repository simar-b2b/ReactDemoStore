import React from "react";
import web from "../src/images/img2.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
    <Common
    name="Grow your bussiness with ReactDemoStore"
    imgsrc={web}
    visit="/service"
    btnname="Get Started"
  />
    </>
  );
};

export default Home;
