import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "components/Pagination";
import CommentInsert from "components/Comment/CommentInsert";
import CommentContainer from "components/Comment";
import CommentArea from "components/Comment/CommentArea";
import CommentList from "components/Comment/CommentList";

const MOCK_COMMENTS = [
  {
    id: 1,
    author: "개발초보",
    content: "말씀하신 이슈가 APFS 볼륨에서 재현되지 않는데요 사용하시는 파일 시스템에 대해 좀 더 알려주시겠어요?",
    child: [
      {
        id: 2,
        author: "유저2",
        content:
          "대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다",
        child: [],
      },
      {
        id: 4,
        author: "유저 3",
        content: "대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다 대댓글 입니다",
        child: [],
      },
    ],
  },
  {
    id: 3,
    state: "delete",
    author: "B",
    content: "댓글 내용 2",
    child: [],
  },
  {
    id: 4,
    author: "개발 초보",
    content: "댓글 내용 3",
    child: [],
  },
];

const INIT_MODAL = {
  open: false,
  state: "",
};

const MODAL_STATE = {
  DELETE: "delete",
  DELETE_COMPLETE: "delete-complete",
  EDIT: "edit",
  EDIT_COMPLETE: "edit-complete",
};

const CommunityDetailPage = () => {
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(INIT_MODAL);
  return (
    <>
      {isModal.open && (
        <div
          id="modal"
          className="modal"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsModal(INIT_MODAL);
            }
          }}
        >
          <div className="modal__overlay">
            <form>
              {/* <!-- 게시글 삭제 시 비밀번호 입력 팝업  --> */}
              {MODAL_STATE.DELETE === isModal.state && (
                <fieldset>
                  <div className="modal__inner">
                    <p className="modal__inner--title">게시글을 삭제하시겠습니까?</p>
                    <div className="modal__inner--content">
                      <input type="password" placeholder="비밀번호" />
                    </div>
                    <div className="modal__inner--btn-box">
                      <button type="button" className="bg-active delete-btn" onClick={() => setIsModal({ open: true, state: "delete-complete" })}>
                        삭제
                      </button>
                      <button type="button" className="cancel-btn" onClick={() => setIsModal(INIT_MODAL)}>
                        취소
                      </button>
                    </div>
                  </div>
                </fieldset>
              )}
              {/* <!-- 비밀번호 입룍 완료 후, 삭제 완료 팝업 --> */}
              {MODAL_STATE.DELETE_COMPLETE === isModal.state && (
                <fieldset>
                  <div className="modal__inner">
                    <p className="modal__inner--title">게시글이 삭제되었습니다</p>
                    <div className="modal__inner--btn-box">
                      <button type="button" className="cancel-btn bg-active" onClick={() => setIsModal(INIT_MODAL)}>
                        닫기
                      </button>
                    </div>
                  </div>
                </fieldset>
              )}
              {/* <!-- 게시글 수정 시 비밀번호 입력 팝업  --> */}
              {MODAL_STATE.EDIT === isModal.state && (
                <fieldset>
                  <div className="modal__inner">
                    <p className="modal__inner--title">게시글 수정을 위해 비밀번호를 입력해 주세요.</p>
                    <div className="modal__inner--content">
                      <input type="password" placeholder="비밀번호" />
                    </div>
                    <div className="modal__inner--btn-box">
                      <button type="button" className="bg-active edit-btn" onClick={() => navigate("/community/write")}>
                        확인
                      </button>
                      <button type="button" className="cancel-btn" onClick={() => setIsModal(INIT_MODAL)}>
                        취소
                      </button>
                    </div>
                  </div>
                </fieldset>
              )}
              {/* <!-- 비밀번호 입룍 완료 후, 수정 완료 팝업 --> */}
              {MODAL_STATE.EDIT_COMPLETE === isModal.state && (
                <fieldset>
                  <div className="modal__inner">
                    <p className="modal__inner--title">게시글 수정이 완료되었습니다.</p>
                    <div className="modal__inner--btn-box">
                      <button type="button" className="cancel-btn bg-active" onClick={() => setIsModal(INIT_MODAL)}>
                        닫기
                      </button>
                    </div>
                  </div>
                </fieldset>
              )}
            </form>
          </div>
        </div>
      )}
      <section className="community-detail">
        <div className="cont-box">
          <h2 className="border-none title-mb">커뮤니티</h2>

          <div className="detail-wrap">
            <div className="detail-header flex">
              <span className="detail-header--tag">API</span>
              <p className="detail-header--title">카카오 네비 연동 인증 실패 문의</p>
            </div>

            <div className="detail-content">
              <div className="detail-content__top">
                <p className="detail-content__top--nick-name">개발초보</p>
                <p className="detail-content__top--date">2023년 12월 13일</p>
              </div>
              {/* <!-- Editor Area --> */}
              <div className="detail-content__center">NaviView 사용 시 항상 Fragment안에 두어야 정상 적인 실행이 되네요. Fragment를 거치지 않은 사용시 아래와 같은 오류가 발생합니다.해결 방법이 있을까요?android.view.InflateException:Binary XML file line #15: Binary XML file line #15: Error inflating className com.kakaomobility.knsdk.ui.view.KNNaviView 문의 시 사용하시는 SDK 버전 정보를 알려주세요</div>

              <div className="edit-delete-box">
                <button onClick={() => setIsModal({ open: true, state: "edit" })}>수정</button>
                <button onClick={() => setIsModal({ open: true, state: "delete" })}>삭제</button>
              </div>
            </div>

            <Link className="btn-common" to="/community">
              목록으로
            </Link>
          </div>

          {/* <!-- 댓글, 대댓글 영역 --> */}
          <CommentContainer>
            {/* 최초 댓글 입력 */}
            <CommentInsert />

            <CommentArea>
              <CommentList comments={MOCK_COMMENTS} />
            </CommentArea>

            <Pagination />
          </CommentContainer>
        </div>
      </section>
    </>
  );
};

export default CommunityDetailPage;
