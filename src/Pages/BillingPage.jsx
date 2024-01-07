import React from "react";
import { Link } from "react-router-dom";

const BillingPage = () => {
  return (
    <section>
      <div className="cont-box">
        <h2>요금제</h2>
        <div className="billing-warp">
          <div className="new-editor-area"></div>
          <div className="billing-link-box">
            <Link to="https://www.nhncloud.com/kr/pricing/calculator?c=application-service&s=maps&r=KR1" className="btn-common calc-link" target="_blank">
              요금제 계산하기
            </Link>
            <Link to="https://www.toast.com/kr/service/application-service/maps" className="btn-common buy-link" target="_blank">
              구매하기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillingPage;
