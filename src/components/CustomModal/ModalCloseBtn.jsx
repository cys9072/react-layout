import React from "react";
import { useOutletContext } from "react-router";
import styled from "styled-components";

const ModalCloseBtn = () => {
  const [, setModalState] = useOutletContext();
  return (
    <CloseBtn className="close" type="button " onClick={() => setModalState(false)}>
      ×
    </CloseBtn>
  );
};

export default ModalCloseBtn;

const CloseBtn = styled.button``;
