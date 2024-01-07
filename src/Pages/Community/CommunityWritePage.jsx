import React, { useState } from "react";
const CommunityWritePage = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      {isModal && (
        <div
          id="modal"
          className="modal"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsModal(false);
            }
          }}
        >
          <div className="modal__overlay">
            <div className="modal__inner">
              <p className="modal__inner--title">게시글이 등록되었습니다.</p>
              <div className="modal__inner--btn-box">
                <button type="button" className="cancel-btn bg-active" onClick={() => setIsModal(false)}>
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <section>
        <div className="cont-box">
          <h2 className="border-none">커뮤니티</h2>
          <form>
            <fieldset>
              <legend>커뮤니티에 글 등록 폼</legend>
              <div className="write-wrap">
                <div className="write-head">
                  <select className="write-head--select" required>
                    <option value="">카테고리</option>
                    <option value="MAP">MAP</option>
                    <option value="API">API</option>
                    <option value="SDK">SDK</option>
                    <option value="기타">기타</option>
                  </select>
                  <input className="write-head--title" type="text" placeholder="글 제목" />
                </div>
                <div className="write-content">
                  <textarea className="write-content--content" placeholder="글 내용을 입력하세요."></textarea>
                </div>

                <div className="write-info">
                  <div className="write-info__user-info">
                    <input type="text" placeholder="닉네임" />
                    <input type="password" placeholder="비밀번호" />
                  </div>
                  <button className="btn-common write-submit-btn" type="button" onClick={() => setIsModal(true)}>
                    등록하기
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
};

export default CommunityWritePage;
