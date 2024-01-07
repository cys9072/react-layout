import MapDesc from "components/MapDesc";
import { ICON } from "constant";
import React, { useState } from "react";
import styled from "styled-components";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Wizard</title>
    <style>
      #map {
        width: 100%;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>
  </body>
</html>`;

const OPTION_INIT = [
  {
    id: 1,
    title: "지도",
    content: [
      { id: 11, label: "드래그 이동" },
      { id: 12, label: "지도 이동" },
    ],
  },
  {
    id: 2,
    title: "마커",
    content: [
      { id: 21, label: "드래그 이동" },
      { id: 22, label: "마커 이동" },
    ],
  },
  {
    id: 3,
    title: "팝업",
    content: [
      { id: 31, label: "드래그 이동" },
      { id: 32, label: "팝업 이동" },
    ],
  },
  {
    id: 4,
    title: "피처",
    content: [
      { id: 41, label: "드래그 이동" },
      { id: 42, label: "피처 이동" },
    ],
  },
];
const ToggleMenu = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className="option-item">
      <button className="option-item--title-btn title" onClick={() => setIsActive((val) => !val)}>
        {data.title}
        <img src={ICON.RIGHT_ARR} alt="" />
      </button>
      {isActive && (
        <ul className="option-item__inner-list">
          {data &&
            data?.content.map((innerItem, innerIdx) => {
              return (
                <li className="inner-list" key={innerItem.id}>
                  <em className="border-box"></em>
                  <input type="checkbox" id={innerItem.id} />
                  <label htmlFor={innerItem.id}>{innerItem.label}</label>
                </li>
              );
            })}
        </ul>
      )}
    </li>
  );
};

const WizardPage = () => {
  return (
    <Container>
      <div className="container">
        <MapTitle label="API Wizard" />
        <div className="contents no-border">
          <MapDesc label={<>WEB(JS) 방식 MAPS API 주요 기능들을 간편하게 확인 할 수 있습니다. 상세한 내용은 기능별 SAMPLE과 DOCS를 참고하세요.</>} />

          <div className="map-container">
            <div id="map"></div>
          </div>
          <div className="options"></div>
          <pre className="code" id="code">
            <code className="html hljs xml">{code}</code>
          </pre>
        </div>
      </div>

      <OptionBar className="option-wrap">
        <p className="option--title title">옵션 선택</p>

        <ul className="option-list">
          {OPTION_INIT.map((item, index) => {
            return <ToggleMenu data={item} key={item.id} />;
          })}
        </ul>
      </OptionBar>
    </Container>
  );
};

export default WizardPage;

const Container = styled.div`
  display: flex;
`;

const OptionBar = styled.div`
  width: 300px;
  background: #f5f5f5;
  .title {
    font-size: 20px;
    font-weight: 700;
  }
  &.option-wrap {
    .option--title {
      padding: 54px 0px 22px 25px;
      text-align: left;
      border-bottom: 1px solid #e5e5e5;
    }

    .option-list {
      .option-item {
        padding: 25px 12px 30px 25px;
        border-bottom: 1px solid #e5e5e5;

        .option-item--title-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          & img {
            transform: rotateZ(90deg);
          }
        }
        .option-item__inner-list {
          margin-top: 20px;
        }

        &__inner-list {
          & .inner-list {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            position: relative;
          }
          & .inner-list:last-child {
            margin-bottom: 0px;
          }
        }
      }
    }
  }

  input[type="checkbox"] {
    appearance: none;
    position: absolute;
    left: 0;
    top: 3px;
    width: 18px;
    height: 18px;
    margin: 0;
    padding: 0;
    border: none;
  }
  .border-box {
    width: 18px;
    height: 18px;
    border: 1px solid #000;
  }
  input[type="checkbox"]:checked {
    background-color: #000;
    border-color: transparent;
    transition-delay: 0s;
    clip-path: polygon(28% 38%, 41% 53%, 75% 24%, 86% 38%, 40% 78%, 15% 50%);
  }
  label {
    margin-left: 5px;
  }
`;
