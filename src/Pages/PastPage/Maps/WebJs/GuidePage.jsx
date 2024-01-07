import React from "react";
import { Link } from "react-router-dom";

const GuidePage = () => {
  return (
    <section>
      <div className="cont-box">
        <h2>WEB(JS) 소개</h2>
        <div className="billing-warp">
          <div className="new-editor-area"></div>
          <div className="billing-link-box">
            <Link to="https://www.nhncloud.com/kr/service/application-service/maps" className="btn-common calc-link guide" target="_blank">
              NHN Cloud Maps
              <br />
              <strong>상품안내</strong>
            </Link>
            <Link to="https://docs.nhncloud.com/ko/Application%20Service/Maps/ko/Overview/" className="btn-common buy-link guide" target="_blank">
              NHN CLOUD MAPS SERVICE
              <br />
              <strong> 가이드 링크</strong>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidePage;
