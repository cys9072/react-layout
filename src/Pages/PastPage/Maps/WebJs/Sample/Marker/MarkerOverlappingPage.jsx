import MapDesc from "components/MapDesc";
import React from "react";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>겹친 마커 얻기</title>
    <style>
      #map {
        width: 100%;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script src="https://cdn.jsdelivr.net/npm/@turf/turf@5.1.6/turf.min.js"></script>
    <script>
    var markers = [];
    var infoWindow;
    var map;

    function initMap() {
      map = new inavi.maps.Map({
        center: [127.1107, 37.4022],
        container: "map",
        zoom: 18,
      });

      markers = [
        new inavi.maps.Marker({
          position: [127.1107, 37.4022],
          map: map,
        }), new inavi.maps.Marker({
          position: [127.11075, 37.40223],
          map: map,
        }), new inavi.maps.Marker({
          position: [127.11080, 37.40226],
          map: map,
        })
      ];

      markers.forEach(function(marker) {
        marker.on("mouseover", function(e) {
          var overlappedMarkers = getOverlappedMarkers(map, markers, e.target);
          displayInfoWindow(map, e.target, overlappedMarkers);
        });
        marker.on("mouseout", function(e) {
          hideInfoWindow();
        });
      });

      infoWindow = new inavi.maps.InfoWindow({
        map: map,
        offset: [0, -47],
        content: "겹친 마커 수: " + markers.length,
      });
    }

    function getOverlappedMarkers(map, markers, targetMarker) {
      var targetMarkerPolygon;
      var overlapMarkers = [];

      var markersExtentPolygon = markers.map(function(marker, idx) {
        var pixelPosition = marker.getPosition().convertToPixel(map);
        var markerIcon = marker.getIcon();
        var width = markerIcon.clientWidth;
        var height = markerIcon.clientHeight;
        var turfPolygon = turf.bboxPolygon([
          pixelPosition.x - width / 2, pixelPosition.y - height / 2,
          pixelPosition.x + width / 2, pixelPosition.y + height / 2
        ]);

        if (marker === targetMarker) {
          overlapMarkers.push(marker);
          targetMarkerPolygon = turfPolygon;
        }

        return turfPolygon;
      });

      markersExtentPolygon.forEach(function(polygon, idx) {
        if (turf.booleanOverlap(targetMarkerPolygon, polygon)) {
          overlapMarkers.push(markers[idx]);
        }
      })

      return overlapMarkers;
    }

    function displayInfoWindow(map, marker, markers) {
      marker.setInfoWindow(infoWindow);
      infoWindow.setContent("겹친 마커 수: " + markers.length);
      infoWindow.setMap(map);
    }

    function hideInfoWindow() {
      infoWindow.setMap();
    }  
    </script>
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>
  </body>
</html>`;

const MarkerOverlappingPage = () => {
  return (
    <div className="container">
      <MapTitle before="마커" label="겹쳐진 마커의 개수 탐지" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              겹쳐진 마커의 개수를 탐지합니다.
              <br />
              마커에 마우스를 올려 보세요. 겹쳐진 마커의 개수를 확인할 수 있습니다.
            </>
          }
        />

        <div className="map-container">
          <div id="map"></div>
        </div>
        <div className="options" style={{ display: "none" }}>
          &lt;script src="https://cdn.jsdelivr.net/npm/@turf/turf@5.1.6/turf.min.js"&gt;&lt;/script&gt;
        </div>
        <pre className="code" id="code">
          <code className="html hljs xml">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default MarkerOverlappingPage;
