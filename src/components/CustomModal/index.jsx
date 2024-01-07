import React, { useEffect } from "react";
import { useOutletContext } from "react-router";
import styled from "styled-components";
import CountMenu from "./CountMenu";
import DropDownMenu from "./DropDownMenu";
import ModalCloseBtn from "./ModalCloseBtn";
import SlideToggleBtn from "./SlideToggleBtn";

const CustomModal = ({ label, options, requestParameters, responseCode, countLabel, otherCountLabel, searchOption, disableRequest, disableResult, disableResponse }) => {
  const [modalState, setModalState] = useOutletContext();

  useEffect(() => {}, []);

  document.addEventListener("keydown", function (e) {
    if (e.code === "Escape") setModalState(false);
  });
  useEffect(() => {
    let overlayElement = document.querySelector("#overlay");
    let requestParameterTableOnPopup = overlayElement.querySelector(".cont-list-sample-box");
    let parameterHead = requestParameterTableOnPopup.querySelectorAll("table tr td:first-child");
    let inputs = requestParameterTableOnPopup.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].setAttribute("data-key", parameterHead[i].innerText);
    }

    let tempData = {
      poiid: "717788",
      query: "판교",
      coordtype: "1",
      coordType: "1",
      startposition: "0",
      reqcount: "0",
      admcode: "4113510800",
      posX: "127.110749",
      posY: "37.402158",
      x: "209737.32",
      y: "433346.19",
      mode: "3",
      depth: "0",
      spopt: "1",
      catecode: "130600",
      x1: "127.110474",
      y1: "37.402158",
      x2: "127.5331944",
      y2: "37.402461",
      sortopt: "1",

      startX: "127.110513",
      startY: "37.402027",
      endX: "127.103957",
      endY: "37.334855",
      option: "real_traffic",
      // coordType: "wgs84",
      useAngle: "false",
      angle: "0",
      via1X: "127.109600",
      via1Y: "37.392037",
      via2X: "127.108075",
      via2Y: "37.368495",
      carType: "1",
      guideTop: "5",
      groupByTrafficColor: "false",
      type: "start",
      year: "2021",
      month: "11",
      day: "01",
      hour: "12",
      minutes: "30",
      useTrafficColor: "true",
      beforeCount: "2",
      afterCount: "2",
      interval: "15",
      useTaxifare: "0",
      useStartDirection: "false",
      searchByAddress: "false",
      usageType: "0",
      orderby: "1",
      resultCount: "2",

      mapVersion: "20200031",
      mapType: "0",
      passCnt: "1",

      lon: "127.111236",
      lat: "37.394767",
      zoom: "14",
      bearing: "112",
      pitch: "60",
      width: "400",
      height: "400",
      // x2: "1",
      mx: "127.111255",
      my: "37.395374",
      imgUrl: "http://web2.fivepin.co.kr/resources/images/MyStory/marker_plog_around_center.png",
    };
    for (let i = 0, keys = Object.keys(tempData), len = keys.length; i < len; i++) {
      if (requestParameterTableOnPopup.querySelector("[data-key=" + keys[i] + "]")) {
        overlayElement.querySelector("[data-key=" + keys[i] + "]").placeholder = "ex)" + tempData[keys[i]];
      }
    }
  }, []);

  return (
    <OverLay
      id="overlay"
      className={`${modalState ? "active" : ""}`}
      onClick={(e) => {
        // This function turn off the modal when the user click this Dimmed area.
        // 딤드(불투명한 검정색상의 영역)클릭 시, 모달이 꺼집니다.
        if (e.target === e.currentTarget) setModalState(false);
      }}
    >
      <ModalContainer className="result-popup-wrap">
        <ResultHeader className="result-header">
          <h3 className="result-title">{label}</h3>
          <ModalCloseBtn />
          <div className="result-btn">
            <div className="result-btn__left-side">
              <SlideToggleBtn label="실행하기" />
              <div style={{ display: "flex", alignItems: "flex-end", flexDirection: "column", gap: "10px" }}>
                {countLabel && <CountMenu countLabel={countLabel} />}
                {otherCountLabel && <CountMenu countLabel={otherCountLabel} />}
              </div>
              {searchOption && <DropDownMenu searchOption={searchOption} />}
              {/* Option area */}
              {options}
            </div>
            <div className="result-btn__right-side">
              {!disableRequest && <SlideToggleBtn label="Request" />}
              {!disableResult && <SlideToggleBtn label="Result" />}
              {!disableResponse && <SlideToggleBtn label="Response" />}
            </div>
          </div>
        </ResultHeader>

        <InnerContent className="section-box">
          <div className="modal-content">
            <div className="left-side">
              <div className="section">
                <div className="cont-table">
                  <div className="title">Request Parameters</div>
                  <div className="cont-list-sample-box">{requestParameters}</div>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="section">
                <div className="title">Result</div>
                <div className="map-container">
                  {disableResponse && <>좌측 테이블 입력란에 유효한 Parameter 를 입력하면 Static Map 이 Load 됩니다. </>}
                  {/* 지도 영역 */}
                  <div id="map"></div>
                </div>
              </div>
              {!disableResponse && (
                <div className="section">
                  <div className="title">Response</div>
                  <div className="sample-source">
                    <pre className="code" id="code">
                      <code className="json">{responseCode}</code>
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </InnerContent>
      </ModalContainer>

      {/* <div className="editor-layout-buttons">
                              <button className="three-section-grid on"></button>
                              <button className="two-section-grid"></button>
                            </div> */}
    </OverLay>
  );
};

export default CustomModal;

const OverLay = styled.div`
  &#overlay {
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    & .result-popup-wrap {
      position: initial;
      top: initial;
      right: initial;
      bottom: initial;
      left: initial;
      width: initial;
      height: initial;
      padding: initial;
      transform: initial;
      box-shadow: initial;
      background: #f5f7f9;
      border: 1px solid #ececec;
      z-index: 5;
      width: 95%;
      height: 95%;
      padding: 2%;

      display: flex;
      flex-direction: column;
      align-items: stretch;

      & .result-header {
        top: initial;
        & .result-title {
          position: initial;
          padding-bottom: 9px;
          margin-bottom: 40px;
          border-bottom: 1px solid #000;
          transform: initial;
          text-align: left;
          font-size: 24px;
        }

        & .result-btn {
          position: initial;
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 25px;
          padding: 0px 0px 20px 0px;
          &__left-side,
          &__right-side {
            flex: 1;
            display: flex;
            align-items: center;
          }

          &__left-side {
            justify-content: space-between;
            gap: 32px;
          }
          &__right-side {
            justify-content: flex-end;
            gap: 32px;
          }

          & .dropdown-wrap .dropdown .dropdown-menu.active {
            display: block;
          }
          & .dropdown-wrap .dropdown:after {
            transition: 0.4s;
            transform: rotateZ(0deg);
            border-top: 6px solid #292c35;
          }
          & .dropdown-wrap .dropdown.active:after {
            transform: rotateZ(180deg);
          }
        }

        & .close {
          right: 0;
          top: 0;
        }
      }
      & .section-box {
        flex: 1;
        overflow: hidden;
        border: none;
        background: transparent;
      }
      & .section-box .section {
        width: 100%;
        float: initial;
        overflow-y: hidden;
        box-sizing: initial;
        width: 100%;
        display: flex;
        align-items: stretch;
        flex-direction: column;
        & .title {
          margin: 0;
          color: #fff;
          text-align: center;
          font-weight: 500;
          line-height: 20px;
          background: #222833;
          font-size: 15px;
          padding: 10px 0px;
        }

        & .sample-source,
        & .map-container {
          overflow-y: auto;
        }

        & .cont-list-sample-box {
          position: initial;
          border: 1px solid #e5e5e5;
          background: #fff;
          margin-top: 8px;
          padding: 9px 5px;
          & table {
            margin: 0px;
            width: 100%;

            thead tr {
              background: #dddddd;
            }
            td,
            th {
              border-right: 1px solid #e5e5e5;
              font-size: 14px;
            }
            th:last-child,
            td:last-child {
              border-right: none;
            }
          }
        }
        & .map-container {
          position: relative;
          top: initial;
          left: initial;
          right: initial;
          bottom: initial;
          width: 100%;
          height: 100%;
          padding: 0px;
          border: none;
          margin-top: 8px;
          background: grey;
          & #map {
            height: auto;
            border: none;
          }
        }
        & .sample-source {
          flex: 1;
          position: initial;
          left: 0;
          border: none;
          padding-left: 0;
          padding-right: 0;
          padding-bottom: 0;
          & #code {
            display: block;
            width: 100%;
            resize: none;
          }
        }
        & .cont-table {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: stretch;
          flex-direction: column;
        }
      }
      & result-header .result-btn {
        position: relative;
        width: 100%;
      }
    }
  }
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5000;
  display: flex;
  align-items: center;
  justify-content: center;

  &#overlay.active {
    display: flex;
  }
`;
const ResultHeader = styled.div``;
const ModalContainer = styled.div``;
const InnerContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
    margin-bottom: 40px;
  }

  .modal-content {
    width: 100%;
    height: 100%;
    max-height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 25px;
    overflow: hidden;

    & .left-side,
    & .right-side {
      flex: 1;
    }

    .content-item {
      height: 100%;
      max-height: 100%;
      background: powderblue;
      overflow: auto;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      &--title {
        background: #292c35;
        text-align: center;
        padding: 8px 0px;
        color: #fff;
        margin-bottom: 8px;
        border: 1px solid #292c35;
      }
      &--content {
        height: 2000px;
        flex: 1;
        overflow-y: auto;
        border: 1px solid #e5e5e5;
      }
    }

    .right-side {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 25px;
    }
  }
`;
