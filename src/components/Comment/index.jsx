import React from "react";
import styled from "styled-components";

const CommentContainer = ({ children }) => {
  return <Container className="comment-wrap">{children}</Container>;
};

export default CommentContainer;

const Container = styled.div``;
