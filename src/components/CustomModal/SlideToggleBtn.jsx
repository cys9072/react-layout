import React, { useState } from "react";
import styled from "styled-components";

const SlideToggleBtn = ({ label }) => {
  const [active, setActive] = useState(false);
  return (
    <SlideContainer>
      <span>{label}</span>
      <ToggleBtn
        className={active ? "active" : ""}
        onClick={() => {
          setActive((val) => !val);
        }}
      >
        <span className="ball"></span>
        <span className="title">{active ? "on" : "off"}</span>
      </ToggleBtn>
    </SlideContainer>
  );
};

export default SlideToggleBtn;

const SlideContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: 0.5s;
`;
const ToggleBtn = styled.button`
  width: 96px;
  height: 40px;
  border-radius: 20px;
  background: #292c35;
  display: flex;
  align-items: center;
  position: relative;

  .title {
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    line-height: 16px;
    position: absolute;
    left: calc(100% - 50px);
    transition: 0.5s;
  }
  .ball {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    left: 4px;
    transition: 0.2s;
  }

  &.active {
    background: #e7290f;
  }
  &.active .ball {
    left: calc(100% - 36px);
  }
  &.active .title {
    left: 22px;
  }
`;
