import React from "react";
import { Link } from "react-router-dom";
const NoticeDetail = () => {
  return (
    <section>
      <div className="cont-box">
        <h2 className="border-none title-mb">공지사항</h2>

        <div className="detail-wrap">
          <div className="detail-header">
            <p className="detail-header--title">책 검색 API 스펙변경안내 (변경일정:23년 7월22일)</p>
            <p className="detail-header--date">2023년 12월 13일</p>
          </div>

          {/* <!-- Editor Area --> */}

          <div className="new-editor-area"></div>

          <Link className="btn-common" to="/notice">
            목록으로
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoticeDetail;
