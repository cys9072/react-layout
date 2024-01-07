import MapDesc from "components/MapDesc";
import React from "react";
import MapTitle from "../../../../../../components/MapTitle";

const code = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>지도 생성하기</title>
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
        center: [127.110749, 37.402158],
        container: "map",
        zoom: 13
      });
    }  
    </script>
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>
  </body>
</html>
`;
const MapCreatePage = () => {
  return (
    <div className="container">
      <MapTitle before="지도" label="지도 생성하기" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              일반 지도를 생성할 수 있습니다.
              <br />
              예제를 참고하여 지도를 생성해 보세요.
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

export default MapCreatePage;
