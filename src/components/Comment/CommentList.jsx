import { ICON } from "constant";
import React, { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";
import CommentInsert from "./CommentInsert";

const INIT_STATE = {
  COMMENT_OPEN: "open",
  COMMENT_EDIT_FORM: "form",
  COMMENT_INSERT_FORM: "insert",
  COMMENT_DELETE: "delete",
};

const Comment = ({ data, children }) => {
  const [commentState, setCommentState] = useState("open");
  const [isClickDelete, setIsClickDelete] = useState(true);
  const [isClickReply, setIsClickReply] = useState(false);
  // 수정 버튼 클릭 시
  const CommentEditForm = () => {
    return (
      <form>
        <fieldset>
          <legend>댓글 수정</legend>
          <div className="edit-form">
            <label htmlFor="">댓글 수정을 위해 비밀번호를 입력 해주세요.</label>
            <input type="password" placeholder="비밀번호" />
            <div className="confirm-btn-area">
              {/* XXX:: 해당 취소 버튼은 기획에 없으나, 수정버튼 이후 되돌릴 방법이 없어서 임시로 넣었습니다. 개발시 삭제핵도 무방 하나, ux적으로 필요하지 않나 싶습니다. */}
              <button className="btn-common cancel" type="button" onClick={() => setCommentState("open")}>
                취소
              </button>
              <button className="btn-common confirm" type="button" onClick={() => setCommentState("insert")}>
                확인
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    );
  };

  // 수정 버튼 클릭 후 , 비밀번호 체크 끝난 뒤
  const CommentEditInsert = () => {
    return (
      <form>
        <fieldset>
          <legend>댓글 수정 입력</legend>
          <div className="edit-form edit-form--insert">
            <ReactTextareaAutosize defaultValue="기존 댓글 내용이 들어갑니다." cacheMeasurements />
            <button onClick={() => setCommentState("open")} className="btn-common">
              수정
            </button>
          </div>
        </fieldset>
      </form>
    );
  };
  return (
    <CommentItem className="comment-item">
      {/* 최초 댓글 오픈 (해당 부분은 임시로 조건을 걸어 놓은거라 개발 시 변경 하시면 됩니다.) */}
      {INIT_STATE.COMMENT_OPEN === commentState && (
        <>
          <div className="info-top">
            <p className="p_1">{data.author}</p>
            <span>2023년 12월 13일</span>
          </div>
          <ReactTextareaAutosize className="comment-contents" defaultValue={data.content} cacheMeasurements />
          {/* <textarea readOnly className="comment-contents" defaultValue={data.content} /> */}
          <div className="comment-controller">
            {isClickDelete && (
              <>
                <button className="reply-toggle-btn" onClick={() => setIsClickReply((val) => !val)}>
                  <img src={ICON.REPLY_ARR} alt="꺽인 화살표 이미지 답글 버튼" /> 답글
                  {/* TODO:: 해당 답글 갯수도 개발에 참고 용으로 넣어놓은것 뿐이니 개발 하시고, 갯수 부분은 삭제 하셔도 됩니다 */}
                  {/* {data.child.length > 0 ? data.child.length : 0} */}
                </button>

                <div className="edit-area">
                  <button onClick={() => setCommentState("form")}>수정</button>
                  <button onClick={() => setIsClickDelete(false)}>삭제</button>
                </div>
              </>
            )}
            {!isClickDelete && (
              <form>
                <fieldset>
                  <legend>삭제 폼</legend>

                  <div className="edit-form edit-form--delete">
                    <input type="password" placeholder="비밀번호" />
                    <button className="btn-common" onClick={() => setIsClickDelete(true)}>
                      삭제
                    </button>
                  </div>
                </fieldset>
              </form>
            )}
          </div>
        </>
      )}
      {/* 수정 버튼 클릭 시 */}
      {INIT_STATE.COMMENT_EDIT_FORM === commentState && <CommentEditForm />}
      {/* 비밀번호 입력 후 댓글 수정 폼 */}
      {INIT_STATE.COMMENT_INSERT_FORM === commentState && <CommentEditInsert />}
      {/* TODO:: 댓글이 삭제 되었을떄 상태 (해당 부분은 추가로 조건을 넣으시면 됩니다.) */}
      {/* {true && <div className="edit-form edit-form--delete-state">삭제 된 댓글 입니다.</div>} */}
      {isClickReply && (
        <>
          {/* true => 맞는 조건의 state로 덮어씌우면 됩니다 */}
          {true && <CommentInsert />}
          {children}
        </>
      )}
    </CommentItem>
  );
};

const CommentList = ({ comments, childClassName }) => {
  return (
    <div className={childClassName}>
      {comments.map((commentItem) => (
        <Comment key={commentItem.id} data={commentItem}>
          {commentItem.child.length > 0 && <CommentList comments={commentItem.child} childClassName={"reply"} />}
        </Comment>
      ))}
    </div>
  );
};

export default CommentList;

const CommentItem = styled.div`
  width: 100%;
  .p_1 {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    max-width: 75%;
  }
  & .info-top {
    padding: 20px 0px 16px 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #979797;
    font-weight: 700;
    & span {
      font-weight: 500;
    }
  }
  textarea.comment-contents {
    margin-bottom: 46px;
    padding-left: 20px;
    width: 100%;
    border: none;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
    font-size: 16px;
  }
  textarea.comment-contents:focus {
    outline: none;
  }
  .comment-controller {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    padding-left: 20px;
    padding-bottom: 28px;

    & .reply-toggle-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      background: #f5f5f5;
      color: #979797;
      padding: 4px 10px;
      border-radius: 4px;
      & img {
        margin-right: 5px;
      }
    }
  }

  .edit-form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #fbfbfb;
    padding-top: 60px;
    & label {
      font-weight: 400;
      margin-bottom: 24px;
    }

    .confirm-btn-area {
      margin-left: auto;
      display: flex;
    }
    & button {
      padding: 14px 30px;
      font-size: 18px;
      border-radius: 0px 0px 4px 0px;
      width: 94px;
      height: 48px;
      white-space: nowrap;
    }
    & button.cancel {
      margin-right: 10px;
      border-radius: 0px 0px 0px 4px;
    }

    &--insert {
      padding: 13px 20px;
      textarea {
        width: 100%;
        min-height: 100px;
        padding: 13px;
        font-family: "Noto Sans KR", sans-serif;
        outline: none;
      }

      & button {
        margin-left: auto;
        margin-top: 10px;
      }
    }

    &--delete {
      padding: 0px 0px 0px 20px;
      flex-direction: row;
      color: #979797;
      & button {
        margin-left: auto;
      }
    }

    &--delete-state {
      padding: 72px 20px 72px 20px;
      color: #979797;
    }
  }

  & .reply {
    .info-top,
    .comment-contents {
      padding-left: 45px;
    }
    .edit-area {
      margin-left: auto;
    }

    .reply-toggle-btn {
      display: none;
    }

    .edit-form--delete-state {
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }
`;
