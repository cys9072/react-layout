import MapDesc from "components/MapDesc";
import React from "react";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>접속위치 기반 마커와 정보창 표현하기</title>
    <style>
      #map {
        width: 100%;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>
  </body>
</html>`;

const MarkerConnectLocationPage = () => {
  return (
    <div className="container">
      <MapTitle before="마커" label="접속위치 기반 마커와 정보창 표현하기" />
      <div className="contents no-border">
        <MapDesc label={<>Geolocation을 통해 확인된 접속 위치를 기반으로 지도 상의 해당 위치에 마커와 정보창을 표현합니다.</>} />

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

export default MarkerConnectLocationPage;
