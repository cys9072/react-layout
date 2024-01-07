import { ICON } from "constant";
import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <img src={ICON.FOOTER_LOGO} alt="inavi logo" />
      <section className="info-section">
        <div className="info-section__item">
          <p>
            주소 <span></span> 경기도 성남시 분당구 판교역로 240 (삼평동 678) 삼환하이펙스 A동 8층
          </p>
        </div>
        <div className="info-section__item">
          <p>
            Contact <span></span> <a href="tel:02-589-9610">02-589-9610</a>&nbsp;/&nbsp; <a href="mailto:biz@inavi.kr">biz@inavi.kr</a>
          </p>
        </div>
      </section>
      <p className="copy-text">© iNavi Systems Corp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
