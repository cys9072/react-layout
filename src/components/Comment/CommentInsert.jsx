import React from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";

const CommentInsert = () => {
  return (
    <CommentInsertForm className="comment-insert">
      <form>
        <fieldset>
          <legend>최초 댓글 입력 폼</legend>
          <div className="comment-insert">
            <div className="comment--user-info">
              <input type="text" placeholder="닉네임" />
              <input type="password" placeholder="비밀번호" />
            </div>

            <div className="comment--text-insert">
              <ReactTextareaAutosize placeholder="댓글을 입력해 주세요." defaultValue="" cacheMeasurements />
            </div>
            <button type="submit" className="btn-common comment--submit-btn">
              등록
            </button>
          </div>
        </fieldset>
      </form>
    </CommentInsertForm>
  );
};

export default CommentInsert;
const CommentInsertForm = styled.div`
  width: 100%;
  padding: 15px 19px;
  background: #fbfbfb;
  .comment {
    &--user-info {
      margin-bottom: 10px;
      & input::placeholder {
        color: #979797;
      }
    }
    &--text-insert {
      margin-bottom: 10px;
      & textarea {
        width: 100%;
        min-height: 140px;
        padding: 13px;
        font-family: "Noto Sans KR", sans-serif;
        border: none;
      }
      & textarea::placeholder {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 16px;
        color: #979797;
      }
    }
    &--submit-btn {
      width: 140px;
      height: 42px;
      font-size: 18px;
      margin-left: auto;
    }
  }
`;
