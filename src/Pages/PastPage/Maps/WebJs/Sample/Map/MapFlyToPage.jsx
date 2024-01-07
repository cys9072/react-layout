import MapDesc from "components/MapDesc";
import React, { useState } from "react";
import styled from "styled-components";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>지정한 좌표로 날아가기</title>
    <style>
      #map {
        width: 100%;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <button id="fly">이동</button>
    <script>
    function initMap() {
      var map = new inavi.maps.Map({
        center: [127.110749, 37.402158],
        container: "map",
        zoom: 13
      });
      var coordinates = [{
        title: "성남시청",
        coordinates: [127.126838, 37.419667],
        zoom: 16
      }, {
        title: "판교역",
        coordinates: [127.111104, 37.394657],
        zoom: 16
      }, {
        title: "팅크웨어",
        coordinates: [127.110749, 37.402158],
        zoom: 14
      }];

      var index = 0;
      document.querySelector("#fly").addEventListener("click", function() {
        map.flyTo(coordinates[index].coordinates, {
          zoom: coordinates[index].zoom
        });
        index = ++index % coordinates.length;
      });
    }  
    </script>
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>
  </body>
</html>`;
const MapFlyToPage = () => {
  const [isClickBtn, setIsClickBtn] = useState(null);
  const buttons = [{ id: "fly", title: "이동" }];
  return (
    <div className="container">
      <MapTitle before="지도" label="지도 이동하기 / 지정 좌표 날아가기" />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              마우스와 키보드를 이용해 지도를 이동할 수 있습니다. 마우스 드래그&드롭으로 지도를 이동합니다. 키보드 방향키로 지도를 이동합니다.
              <br />
              하단의 버튼을 클릭하면 지정한 좌표로 지도의 중심과 시점이 날아가듯 부드럽게 이동됩니다. 지도를 이동해 보세요.
            </>
          }
        />

        <div className="map-container">
          <div id="map"></div>
        </div>
        <div className="options">
          <>
            {buttons.map((item, index) => {
              return (
                <Button
                  key={item.id}
                  className={isClickBtn === index && "active"}
                  onClick={() => {
                    setIsClickBtn(index);
                  }}
                  id={item.id}
                >
                  {item.title}
                </Button>
              );
            })}
          </>
        </div>
        <pre className="code" id="code">
          <code className="html hljs xml">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default MapFlyToPage;
const Button = styled.button``;
