import MapDesc from "components/MapDesc";
import React from "react";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>리버스 지오코딩</title>
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

const DaterReverseGeoCodingPage = () => {
  return (
    <div className="container">
      <MapTitle before="데이터" label="리버스 지오코딩" />
      <div className="contents no-border">
        <MapDesc label={<>좌표 데이터를 받아 좌표에 해당하는 주소를 변환하여 표출합니다.</>} />

        <div className="map-container">
          <div id="map"></div>
        </div>
        <div className="options">
          <button>리버스 지오코딩 실행</button>
        </div>
        <pre className="code" id="code">
          <code className="html hljs xml">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default DaterReverseGeoCodingPage;
