import MapDesc from "components/MapDesc";
import React from "react";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>POI 검색 기능</title>
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

const DaterSearchPoiPage = () => {
  return (
    <div className="container">
      <MapTitle before="데이터" label="POI 검색 기능" />
      <div className="contents no-border">
        <MapDesc label={<>키워드 데이터에 따라 POI를 검색할 수 있습니다.</>} />

        <div className="map-container">
          <div id="map"></div>
        </div>
        <div className="options">
          <button>POI 검색 실행</button>
        </div>
        <pre className="code" id="code">
          <code className="html hljs xml">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default DaterSearchPoiPage;
