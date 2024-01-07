import { ICON } from "constant";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import CustomAccordion from "./CustomAccordion";

const Header = () => {
  const [activeSideBar, setActiveSideBar] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") return setActiveSideBar(false);
  }, [location.pathname]);
  return (
    <div id="sidebar-wrap" className={activeSideBar ? "active" : null}>
      <div className="sidebar-wrapper">
        <div className="sidebar-header">
          <div className="sidebar-title hamburger-box">
            <h1>
              <a href="/">
                <img src={ICON.LOGO} alt="inavi" />
              </a>
            </h1>
            <button type="button" className="hamburger-btn" onClick={() => setActiveSideBar((val) => !val)}>
              <img src={ICON.HAMBURGER} alt="hamburger-btn" />
            </button>
          </div>
        </div>
        <div className="sidebar-nav-container">
          <div className="sidebar-nav-scroll">
            <CustomAccordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
