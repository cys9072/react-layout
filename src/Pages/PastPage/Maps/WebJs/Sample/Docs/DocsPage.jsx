import MapDesc from "components/MapDesc";
import React from "react";
import styled from "styled-components";
import MapTitle from "../../../../../../components/MapTitle";

const DaterCreatePathPage = () => {
  return (
    <Container className="container">
      <MapTitle label="DOCS" />
      <Contents className="contents no-border">
        <MapDesc label="" />
        <iframe title="docs" id="iframe" src="http://imapsapi.inavi.com/web_reference/docs/v0.1.0/"></iframe>
      </Contents>
    </Container>
  );
};

export default DaterCreatePathPage;

const Container = styled.div`
  background: transparent !important;
  padding: 32px 0px 32px 48px !important;
  #iframe {
    border: none;
  }
`;

const Contents = styled.div`
  margin-left: -30px;
`;
