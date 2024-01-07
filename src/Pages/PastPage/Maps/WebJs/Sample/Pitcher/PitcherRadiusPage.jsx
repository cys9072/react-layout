import MapDesc from "components/MapDesc";
import styled from "styled-components";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>원 반경 설정하기</title>
    <style>
      #map {
        width: 100%;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <label htmlFor="size">반경: </label>
    <input type="number" step="0.1" id="size" value="0.5">
    <script>
    function initMap() {
      var center = [127.110749, 37.402158];
      var map = new inavi.maps.Map({
        center: center,
        container: "map",
        zoom: 13,
      });

      var circle = new inavi.maps.Circle({
        map: map,
        position: center,
        radius: 0.5,
        style: {
          fillOpacity: 0.7,
          fillColor: "#F20554",
          fillOutlineColor: "#DB4455",
        },
      });

      document.querySelector("#size").addEventListener("change", function(e) {
        circle.setRadius(e.target.value);
      });
    }  
    </script>
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>
  </body>
</html>`;

const PitcherRadiusPage = () => {
  return (
    <div className="container">
      <MapTitle before="피처" label="원 반경 설정하기" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              원의 반경을 설정할 수 있습니다.
              <br />
              하단의 창에 숫자를 입력해 원의 반경을 변경해 보세요.
            </>
          }
        />

        <div className="map-container">
          <div id="map"></div>
        </div>
        <div className="options">
          <label htmlFor="size">반경: </label>
          <input type="number" step={0.1} id="size" defaultValue={0.5} />
        </div>
        <pre className="code" id="code">
          <code className="html hljs xml">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default PitcherRadiusPage;

const Button = styled.button``;
