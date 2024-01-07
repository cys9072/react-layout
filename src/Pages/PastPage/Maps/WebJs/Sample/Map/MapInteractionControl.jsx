import MapDesc from "components/MapDesc";
import React, { useState } from "react";
import styled from "styled-components";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>지도 인터렉션 제어하기</title>
    <style>
      #map {
        width: 100%;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <button id="disable-zoom">확대/축소 끄기</button>
    <button id="enable-zoom">확대/축소 켜기</button>
    <button id="disable-drag">드래그 이동 끄기</button>
    <button id="enable-drag">드래그 이동 켜기</button>
    <button id="disable-rotate">회전 끄기</button>
    <button id="enable-rotate">회전 켜기</button>
    <script>
    function initMap() {
      var map = new inavi.maps.Map({
        center: [127.110749, 37.402158],
        container: "map",
        zoom: 13
      });

      document.querySelector("#disable-zoom").addEventListener("click", function() {
        map.setZoomable(false);
      });
      document.querySelector("#enable-zoom").addEventListener("click", function() {
        map.setZoomable(true);
      });
      document.querySelector("#disable-drag").addEventListener("click", function() {
        map.setDraggable(false);
      });
      document.querySelector("#enable-drag").addEventListener("click", function() {
        map.setDraggable(true);
      });
      document.querySelector("#disable-rotate").addEventListener("click", function() {
        map.setRotatable(false);
      });
      document.querySelector("#enable-rotate").addEventListener("click", function() {
        map.setRotatable(true);
      });
    }  
    </script>
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>
  </body>
</html>
`;
const MapInteractionControl = () => {
  const [isClickBtn, setIsClickBtn] = useState(0);
  const buttons = [
    { id: "disable-zoom", title: "확대/축소 끄기" },
    { id: "enable-zoom", title: "확대/축소 켜기" },
    { id: "disable-drag", title: "드래그 이동 끄기" },
    { id: "enable-drag", title: "드래그 이동 켜기" },
    { id: "disable-rotate", title: "회전 끄기" },
    { id: "enable-rotate", title: "회전 켜기" },
  ];

  return (
    <div className="container">
      <MapTitle before="지도" label="지도 인터렉션 ON/OFF 하기" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              지도의 이동과 회전, 확대와 축소를 조절하는 인터렉션 기능을 필요에 따라 ON/OFF 할 수 있습니다.
              <br />
              하단의 버튼을 클릭하여 각각의 인터렉션을 ON/OFF 해 보세요.
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

export default MapInteractionControl;

const Button = styled.button``;
