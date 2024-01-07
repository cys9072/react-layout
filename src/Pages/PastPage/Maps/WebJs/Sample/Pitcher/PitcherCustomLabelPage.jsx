import MapDesc from "components/MapDesc";
import React, { useState } from "react";
import styled from "styled-components";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>라벨 컨텐츠 설정하기</title>
    <style>
      #map {
        width: 100%;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <label for="text">라벨 컨텐츠: </label>
    <input id="text" value="커스텀 라벨입니다">
    <script>
    function initMap() {
      var map = new inavi.maps.Map({
        center: [127.110749, 37.402158],
        container: "map",
        zoom: 13,
      });

      var label = new inavi.maps.Label({
        map: map,
        position: [127.110749, 37.402158],
        text: "커스텀 라벨입니다",
      });

      document.querySelector("#text").addEventListener("keyup", function(e) {
        label.setText(e.target.value);
      });
    }  
    </script>
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>
  </body>
</html>`;

const PitcherCustomLabelPage = () => {
  return (
    <div className="container">
      <MapTitle before="피처" label="라벨 컨텐츠 설정하기" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              라벨 컨텐츠를 설정할 수 있습니다. <br />
              하단의 창에 텍스트를 입력해 라벨 컨텐츠를 변경해 보세요.
            </>
          }
        />

        <div className="map-container">
          <div id="map"></div>
        </div>
        <div className="options">
          <label htmlFor="text">라벨 컨텐츠: </label>
          <input id="text" defaultValue="커스텀 라벨입니다" />
        </div>
        <pre className="code" id="code">
          <code className="html hljs xml">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default PitcherCustomLabelPage;
