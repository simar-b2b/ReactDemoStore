import React from "react";
import { NavLink } from "react-router-dom";
import Slide from 'react-reveal/Slide';

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center text-center text-md-start">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <Slide left>
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1 className="grow-heading">
                    {props.name}
                  </h1>
                  <h5 className="my-3">
                    We are a team of talented developers making websites
                  </h5>
                  <div className="my-3">
                    <NavLink className="btn-get-started" to={props.visit}>
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>
                </Slide>

                <div className="col-lg-6 pt-5 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated "
                    alt="home_img"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
