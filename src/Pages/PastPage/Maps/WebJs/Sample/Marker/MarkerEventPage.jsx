import MapDesc from "components/MapDesc";
import React from "react";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>마커 이벤트 등록하기</title>
    <style>
      #map {
        width: 100%;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    마커의 좌표는 <span id="position"></span> 입니다.
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
        draggable: true,
      });

      var textArea = document.querySelector("#position");

      marker.on("drag", function(e) {
        var position = e.lngLat;
        textArea.innerText = '[' + position.lng + ', ' + position.lat + ']';
      });
    }  
    </script>
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>
  </body>
</html>`;

const MarkerEventPage = () => {
  return (
    <div className="container">
      <MapTitle before="마커" label="마커 이벤트 등록하기" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              마커에 이벤트를 등록합니다.
              <br />
              마커를 특정 위치로 드래그&드롭 이동하여 마커에 등록된 이벤트(좌표정보 표시)를 확인해 보세요.
            </>
          }
        />

        <div className="map-container">
          <div id="map"></div>
        </div>
        <div className="options">
          <div className="options--text">
            마커의 좌표는 <span id="position">[]</span> 입니다.
          </div>
        </div>
        <pre className="code" id="code">
          <code className="html hljs xml">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default MarkerEventPage;
