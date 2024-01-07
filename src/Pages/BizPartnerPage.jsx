import React from "react";
import { ICON, IMG } from "constant";
import AutoSlider from "components/AutoSlider";
import AutoSliderPartner from "components/AutoSliderPartner";
const BizPartner = () => {
  return (
    <section className="full-section">
      <div className="cont-box">
        <h2>BIZ 파트너</h2>
        <div className="biz-wrap">
          <div className="biz-box">
            <p className="title">서비스 사용사례</p>
            <div className="flex-box use-case">
              <div className="flex-item">
                <div className="flex-item__img-box">
                  <img src={ICON.SERVICE_01} alt="" />
                </div>
                <p>물류/운송</p>
              </div>
              <div className="flex-item">
                <div className="flex-item__img-box">
                  <img src={ICON.SERVICE_02} alt="" />
                </div>
                <p>딜리버리/모빌리티</p>
              </div>
              <div className="flex-item">
                <div className="flex-item__img-box">
                  <img src={ICON.SERVICE_03} alt="" />
                </div>
                <p>네비게이션/대리운전</p>
              </div>
              <div className="flex-item">
                <div className="flex-item__img-box">
                  <img src={ICON.SERVICE_04} alt="" />
                </div>
                <p>긴급출동</p>
              </div>
              <div className="flex-item">
                <div className="flex-item__img-box">
                  <img src={ICON.SERVICE_05} alt="" />
                </div>
                <p>차량/위치 관제</p>
              </div>
            </div>
          </div>
          <div className="biz-box">
            <p className="title">서비스 레퍼런스</p>
            <div className="flex-box reference">
              <div className="flex-item">
                <div className="flex-item__img-box">
                  <img src={ICON.REFERENCE} alt="" />
                </div>
                <p>자율주행 수요 응답에 최적화된 서비스 제공 기업자율주행 수요 응답에 최적화된 서비스 제공 기업</p>
              </div>
              <div className="flex-item">
                <div className="flex-item__img-box">
                  <img src={ICON.REFERENCE} alt="" />
                </div>
                <p>자율주행 수요 응답에 최적화된 서비스 제공 기업자율주행 수요 응답에 최적화된 서비스 제공 기업</p>
              </div>
              <div className="flex-item">
                <div className="flex-item__img-box">
                  <img src={ICON.REFERENCE} alt="" />
                </div>
                <p>자율주행 수요 응답에 최적화된 서비스 제공 기업자율주행 수요 응답에 최적화된 서비스 제공 기업</p>
              </div>
              <div className="flex-item">
                <div className="flex-item__img-box">
                  <img src={ICON.REFERENCE} alt="" />
                </div>
                <p>자율주행 수요 응답에 최적화된 서비스 제공 기업자율주행 수요 응답에 최적화된 서비스 제공 기업</p>
              </div>
              <div className="flex-item">
                <div className="flex-item__img-box">
                  <img src={ICON.REFERENCE} alt="" />
                </div>
                <p>자율주행 수요 응답에 최적화된 서비스 제공 기업자율주행 수요 응답에 최적화된 서비스 제공 기업</p>
              </div>
              <div className="flex-item">
                <div className="flex-item__img-box">
                  <img src={ICON.REFERENCE} alt="" />
                </div>
                <p>자율주행 수요 응답에 최적화된 서비스 제공 기업자율주행 수요 응답에 최적화된 서비스 제공 기업</p>
              </div>
              <div className="flex-item">
                <div className="flex-item__img-box">
                  <img src={ICON.REFERENCE} alt="" />
                </div>
                <p>자율주행 수요 응답에 최적화된 서비스 제공 기업자율주행 수요 응답에 최적화된 서비스 제공 기업</p>
              </div>
              <div className="flex-item">
                <div className="flex-item__img-box">
                  <img src={ICON.REFERENCE} alt="" />
                </div>
                <p>자율주행 수요 응답에 최적화된 서비스 제공 기업자율주행 수요 응답에 최적화된 서비스 제공 기업</p>
              </div>
              <div className="flex-item">
                <div className="flex-item__img-box">
                  <img src={ICON.REFERENCE} alt="" />
                </div>
                <p>자율주행 수요 응답에 최적화된 서비스 제공 기업자율주행 수요 응답에 최적화된 서비스 제공 기업</p>
              </div>
            </div>
          </div>
          <div className="biz-box">
            <p className="title">주요 파트너사</p>
            <AutoSliderPartner />
            <div className="auto-slide-area">
              <AutoSlider />
            </div>
          </div>
          <div className="biz-box family-site">
            <div className="family-site__inner">
              <p className="title">Family Site</p>
              <div className="link-box">
                <a href="/" className="link-box--link">
                  <img src={IMG.ADD_BANNER_04} alt="" />
                </a>
                <a href="/" className="link-box--link">
                  <img src={IMG.ADD_BANNER_03} alt="" />
                </a>
                <a href="/" className="link-box--link">
                  <img src={IMG.ADD_BANNER_02} alt="" />
                </a>
                <a href="/" className="link-box--link">
                  <img src={IMG.ADD_BANNER_01} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BizPartner;
