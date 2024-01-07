import MapDesc from "components/MapDesc";
import React from "react";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>클러스터 이벤트 등록하기</title>
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

      var randomPoints = [
        {lat: 37.392679, lng: 127.089033},
        {lat: 37.399430, lng: 127.092467},
        {lat: 37.397316, lng: 127.103024},
        {lat: 37.404271, lng: 127.106629},
        {lat: 37.398203, lng: 127.118130},
        {lat: 37.394043, lng: 127.102595},
        {lat: 37.399703, lng: 127.101221},
        {lat: 37.397112, lng: 127.126627},
        {lat: 37.407680, lng: 127.130404},
        {lat: 37.404544, lng: 127.110663},
        {lat: 37.392748, lng: 127.142592},
        {lat: 37.406044, lng: 127.147312},
        {lat: 37.404885, lng: 127.124739},
        {lat: 37.396021, lng: 127.133064},
        {lat: 37.404067, lng: 127.146197},
        {lat: 37.398680, lng: 127.133150},
        {lat: 37.411089, lng: 127.149716},
        {lat: 37.414157, lng: 127.119761},
        {lat: 37.408566, lng: 127.108431},
        {lat: 37.397453, lng: 127.102281},
        {lat: 37.401748, lng: 127.092925},
        {lat: 37.409862, lng: 127.112237},
        {lat: 37.413748, lng: 127.085286},
        {lat: 37.398816, lng: 127.094470},
        {lat: 37.391660, lng: 127.119494},
        {lat: 37.395547, lng: 127.135372},
        {lat: 37.387978, lng: 127.147131},
        {lat: 37.397661, lng: 127.158976},
        {lat: 37.413342, lng: 127.154942},
        {lat: 37.397456, lng: 127.123184},
        {lat: 37.401752, lng: 127.104645},
        {lat: 37.409933, lng: 127.095804},
        {lat: 37.400184, lng: 127.100525},
        {lat: 37.404411, lng: 127.120695},
        {lat: 37.396911, lng: 127.119064},
        {lat: 37.396502, lng: 127.104559},
        {lat: 37.406252, lng: 127.107134},
        {lat: 37.408024, lng: 127.126446},
      ];

      var markers = randomPoints.map(function(point) {
        return new inavi.maps.Marker({
          position: point,
        });
      });

      var markerCluster = new inavi.maps.MarkerClusterer(map, markers);
      markerCluster.on("click", function(e) {
        map.flyTo(e.lngLat, {
          zoom: map.getZoom() + 1,
          duration: 1000,
        });
      });
    }  
    </script>
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>
  </body>
</html>`;

const MarkerClusterEventPage = () => {
  return (
    <div className="container">
      <MapTitle before="마커" label="클러스터 이벤트 등록하기" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              클러스터 이벤트를 등록할 수 있습니다. <br />
              클러스터를 클릭해보세요. 지도가 클릭한 클러스터를 중심으로 포커싱 됩니다.
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

export default MarkerClusterEventPage;
