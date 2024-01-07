import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router";

const BaseLayout = () => {
  return (
    <div id="page-content-wrapper">
      <div id="inaviContent">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
