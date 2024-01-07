import MapDesc from "components/MapDesc";
import React from "react";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>마커 애니메이션</title>
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

const MarkerAnimation = () => {
  return (
    <div className="container">
      <MapTitle before="마커" label="마커 애니메이션" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              지도 위로 마커에 대한 다양한 애니메이션 효과를 표현합니다.
              <br />
              하단의 버튼을 클릭하여 다양한 애니메이션 효과를 확인해 보세요.
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

export default MarkerAnimation;
