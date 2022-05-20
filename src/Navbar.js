import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-md-10  col-12 mx-auto">
            <nav className="navbar navbar-expand-md bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  ReactDemoStore
                </NavLink>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/service">
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <button
                  className="offcanvas-btn btn  d-block d-md-none p-0"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  <HiMenuAlt3 />
                </button>

                <div
                  className="offcanvas offcanvas-end d-block d-md-none w-50"
                  tabindex="-1"
                  id="offcanvasExample"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <div className="offcanvas-header offcanvas-header ">
                    <button
                      type="button"
                      className="btn-close ms-auto"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          aria-current="page"
                          to="/"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/service">
                          Services
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/about">
                          About
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
