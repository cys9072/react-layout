import React from "react";
import styled from "styled-components";

const MapTitle = ({ before, label, fontSize, marginTop }) => {
  return (
    <H2Title className="title" fontSize={fontSize} marginTop={marginTop}>
      {before && <span>{before}</span>}

      {label}
    </H2Title>
  );
};

export default MapTitle;

const H2Title = styled.h2`
  /* font-size: 32px; */
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : `32px`)};

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0px;
  margin-top: ${(props) => props.marginTop && props.marginTop};
  & span {
    font-size: 20px;
    background: #292c35;
    padding: 8px 30px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    color: #fff;
  }
`;
