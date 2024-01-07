import MapDesc from "components/MapDesc";
import React from "react";
import MapTitle from "../../../../../../components/MapTitle";

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>커스텀 정보창 생성하기</title>
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

      var CustomInfoWindow = new inavi.maps.CustomInfoWindow({
        map: map,
        position: map.getCenter(),
        content: [
          '<div class="inavi-popup-tip"></div>',
            '<div class="inavi-popup-content" style="padding:0;">',
              '<button class="inavi-popup-close-button" type="button" aria-label="Close popup" style="width:36px;height:36px;line-height:36px;color:#fff;">×</button>',
              '<div style="background-color:white;border-radius: 5px;">',
              '<div class="title" style=" font-size: 14px; background-color: #dd1144; color: #fff; padding: 8px 10px;border-top-right-radius: 5px; border-top-left-radius: 5px; ">팅크웨어(주)</div>',
              '<div class="contents" style="padding: 10px 10px;">경기도 성남시 분당구 판교역로 240</div>',
            '</div>',
          '</div>',
        ].join(""),
      });

      document.querySelector(".inavi-popup-close-button").addEventListener("click", function() {
        CustomInfoWindow.setMap();
      });
    }  
    </script>
    <script type="text/javascript" src="API인증URL&callback=initMap"></script>
  </body>
</html>`;

const InfoWindowCustomPage = () => {
  return (
    <div className="container">
      <MapTitle before="팝업" label="커스텀 정보창 생성과 정보창 스타일 설정하기 " />
      <div className="contents no-border">
        <MapDesc
          label={
            <>
              커스텀 정보창을 생성하고 지도에 추가할 수 있습니다.
              <br />
              하단의 버튼을 클릭해 커스텀 정보창을 생성해 보세요.
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

export default InfoWindowCustomPage;
