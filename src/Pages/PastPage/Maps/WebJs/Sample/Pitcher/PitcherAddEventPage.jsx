import MapDesc from "components/MapDesc";
import React from "react";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>피처 이벤트 등록하기</title>
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

      var infoWindow = new inavi.maps.InfoWindow({
        content: "정보창입니다",
      });

      function featureMouseEnterHandler(content, position) {
        infoWindow.setMap(map);
        infoWindow.setContent(content);
        infoWindow.setPosition(position);
      }

      circle.on("mouseenter", function(e) {
        featureMouseEnterHandler("원 입니다", e.lngLat);
      });
      circle.on("mouseout", function() {
        infoWindow.setMap();
      });

      polygon.on("mouseenter", function(e) {
        featureMouseEnterHandler("폴리곤 입니다", e.lngLat)
      });
      polygon.on("mousemove", function(e) {
        infoWindow.setPosition(e.lngLat);
      });
      polygon.on("mouseout", function() {
        infoWindow.setMap();
      });

      polyline.on("mouseenter", function(e) {
        featureMouseEnterHandler("폴리라인 입니다", e.lngLat)
      });
      polyline.on("mousemove", function(e) {
        infoWindow.setPosition(e.lngLat);
      });
      polyline.on("mouseout", function() {
        infoWindow.setMap();
      });

      label.on("mouseenter", function(e) {
        featureMouseEnterHandler("라벨 입니다", e.lngLat)
      });
      label.on("mouseout", function() {
        infoWindow.setMap();
      });
    }  
    </script>
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>
  </body>
</html>`;

const PitcherAddEventPage = () => {
  return (
    <div className="container">
      <MapTitle before="피처" label="피처 이벤트 등록하기" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              원, 폴리곤, 폴리라인, 라벨 등의 피처에 이벤트를 등록합니다. <br />
              피처 위로 마우스 커서를 올려 등록된 이벤트 정보창을 확인해보세요.
            </>
          }
        />

        <div className="map-container">
          <div id="map"></div>
        </div>
        <div className="options"></div>
        <pre className="code" id="code">
          <code className="html hljs xml">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default PitcherAddEventPage;
