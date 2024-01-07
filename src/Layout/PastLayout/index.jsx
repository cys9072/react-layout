import Footer from "Layout/BaseLayout/Footer";
import hljs from "highlight.js";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import styled from "styled-components";

const PastLayout = () => {
  const location = useLocation();
  let locationPathName = location.pathname;

  useEffect(() => {
    // init hightLight js
    hljs.highlightAll();
  }, [locationPathName]);

  // WEB(REST) FLOW modal state
  const [modal, setModal] = useState(false);
  useEffect(() => {
    if (modal) document.body.style.overflow = "hidden";
    if (!modal) document.body.style.overflow = "unset";
  }, [modal]);

  return (
    <PastStyleContainer id="page-content-wrapper">
      <div id="inaviContent">
        <Outlet context={[modal, setModal]} />
      </div>
      <Footer />
    </PastStyleContainer>
  );
};

export default PastLayout;

const PastStyleContainer = styled.div`
  .container {
    background: #fafafa;
    .options {
      width: 100%;
    }
    .options--text {
      width: 100%;
      padding: 20px;
      background: #fff;
      border: 1px solid #e5e5e5;
      color: #979797;
      border-radius: 4px;
    }

    .contents #code {
      border: 1px solid transparent;
      border-radius: 4px;
    }
  }
`;
