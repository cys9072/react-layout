import React from "react";
import styled from "styled-components";

const WebRestInnerLayout = ({ children }) => {
  return <WebRestContentsContainer className="renew-web-layout">{children}</WebRestContentsContainer>;
};

export default WebRestInnerLayout;

const WebRestContentsContainer = styled.div`
  padding-top: 18px;
  &.renew-web-layout {
    background: transparent;
  }

  /* WEB (REST) FLOW */
  table {
    background: #fff;
  }
  .cont-box .cont-list-box .cont-list .cont-title {
    font-size: 16px;
  }
  .cont-box .cont-list-box table thead {
    background: #292c35;
  }
  .cont-box .cont-list-box table thead th {
    color: #fff;
    font-weight: 500;
    font-size: 16px;
  }
  /* .cont-box .cont-list-box table tr td {
    color: #000000;
  } */
  .cont-box .cont-list-box {
    margin: 0;
  }
  .cont-box .cont-list-box .cont-list {
    list-style: none;
    margin: 32px 0 16px 0;
  }

  .cont-box .cont-list-box table tr li {
    font-size: 14px;
  }
  .cont-box .cont-list-box .cont-list .li-img {
    max-width: initial;
  }
  .cont-box .cont-list-box .cont-list .li-img img {
    width: 100%;
  }
`;
