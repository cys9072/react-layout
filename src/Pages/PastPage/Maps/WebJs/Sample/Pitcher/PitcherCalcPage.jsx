import MapDesc from "components/MapDesc";
import React from "react";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>다각형 면적 계산</title>
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

const PitcherCalcPage = () => {
  return (
    <div className="container">
      <MapTitle before="피처" label="다각형 면적 계산" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              지도 위 특정한 지점들을 기준으로 다각형을 생성하고 면적을 계산하여 표시합니다.
              <br />
              마우스를 클릭해 지도 위에 다각형을 그려보세요. 다각형의 면적 정보를 확인할 수 있습니다
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

export default PitcherCalcPage;
