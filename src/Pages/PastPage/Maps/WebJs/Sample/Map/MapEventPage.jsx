import MapDesc from "components/MapDesc";
import React from "react";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>지도 이벤트 등록하기</title>
    <style>
      #map {
        width: 100%;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    지도의 중심 좌표는 <span id="center">[]</span> 입니다.
    <script>
    function initMap() {
      var map = new inavi.maps.Map({
        center: [127.110749, 37.402158],
        container: "map",
        zoom: 13
      });

      var textArea = document.querySelector("#center");
      map.on("move", function(e) {
        var center = e.target.getCenter();
        textArea.innerText = '[' + center.lng + ', ' + center.lat + ']';
      });
    }  
    </script>
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>
  </body>
</html>`;
const MapEventPage = () => {
  return (
    <div className="container">
      <MapTitle before="지도" label="지도 이벤트 등록하기" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              지도에 이벤트를 등록할 수 있습니다.
              <br />
              이벤트 등록 예제를 참고해 보세요. 마우스 드래그&드롭으로 지도를 이동하면 이벤트로 지도의 중심 좌표와 줌 레벨을 표시하여 줍니다.
            </>
          }
        />

        <div className="map-container">
          <div id="map"></div>
        </div>
        <div className="options">
          <div className="options--text">
            지도의 중심 좌표는 <span id="center">[]</span> 입니다.
          </div>
        </div>
        <pre className="code" id="code">
          <code className="html hljs xml">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default MapEventPage;
