import React from "react";
import styled from "styled-components";

const CommentArea = ({ children }) => {
  return (
    <CommentAreaDiv className="comment-area">
      <p className="title">댓글</p>
      {children}
    </CommentAreaDiv>
  );
};

export default CommentArea;

const CommentAreaDiv = styled.div`
  &.comment-area {
    margin-bottom: 60px;
    & .title {
      font-size: 18px;
      font-weight: 700;
      padding-left: 26px;
      padding-bottom: 16px;
      margin-top: 24px;
      border-bottom: 1px solid #e5e5e5;
    }
  }
`;
