import MapDesc from "components/MapDesc";
import React from "react";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>피처 생성하기</title>
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
        center: [127.093958, 37.401644],
        container: "map",
        zoom: 13,
      });

      var circle = new inavi.maps.Circle({
        map: map,
        position: [127.110749, 37.402158],
        radius: 0.5,
        style: {
          fillOpacity: 0.7,
          fillColor: "#F20554",
          fillOutlineColor: "#DB4455",
        },
      });

      var polygon = new inavi.maps.Polygon({
        map: map,
        path: [
          [127.083712, 37.410439],
          [127.097960, 37.410439],
          [127.097960, 37.404371],
          [127.083712, 37.404371],
          [127.083712, 37.410439],
        ],
        style: {
          fillOpacity: 0.8,
          fillColor: "#4772F9",
          fillOutlineColor: "#031B80",
        },
      });

      var multiPolygon = new inavi.maps.Polygon({
        map: map,
        path: [
          [
            {lat: 37.400244274886, lng: 127.069292031503},
            {lat: 37.390015837233, lng: 127.068176232549},
            {lat: 37.389265696868, lng: 127.086029015756},
            {lat: 37.401607961106, lng: 127.08748813746},
          ],
          [
            {lat: 37.397312265476, lng: 127.073240243175},
            {lat: 37.392061636424, lng: 127.073583565925},
            {lat: 37.391447902529, lng: 127.082338296146},
            {lat: 37.398130512197, lng: 127.081479989271},
          ],
        ],
        style: {
          fillOpacity: 0.8,
          fillColor: "#55DD55",
          fillOutlineColor: "#55DD55",
        },
      });

      var polyline = new inavi.maps.Polyline({
        map: map,
        path: [
          [127.092982, 37.398985],
          [127.097616, 37.392711],
          [127.108689, 37.392916],
          [127.093067, 37.398934],
        ],
        style: {
          lineColor: "#FF1E00",
          lineWidth: 8,
          lineDasharray: [1, 1],
        },
      });

      var label = new inavi.maps.Label({
        map: map,
        position: [127.110567, 37.408473],
        text: "커스텀 라벨입니다",
      });
    }  
    </script>
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>
  </body>
</html>`;

const CreatePitcherPage = () => {
  return (
    <div className="container">
      <MapTitle before="피처" label="피처 생성하기" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              원, 폴리곤, 폴리라인, 라벨 등 피처를 생성하여 지도에 표시합니다. <br />
              지도에 여러가지 피처를 생성해 보세요.
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

export default CreatePitcherPage;
