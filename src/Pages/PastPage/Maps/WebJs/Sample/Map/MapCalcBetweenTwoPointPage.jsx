import MapDesc from "components/MapDesc";
import React, { useState } from "react";
import styled from "styled-components";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>지점 간 거리 계산</title>
    <style>
      #map {
        width: 100%;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
   
    <script>
    function initMap() {
      var map = new inavi.maps.Map({
        center: [127.110749, 37.402158],
        container: "map",
        zoom: 13,
        disableDefaultUI: true,
      });

     
    }  
    </script>
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>
  </body>
</html>`;
const MapCalcBetweenTwoPointPage = () => {
  const [isClickBtn, setIsClickBtn] = useState(null);
  const buttons = [{ id: "calc-between", title: "두 지점거리 계산하기" }];
  return (
    <div className="container">
      <MapTitle before="지도" label="지점 간 거리 계산" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              지도 상에 특정한 두 지점 사이의 거리를 계산하여 표현합니다.
              <br />두 지점을 특정하고 거리를 계산해 보세요.
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
          <div className="options--text">
            두 지점 간의 거리 <span id="center">37.123123123123</span>
          </div>
        </div>
        <pre className="code" id="code">
          <code className="html hljs xml">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default MapCalcBetweenTwoPointPage;
const Button = styled.button`
  margin-bottom: 26px !important;
`;
