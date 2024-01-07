import MapDesc from "components/MapDesc";
import React, { useState } from "react";
import styled from "styled-components";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>피처 이동 인터렉션 ON/OFF 하기</title>
    <style>
      #map {
        width: 100%;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <button id="circleDraggable">원 드래그허용</button>
    <button id="circleInDraggable">원 드래그금지</button>
    <button id="polylineDraggable">폴리라인 드래그허용</button>
    <button id="polylineInDraggable">폴리라인 드래그금지</button>
    <button id="polygonDraggable">폴리곤 드래그허용</button>
    <button id="polygonInDraggable">폴리곤 드래그금지</button>
    <button id="labelDraggable">라벨 드래그허용</button>
    <button id="labelInDraggable">라벨 드래그금지</button>
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

      var label = new inavi.maps.Label({
        map: map,
        position: [127.110567, 37.408473],
        text: "커스텀 라벨입니다",
      });

      document.querySelector("#circleDraggable").addEventListener("click", function() {
        circle.setDraggable(true);
      });
      document.querySelector("#circleInDraggable").addEventListener("click", function() {
        circle.setDraggable(false);
      });
      document.querySelector("#polygonDraggable").addEventListener("click", function() {
        polygon.setDraggable(true);
      });
      document.querySelector("#polygonInDraggable").addEventListener("click", function() {
        polygon.setDraggable(false);
      });
      document.querySelector("#polylineDraggable").addEventListener("click", function() {
        polyline.setDraggable(true);
      });
      document.querySelector("#polylineInDraggable").addEventListener("click", function() {
        polyline.setDraggable(false);
      });
      document.querySelector("#labelDraggable").addEventListener("click", function() {
        label.setDraggable(true);
      });
      document.querySelector("#labelInDraggable").addEventListener("click", function() {
        label.setDraggable(false);
      });
    }  
    </script>
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>
  </body>
</html>`;

const PitcherInteractionPage = () => {
  const [isClickBtn, setIsClickBtn] = useState(0);
  const buttons = [
    { id: "circleDraggable", title: "원 이동허용" },
    { id: "circleInDraggable", title: "원 이동금지" },
    { id: "polylineDraggable", title: "폴리라인 이동허용" },
    { id: "polylineInDraggable", title: "폴리라인 이동금지" },
    { id: "polygonDraggable", title: "폴리곤 이동허용" },
    { id: "polygonInDraggable", title: "폴리곤 이동금지" },
    { id: "labelDraggable", title: "라벨 이동허용" },
    { id: "labelInDraggable", title: "라벨 이동금지" },
  ];
  return (
    <div className="container">
      <MapTitle before="피처" label="피처 이동 인터렉션 ON/OFF 하기" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              피처의 드래그&드롭 이동에 대한 인터렉션을 ON/OFF 할 수 있습니다. <br />
              하단의 버튼을 클릭해 피처의 이동을 ON/OFF 해보세요.
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

export default PitcherInteractionPage;

const Button = styled.button``;
