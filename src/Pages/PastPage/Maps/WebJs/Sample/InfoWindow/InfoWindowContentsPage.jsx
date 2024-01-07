import MapDesc from "components/MapDesc";
import React from "react";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>정보창 컨텐츠 설정하고 이동하기</title>
    <style>
      #map {
        width: 100%;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <label for="contents">정보창 컨텐츠: </label>
    <input id="contents" value="정보창입니다">
    <script>
    function initMap() {
      var map = new inavi.maps.Map({
        center: [127.110749, 37.402158],
        container: "map",
        zoom: 13,
      });

      var infoWindow = new inavi.maps.InfoWindow({
        map: map,
        position: map.getCenter(),
        content: "<div style='background-color:white'>정보창입니다</div>",
      });

      document.querySelector("#contents").addEventListener("keyup", function(e) {
        infoWindow.setContent("<div style='background-color:white'>" + e.target.value + "</div>");
      });

      map.on("click", function(e) {
        infoWindow.setPosition(e.lngLat);
      });
    }  
    </script>
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>
  </body>
</html>`;

const InfoWindowContentsPage = () => {
  return (
    <div className="container">
      <MapTitle before="팝업" label="정보창 컨텐츠 설정하고 이동하기" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              정보창의 컨텐츠를 설정할 수 있습니다.
              <br />
              하단의 창에 텍스트를 입력하여 정보창 내용을 변경하고, 지도 위 클릭한 지점으로 정보창을 이동해 보세요.
            </>
          }
        />

        <div className="map-container">
          <div id="map"></div>
        </div>
        <div className="options">
          <label for="contents">정보창 컨텐츠: </label>
          <input id="contents" defaultValue="정보창입니다" />
        </div>
        <pre className="code" id="code">
          <code className="html hljs xml">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default InfoWindowContentsPage;
