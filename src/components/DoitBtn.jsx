import React from "react";
import { useOutletContext } from "react-router";
import styled from "styled-components";

const DoitBtn = () => {
  const [, setModalState] = useOutletContext();
  return (
    <Button className="result-box" type="button" onClick={() => setModalState(true)}>
      직접 해보기
    </Button>
  );
};

export default DoitBtn;
const Button = styled.button`
  &.result-box {
    padding: 11px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e7290f;
    border-radius: 24px;
    color: #fff;
    font-size: 16px;
    margin: 0 0 60px 0;
  }
`;
