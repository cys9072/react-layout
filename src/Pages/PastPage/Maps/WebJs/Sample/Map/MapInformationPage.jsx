import MapDesc from "components/MapDesc";
import React, { useState } from "react";
import styled from "styled-components";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>지도 정보 표현하기</title>
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
const MapInformationPage = () => {
  const [isClickBtn, setIsClickBtn] = useState(null);
  const buttons = [{ id: "map-info", title: "지도 정보 얻어오기" }];
  return (
    <div className="container">
      <MapTitle before="지도" label="지도 정보 표현하기" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              지도의 현재 레벨과 중심좌표, 영역정보를 표현합니다.
              <br />
              하단의 정보보기 버튼을 클릭하여 지도의 현재 정보를 확인해 보세요.
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
            지도의 현재 중심좌표는<span id="center">37.123123123123123123123123123123123123</span>
          </div>
        </div>
        <pre className="code" id="code">
          <code className="html hljs xml">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default MapInformationPage;
const Button = styled.button`
  margin-bottom: 26px !important;
`;
