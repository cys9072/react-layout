import React from "react";
import { Link } from "react-router-dom";

const WebNavigationPage = () => {
  return (
    <section>
      <div className="cont-box">
        <div className="map-main-wrap">
          <div className="map-main-box">
            <h2>검색</h2>
            <div className="flex-box">
              <Link to={"/web-geo-coding"} className="flex-item map-base">
                <p className="title">지오코딩</p>
                <p className="description">주소로 좌표 (TW 좌표/WGS84 좌표/TM 좌표) 를 검색합니다.</p>
              </Link>
              <Link to={"/web-reverse-geo-coding"} className="flex-item map-base">
                <p className="title">리버스 지오코딩</p>
                <p className="description">좌표 (TW 좌표/WGS84 좌표) 로 주소를 검색합니다.</p>
              </Link>
              <Link to={"/web-integrated-search"} className="flex-item map-base">
                <p className="title">통합검색</p>
                <p className="description">상호명, 전화번호, 주소 등의 키워드에 대해 통합 정보를 검색합니다.</p>
              </Link>
              <Link to={"/web-poi-detail-search"} className="flex-item map-base">
                <p className="title">POI 상세검색</p>
                <p className="description">POI에 대한 상세 정보를 검색합니다.</p>
              </Link>
              <Link to={"/web-sub-poi-detail-search"} className="flex-item map-base">
                <p className="title">POI 하위 시설물 검색</p>
                <p className="description">특정 POI 에 대한 하위 시설물을 검색합니다.</p>
              </Link>
              <Link to={"/web-poi-category-search"} className="flex-item map-base">
                <p className="title">POI 카테고리 검색</p>
                <p className="description">검색 옵션 (공간, 반경) 을 기준으로 카테고리 코드에 해당하는 곳을 검색합니다.</p>
              </Link>
              <Link to={"/web-proposers-search"} className="flex-item map-base">
                <p className="title">검색어 추천</p>
                <p className="description">검색어의 추천어를 검색합니다.</p>
              </Link>
              <Link to={"/web-admin-to-polygon"} className="flex-item map-base">
                <p className="title">행정/법정동 시각화 구역 검색</p>
                <p className="description">입력된 행정코드 및 행정명칭을 폴리곤 좌표로 반환합니다.</p>
              </Link>
              <Link to={"/web-polygon-to-admin"} className="flex-item map-base">
                <p className="title">좌표기준 행정/법정동 검색</p>
                <p className="description">입력된 폴리곤 좌표를 행정 코드로 반환합니다.</p>
              </Link>
              <Link to={"/web-trans-coordinate"} className="flex-item map-base">
                <p className="title">좌표(계) 변환</p>
                <p className="description">WGS84 - TM 좌표간 값을 변환하여 검색합니다.</p>
              </Link>
              <Link to={"/web-search-entry-point"} className="flex-item map-base">
                <p className="title">건물 입구점 조회</p>
                <p className="description">건물군 입구점을 조회합니다.</p>
              </Link>
            </div>
          </div>

          <div className="map-main-box">
            <h2>탐색</h2>
            <div className="flex-box">
              <Link to={"/web-route-normal"} className="flex-item map-base map-marker">
                <p className="title">경로탐색</p>
                <p className="description">출발지에서 목적지까지의 경로를 탐색하여 탐색한 경로 정보를 반환합니다.</p>
              </Link>
              <Link to={"/web-route-summary"} className="flex-item map-base map-marker">
                <p className="title">경로 탐색 요약(일반/경유지)</p>
                <p className="description">하나 이상의 탐색 옵션의 요약 정보를 반환합니다.</p>
              </Link>
              <Link to={"/web-route-multiple"} className="flex-item map-base map-marker">
                <p className="title">다중 경유지 추가</p>
                <p className="description">출발지에서 목적지까지의 경로를 탐색하여 탐색한 경로 정보를 반환합니다.</p>
              </Link>
              <Link to={"/web-route-multiple-start"} className="flex-item map-base map-marker">
                <p className="title">다중 출발지 - 단일 목적지 경로 탐색</p>
                <p className="description">여러 출발지에서 하나의 목적지까지의 경로를 탐색하여 탐색한 경로 정보를 요약하여 반환합니다.</p>
              </Link>
              <Link to={"/web-route-multiple-end"} className="flex-item map-base map-marker">
                <p className="title">단일 출발지 - 다중 목적지 경로 탐색</p>
                <p className="description">하나의 출발지에서 여러 목적지까지의 경로를 탐색하여 탐색한 경로 정보를 요약하여 반환합니다.</p>
              </Link>
              <Link to={"/web-route-time"} className="flex-item map-base map-marker">
                <p className="title">출발/도착시간 예측 탐색</p>
                <p className="description">출발 또는 도착 시간을 예정하여 출발지에서 목적지까지 탐색한 경로 정보를 반환합니다.</p>
              </Link>
              <Link to={"/web-route-custom-node"} className="flex-item map-base map-marker">
                <p className="title">커스텀 노드 경로 탐색</p>
                <p className="description">사용자가 지정한 특정 node를 탐색하여 경로 정보를 반환합니다.</p>
              </Link>
            </div>
          </div>

          <div className="map-main-box">
            <h2>Static Map</h2>
            <div className="flex-box">
              <Link to={"/web-static-maps"} className="flex-item map-base">
                <p className="title">Static Map</p>
                <p className="description">사용자가 지정한 지도 범위에 대해 정적 지도 이미지 URL을 반환합니다.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebNavigationPage;
