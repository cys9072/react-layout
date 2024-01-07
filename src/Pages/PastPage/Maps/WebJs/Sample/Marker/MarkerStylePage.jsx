import MapDesc from "components/MapDesc";
import React from "react";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>마커 스타일 설정하기</title>
    <style>
      #map {
        width: 100%;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <label htmlFor="opacity">투명도: </label>
    <input id="opacity" type="number" min="0" max="1" step="0.1" value="1"><br><br>
    <button id="red-Icon-Button">
    <img id="red-Icon" src="https://www.fivepin.co.kr/images/PoiMarker/marker_1_on.png">
    </button>
    <button id="orange-Icon-Button">
    <img id="orange-Icon" src="https://www.fivepin.co.kr/images/PoiMarker/marker_2_on.png">
    </button>
    <button id="yellow-Icon-Button">
    <img id="yellow-Icon" src="https://www.fivepin.co.kr/images/PoiMarker/marker_3_on.png">
    </button>
    <script>
    function initMap() {
      var map = new inavi.maps.Map({
        center: [127.110749, 37.402158],
        container: "map",
        zoom: 13,
      });

      var redIconButton = document.querySelector("#red-Icon-Button");
      var redIconUrl = document.querySelector("#red-Icon").src;

      var orangeIconButton = document.querySelector("#orange-Icon-Button");
      var orangeIconUrl = document.querySelector("#orange-Icon").src;

      var yellowIconButton = document.querySelector("#yellow-Icon-Button");
      var yellowIconUrl = document.querySelector("#yellow-Icon").src;

      redIconButton.addEventListener("click", function() {
        marker.setIcon("<img src = " + redIconUrl + ">");
      });

      orangeIconButton.addEventListener("click", function() {
        marker.setIcon("<img src = " + orangeIconUrl + ">");
      });

      yellowIconButton.addEventListener("click", function() {
        marker.setIcon("<img src = " + yellowIconUrl + ">");
      });

      var marker = new inavi.maps.Marker({
        map: map,
        position: map.getCenter(),
        icon: redIconUrl,
      });

      document.querySelector("#opacity").addEventListener("change", function(e) {
        marker.setOpacity(e.target.value);
      });
    }  
    </script>
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>
  </body>
</html>`;

const MarkerStylePage = () => {
  return (
    <div className="container">
      <MapTitle before="마커" label="마커 스타일 설정하기" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              마커의 투명도를 변경할 수 있습니다. 하단의 투명도를 조정하여 마커의 투명도를 변경해 보세요.
              <br />
              마커의 이미지를 변경할 수 있습니다. 하단의 버튼을 클릭하여 마커의 이미지를 변경해 보세요.
            </>
          }
        />

        <div className="map-container">
          <div id="map"></div>
        </div>
        <div className="options">
          <label htmlFor="opacity">투명도: </label>
          {/* <input id="opacity" type="number" min=0 max=1 step=0.1 value=1/><br/><br/> */}
          <input id="opacity" type="number" min={0} max={1} step={0.1} defaultValue={1} />
          <br />
          <br />
          <button className="marker-style-button active" id="red-Icon-Button">
            {<img id="red-Icon" src="https://www.fivepin.co.kr/resources/images/PoiMarker/marker_1_on.png" alt="marker icon" />}
          </button>
          <button className="marker-style-button" id="orange-Icon-Button">
            {<img id="orange-Icon" src="https://www.fivepin.co.kr/resources/images/PoiMarker/marker_2_on.png" alt="marker icon" />}
          </button>
          <button className="marker-style-button" id="yellow-Icon-Button">
            {<img id="yellow-Icon" src="https://www.fivepin.co.kr/resources/images/PoiMarker/marker_3_on.png" alt="marker icon" />}
          </button>
        </div>
        <pre className="code" id="code">
          <code className="html hljs xml">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default MarkerStylePage;
