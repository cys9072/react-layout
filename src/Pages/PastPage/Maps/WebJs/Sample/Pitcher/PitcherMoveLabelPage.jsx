import MapDesc from "components/MapDesc";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>라벨 이동하기</title>
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
      let map = new inavi.maps.Map({
        center: [127.110749, 37.402158],
        container: "map",
        zoom: 13,
      });

      var label = new inavi.maps.Label({
        map: map,
        position: [127.110749, 37.402158],
        text: "커스텀 라벨입니다",
      });

      map.on("click", function(e) {
        label.setPosition(e.lngLat);
      });
    }  
    </script>
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>
  </body>
</html>`;

const PitcherMoveLabelPage = () => {
  return (
    <div className="container">
      <MapTitle before="피처" label="라벨 이동하기" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              지도 위 클릭한 지점으로 라벨을 이동합니다.
              <br />
              등록된 라벨을 이동해 보세요.
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

export default PitcherMoveLabelPage;
