import MapDesc from "components/MapDesc";
import React from "react";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>마커 이동하기</title>
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
        zoom: 13,
      });

      var marker = new inavi.maps.Marker({
        map: map,
        position: map.getCenter(),
      });

      map.on("click", function(e) {
        marker.setPosition(e.lngLat);
      });
    }  
    </script>
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>
  </body>
</html>`;

const MarkerMovePage = () => {
  return (
    <div className="container">
      <MapTitle before="마커" label="마커 이동하기" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              지도의 특정 지점을 클릭하면 해당 위치로 마커가 이동합니다.
              <br />
              마커를 이동해 보세요.
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

export default MarkerMovePage;
