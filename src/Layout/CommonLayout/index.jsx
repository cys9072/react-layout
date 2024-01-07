import Header from "Layout/BaseLayout/Header";
import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";

const CommonLayout = () => {
  return (
    <CommonPageStyled id="wrapper" className="trans-all-ease toggled">
      <Header />
      <Outlet />
    </CommonPageStyled>
  );
};

export default CommonLayout;

const CommonPageStyled = styled.div``;
