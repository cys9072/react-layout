import MapDesc from "components/MapDesc";
import React, { useState } from "react";
import styled from "styled-components";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>피처 스타일 설정하기</title>
    <style>
      #map {
        width: 100%;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <label htmlFor="circleColor">원 색상: </label>
    <input id="circleColor" type="color" value="#F20554">
    <label htmlFor="polygonColor">폴리곤 색상: </label>
    <input id="polygonColor" type="color" value="#4772F9">
    <label htmlFor="polylineColor">폴리라인 색상: </label>
    <input id="polylineColor" type="color" value="#FF1E00">
    <label htmlFor="labelColor">라벨 색상: </label>
    <input id="labelColor" type="color" value="#000000">
    <script>
    function initMap() {
      var map = new inavi.maps.Map({
        center: [127.102766, 37.401576],
        container: "map",
        zoom: 13,
      });

      var circle = new inavi.maps.Circle({
        map: map,
        position: [127.110749, 37.402158],
        radius: 0.5,
        style: {
          fillOpacity: 0.7,
          fillColor: "#F20554",
          fillOutlineColor: "#DB4455",
        },
      });

      document.querySelector("#circleColor").addEventListener("change", function(e) {
        circle.setStyle({
          fillOpacity: 0.7,
          fillColor: e.target.value,
          fillOutlineColor: e.target.value,
        });
      });

      var polygon = new inavi.maps.Polygon({
        map: map,
        path: [
          [127.083712, 37.410439],
          [127.097960, 37.410439],
          [127.097960, 37.404371],
          [127.083712, 37.404371],
          [127.083712, 37.410439],
        ],
        style: {
          fillOpacity: 0.8,
          fillColor: "#4772F9",
          fillOutlineColor: "#031B80",
        },
      });

      document.querySelector("#polygonColor").addEventListener("change", function(e) {
        polygon.setStyle({
          fillOpacity: 0.8,
          fillColor: e.target.value,
          fillOutlineColor: e.target.value,
        });
      });

      var polyline = new inavi.maps.Polyline({
        map: map,
        path: [
          [127.092982, 37.398985],
          [127.097616, 37.392711],
          [127.108689, 37.392916],
          [127.093067, 37.398934],
        ],
        style: {
          lineColor: "#FF1E00",
          lineWidth: 8,
          lineDasharray: [1, 1],
        },
      });

      document.querySelector("#polylineColor").addEventListener("change", function(e) {
        polyline.setStyle({
          lineColor: e.target.value,
          lineWidth: 8,
          lineDasharray: [1, 1],
        });
      });

      var label = new inavi.maps.Label({
        map: map,
        position: [127.110567, 37.408473],
        text: "커스텀 라벨입니다",
      });

      document.querySelector("#labelColor").addEventListener("change", function(e) {
        label.setStyle({
          textColor: e.target.value,
        });
      });
    }  
    </script>
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>
  </body>
</html>`;

const PitcherStylePage = () => {
  return (
    <div className="container">
      <MapTitle before="피처" label="피처 스타일 설정하기" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              생성된 피처(원, 폴리곤, 폴리라인, 라벨)의 색상을 변경할 수 있습니다. <br />
              하단의 버튼을 클릭해 피처의 색상을 변경해 보세요.
            </>
          }
        />

        <div className="map-container">
          <div id="map"></div>
        </div>
        <div className="options">
          <label htmlFor="circleColor">원 색상: </label>
          <input id="circleColor" type="color" defaultValue="#F20554" style={{ marginRight: "20px" }} />
          <label htmlFor="polygonColor">폴리곤 색상: </label>
          <input id="polygonColor" type="color" defaultValue="#4772F9" style={{ marginRight: "20px" }} />
          <label htmlFor="polylineColor">폴리라인 색상: </label>
          <input id="polylineColor" type="color" defaultValue="#FF1E00" style={{ marginRight: "20px" }} />
          <label htmlFor="labelColor">라벨 색상: </label>
          <input id="labelColor" type="color" defaultValue="#000000" />
        </div>
        <pre className="code" id="code">
          <code className="html hljs xml">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default PitcherStylePage;

const Button = styled.button``;
