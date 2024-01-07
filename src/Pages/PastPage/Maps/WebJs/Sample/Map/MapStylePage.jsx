import MapDesc from "components/MapDesc";
import React, { useState } from "react";
import styled from "styled-components";
import MapTitle from "../../../../../../components/MapTitle";

const code = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>지도 스타일 변경하기</title>
    <style>
      #map {
        width: 100%;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <button id="custom_style_btn">스타일 변경</button>
    <script>
      function initMap() {
        var map = new inavi.maps.Map({
          center: [127.110749, 37.402158],
          container: "map",
          zoom: 13,

		  // 지도 초기화 함수 옵션에 초기 스타일 적용시
		  // style: getStyleUrlByType('{styleURL}'}

        });
        document.querySelector("#custom_style_btn1").addEventListener("click", (e) => {
          map.setStyle("style1.json URL");
        });
        document.querySelector("#custom_style_btn2").addEventListener("click", (e) => {
          map.setStyle("style2.json URL");
        });
        document.querySelector("#custom_style_btn3").addEventListener("click", (e) => {
          map.setStyle("style3.json URL");
        });
      }
    </script>

	// 기본 Base 지도 스타일 인증 API
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>

  	// 스타일 초기 적용 인증 API
    //<script type="text/javascript" src="API인증URL&callback=initMap&styleID={styleID}"></script>


  </body>
</html>`;
const MapStylePage = () => {
  const [isClickBtn, setIsClickBtn] = useState(2);
  const buttons = [
    { id: "custom_style_btn1", title: "스타일1 변경" },
    { id: "custom_style_btn2", title: "스타일2 변경" },
    { id: "custom_style_btn3", title: "스타일3 변경" },
  ];

  // use map style

  return (
    <div className="container">
      <MapTitle before="지도" label="지도 스타일 변경하기" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              지도의 스타일을 변경할 수 있습니다.
              <br />
              하단의 버튼을 클릭하여 지도 스타일을 변경해 보세요. [Road, Satelltie, Hybrid]
            </>
          }
        />

        <div className="map-container">
          <div id="map"></div>
        </div>
        <div className="options">
          <>
            {buttons.map((item, index) => {
              return (
                <Button
                  key={item.id}
                  className={isClickBtn === index && "active"}
                  onClick={() => {
                    setIsClickBtn(index);
                  }}
                  id={item.id}
                >
                  {item.title}
                </Button>
              );
            })}
          </>
        </div>
        <pre className="code" id="code">
          <code className="html hljs xml">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default MapStylePage;

const Button = styled.button``;
