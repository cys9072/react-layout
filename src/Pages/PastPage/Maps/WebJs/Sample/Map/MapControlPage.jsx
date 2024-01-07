import MapDesc from "components/MapDesc";
import React, { useState } from "react";
import styled from "styled-components";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>지도 컨트롤 제어하기</title>
    <style>
      #map {
        width: 100%;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <button id="remove-zoom">확대/축소 컨트롤 제거</button>
    <button id="add-zoom">확대/축소 컨트롤 추가</button>
    <button id="remove-compass">나침반 컨트롤 제거</button>
    <button id="add-compass">나침반 컨트롤 추가</button>
    <button id="remove-scale">로고 및 축척막대 제거</button>
    <button id="add-scale">로고 및 축척막대 추가</button>
    <script>
    function initMap() {
      var map = new inavi.maps.Map({
        center: [127.110749, 37.402158],
        container: "map",
        zoom: 13,
        disableDefaultUI: true,
      });

      var zoomControl = new inavi.maps.ZoomControl();
      var compassControl = new inavi.maps.CompassControl();
      var logoScaleControl = new inavi.maps.LogoScaleControl();

      document.querySelector("#remove-zoom").addEventListener("click", function() {
        zoomControl.remove();
      });

      document.querySelector("#add-zoom").addEventListener("click", function() {
        zoomControl.addTo(map);
      });

      document.querySelector("#remove-compass").addEventListener("click", function() {
        compassControl.remove();
      });

      document.querySelector("#add-compass").addEventListener("click", function() {
        compassControl.addTo(map);
      });

      document.querySelector("#remove-scale").addEventListener("click", function() {
        logoScaleControl.remove();
      });

      document.querySelector("#add-scale").addEventListener("click", function() {
        logoScaleControl.addTo(map);
      });
    }  
    </script>
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>
  </body>
</html>`;
const MapControlPage = () => {
  const [isClickBtn, setIsClickBtn] = useState(0);
  const buttons = [
    { id: "remove-zoom", title: "확대/축소 컨트롤러 제거" },
    { id: "add-zoom", title: "확대/축소 컨트롤러 추가" },
    { id: "remove-compass", title: "나침반 컨트롤러 제거" },
    { id: "add-compass", title: "나침반 컨트롤러 추가" },
    { id: "remove-scale", title: "로고 및 스케일 제거" },
    { id: "add-scale", title: "로고 및 스케일 추가" },
  ];
  return (
    <div className="container">
      <MapTitle before="지도" label="지도 컨트롤러, 로고, 스케일 ON/OFF 하기" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              지도 상에 표시되는 지도 컨트롤러와 로고 및 스케일(축적자)을 ON/OFF 할 수 있습니다.
              <br />
              하단의 버튼을 클릭하여 각각의 기능을 ON/OFF 해 보세요.
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

export default MapControlPage;
const Button = styled.button``;
