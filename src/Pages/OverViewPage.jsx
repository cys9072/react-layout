import React, { useState } from "react";
import styled from "styled-components";

const OverViewPage = () => {
  const mapNavigate = [
    { id: 1, header_title: "PC와 Mobile을 아우르는 지도정보 서비스 개발 도구 지원", btn_label: "지도 주요 기능" },
    { id: 2, header_title: "신속 + 정확 + 유용 = 아이나비 지도정보 검색", btn_label: "통합 검색" },
    { id: 3, header_title: "스마트한 경로 탐색 기능", btn_label: "경로 검색" },
    { id: 4, header_title: "부드럽고 선명한 고성능 정적 지도 (Static Map)", btn_label: "Static Map" },
  ];
  const [isClickBtn, setIsClickBtn] = useState(0);

  return (
    <OverViewSection>
      <div className="cont-box">
        <h2>{mapNavigate[isClickBtn].header_title}</h2>
        <div className="flex-box">
          <div className="editor-area">
            <div className="new-editor-area"></div>
          </div>
          <div className="map-navigation-area">
            {mapNavigate.map((btn_item, btn_index) => {
              return (
                <button key={btn_item.id} type="button" className={`map-btn ${isClickBtn === btn_index ? "active" : ""}`} onClick={() => setIsClickBtn(btn_index)}>
                  {btn_item.btn_label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </OverViewSection>
  );
};

export default OverViewPage;
const OverViewSection = styled.section`
  & .flex-box {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .editor-area {
      width: 80%;
      max-width: 1200px;
    }

    .map-navigation-area {
      width: 17%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-top: 45px;

      .map-btn {
        margin-bottom: 14px;
        color: #979797;
        font-weight: 400;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        padding-left: 15px;
      }
      .map-btn.active::before {
        content: "";
        display: block;
        width: 3px;
        height: 12px;
        background: #37352f;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0, -50%);
      }
      .map-btn.active {
        color: #333;
        font-weight: 700;
      }
    }
  }
`;
