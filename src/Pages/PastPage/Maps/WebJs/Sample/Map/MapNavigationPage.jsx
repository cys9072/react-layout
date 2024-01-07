import React from "react";
import { Link } from "react-router-dom";

const MapNavigationPage = () => {
  return (
    <section>
      <div className="cont-box">
        <div className="map-main-wrap">
          <div className="map-main-box">
            <h2>지도</h2>
            <div className="flex-box">
              <Link to={"/map-create"} className="flex-item map-base">
                <p className="title">지도 생성하기</p>
                <p className="description">일반 지도를 생성할 수 있습니다. 예제를 참고하여 지도를 생성해 보세요.</p>
              </Link>
              <Link to={"/map-style"} className="flex-item map-base map-style">
                <p className="title">지도 스타일 변경</p>
                <p className="description">지도의 스타일을 변경할 수 있습니다. 하단의 버튼을 클릭하여 지도 스타일을 변경해 보세요. [Road, Satelltie, Hybrid]</p>
              </Link>
              <Link to={"/map-event"} className="flex-item map-base">
                <p className="title">지도 이벤트 등록</p>
                <p className="description">지도에 이벤트를 등록할 수 있습니다. 이벤트 등록 예제를 참고해 보세요. 마우스 드래그&드롭으로 지도를 이동하면 이벤트로 지도의 중심 좌표와 줌 레벨을 표시하여 줍니다.</p>
              </Link>
              <Link to={"/map-fly-to"} className="flex-item map-base">
                <p className="title">지도 이동</p>
                <p className="description">마우스와 키보드를 이용해 지도를 이동할 수 있습니다. 마우스 드래그&드롭으로 지도를 이동합니다. 키보드 방향키로 지도를 이동합니다.하단의 버튼을 클릭하면 지정한 좌표로 지도의 중심과 시점이 날아가듯 부드럽게 이동됩니다. 지도를 이동해 보세요.</p>
              </Link>
              <Link to={"/map-interaction"} className="flex-item map-base">
                <p className="title">지도 인터렉션 ON/OFF 하기</p>
                <p className="description">지도의 이동과 회전, 확대와 축소를 조절하는 인터렉션 기능을 필요에 따라 ON/OFF 할 수 있습니다.하단의 버튼을 클릭하여 각각의 인터렉션을 ON/OFF 해 보세요.</p>
              </Link>
              <Link to={"/map-control"} className="flex-item map-base">
                <p className="title">지도 인터렉션 제어</p>
                <p className="description">지도 상에 표시되는 지도 컨트롤러와 로고 및 스케일(축적자)을 ON/OFF 할 수 있습니다. 하단의 버튼을 클릭하여 각각의 기능을 ON/OFF 해 보세요.</p>
              </Link>
              <Link to={"/map-calc-point"} className="flex-item map-base">
                <p className="title">거리 계산</p>
                <p className="description">지도 상에 특정한 두 지점 사이의 거리를 계산하여 표현합니다. 두 지점을 특정하고 거리를 계산해 보세요.</p>
              </Link>
              <Link to={"/map-information"} className="flex-item map-base">
                <p className="title">지도 정보 얻어오기</p>
                <p className="description">지도의 현재 레벨과 중심좌표, 영역좌표 정보 등을 표현합니다. 하단의 정보보기 버튼을 클릭하여 지도의 현재 정보를 확인해 보세요.</p>
              </Link>
            </div>
          </div>

          <div className="map-main-box">
            <h2>마커</h2>
            <div className="flex-box">
              <Link to={"/marker-create"} className="flex-item map-base map-marker">
                <p className="title">마커 생성하기</p>
                <p className="description">마커를 생성하고 지도 위에 표현합니다.마커를 생성해 보세요.</p>
              </Link>
              <Link to={"/marker-move"} className="flex-item map-base map-marker">
                <p className="title">마커 이동하기</p>
                <p className="description">지도의 특정 지점을 클릭하면 해당 위치로 마커가 이동합니다. 마커를 이동해 보세요</p>
              </Link>
              <Link to={"/marker-event"} className="flex-item map-base map-marker">
                <p className="title">마커 이벤트 등록하기</p>
                <p className="description">마커에 이벤트를 등록합니다. 마커를 특정 위치로 드래그&드롭 이동하여 마커에 등록된 이벤트(좌표정보 표시)를 확인해 보세요.</p>
              </Link>
              <Link to={"/marker-overlapping"} className="flex-item map-base map-marker">
                <p className="title">겹친 마커 얻기</p>
                <p className="description">겹쳐진 마커의 개수를 탐지합니다. 마커에 마우스를 올려 보세요. 겹쳐진 마커의 개수를 확인할 수 있습니다.</p>
              </Link>
              <Link to={"/marker-connect-location"} className="flex-item map-base map-marker">
                <p className="title">접속 위치 기반 마커/정보창 생성</p>
                <p className="description">Geolocation을 통해 확인된 접속 위치를 기반으로 지도 상의 해당 위치에 마커와 정보창을 표현합니다.</p>
              </Link>
              <Link to={"/marker-animation"} className="flex-item map-base map-marker">
                <p className="title">마커 애니메이션</p>
                <p className="description">지도 위로 마커에 대한 다양한 애니메이션을 효과를 표현합니다. 하단의 버튼을 클릭하여 다양한 애니메이션 효과를 확인해 보세요.</p>
              </Link>
              <Link to={"/marker-style"} className="flex-item map-base map-marker">
                <p className="title">마커 스타일 설정하기</p>
                <p className="description">마커의 투명도를 변경할 수 있습니다. 하단의 투명도를 조정하여 마커의 투명도를 변경해 보세요.</p>
              </Link>
              <Link to={"/marker-cluster-create"} className="flex-item map-base map-cluster">
                <p className="title">마커 클러스터 생성하기</p>
                <p className="description">마커 클러스터를 생성하고 지도에 추가합니다.</p>
              </Link>
              <Link to={"/marker-cluster-setting-distance"} className="flex-item map-base map-cluster">
                <p className="title">클러스터 기준 거리 설정하기</p>
                <p className="description">지도 상의 특정 지점을 클릭하면 해당 위치에 마커를 추가하고 해당 범위의 클러스터 정보를 업데이트 합니다.기준 거리 값의 설정에 따라 클러스터 생성에 대한 기준 범위가 달라집니다.</p>
              </Link>
              <Link to={"/marker-cluster-event"} className="flex-item map-base map-cluster">
                <p className="title">클러스터 이벤트 등록하기</p>
                <p className="description">클러스터 이벤트를 등록할 수 있습니다. 클러스터를 클릭해보세요. 지도가 클릭한 클러스터를 중심으로 포커싱 됩니다.</p>
              </Link>
            </div>
          </div>
          <div className="map-main-box">
            <h2>피처</h2>
            <div className="flex-box">
              <Link to={"/create-pitcher"} className="flex-item map-base map-pitcher">
                <p className="title">피처 생성하기</p>
                <p className="description">원, 폴리곤, 폴리라인, 라벨 등 피처를 생성하여 지도에 표시합니다. 지도에 여러가지 피처를 생성해 보세요.</p>
              </Link>
              <Link to={"/pitcher-interaction"} className="flex-item map-base map-pitcher">
                <p className="title">피처 이동 인터렉션 ON/OFF 하기</p>
                <p className="description">피처의 드래그&드롭 이동에 대한 인터렉션을 ON/OFF 할 수 있습니다. 하단의 버튼을 클릭해 피처의 이동을 ON/OFF 해보세요.</p>
              </Link>
              <Link to={"/pitcher-event"} className="flex-item map-base map-pitcher">
                <p className="title">피처 이벤트 등록하기</p>
                <p className="description">원, 폴리곤, 폴리라인, 라벨 등의 피처에 이벤트를 등록합니다. 피처 위로 마우스 커서를 올려 등록된 이벤트 정보창을 확인해보세요.</p>
              </Link>
              <Link to={"/pitcher-style"} className="flex-item map-base map-pitcher">
                <p className="title">피처 스타일 설정하기</p>
                <p className="description">생성된 피처(원, 폴리곤, 폴리라인, 라벨)의 색상을 변경할 수 있습니다. 하단의 버튼을 클릭해 피처의 색상을 변경해 보세요.</p>
              </Link>
              <Link to={"/pitcher-radius"} className="flex-item map-base map-pitcher">
                <p className="title">원 반경 설정하기</p>
                <p className="description">원의 반경을 설정할 수 있습니다. 하단의 창에 숫자를 입력해 원의 반경을 변경해 보세요.</p>
              </Link>
              <Link to={"/pitcher-custom-label"} className="flex-item map-base map-pitcher-custom">
                <p className="title">라벨 컨텐츠 설정하기</p>
                <p className="description">라벨 컨텐츠를 설정할 수 있습니다. 하단의 창에 텍스트를 입력해 라벨 컨텐츠를 변경해 보세요.</p>
              </Link>
              <Link to={"/pitcher-move-label"} className="flex-item map-base map-pitcher-custom">
                <p className="title">라벨 이동하기</p>
                <p className="description">지도 위 클릭한 지점으로 라벨을 이동합니다. 등록된 라벨을 이동해 보세요.</p>
              </Link>
              <Link to={"/pitcher-calc"} className="flex-item map-base ">
                <p className="title">다각형 면적 계산</p>
                <p className="description">지도 위 특정한 지점들을 기준으로 다각형을 생성하고 면적을 계산하여 표시합니다. 마우스를 클릭해 지도 위에 다각형을 그려보세요. 다각형의 면적 정보를 확인할 수 있습니다</p>
              </Link>
            </div>
          </div>
          <div className="map-main-box">
            <h2>데이터</h2>
            <div className="flex-box">
              <Link to={"/dater-geo-coding"} className="flex-item map-base">
                <p className="title">지오코딩</p>
                <p className="description">주소 데이터를 받아 주소에 해당하는 좌표를 변환하여 표출합니다.</p>
              </Link>
              <Link to={"/dater-reverse-geo-coding"} className="flex-item map-base">
                <p className="title">리버스 지오코딩</p>
                <p className="description">좌표 데이터를 받아 좌표에 해당하는 주소를 변환하여 표출합니다.</p>
              </Link>
              <Link to={"/dater-create-path"} className="flex-item map-base">
                <p className="title">경로 생성</p>
                <p className="description">경로 데이터를 받아 경로를 생성할 수 있습니다.</p>
              </Link>
              <Link to={"/dater-search-poi"} className="flex-item map-base">
                <p className="title">POI 검색</p>
                <p className="description">키워드 데이터에 따라 POI를 검색할 수 있습니다.</p>
              </Link>
            </div>
          </div>
          <div className="map-main-box">
            <h2>팝업</h2>
            <div className="flex-box">
              <Link to={"/create-info-window"} className="flex-item map-base map-info">
                <p className="title">정보창 생성하기</p>
                <p className="description">정보창을 생성하고 지도 위에 추가할 수 있습니다. 생성된 정보창을 확인해 보세요.</p>
              </Link>
              <Link to={"/info-window-contents"} className="flex-item map-base map-info">
                <p className="title">정보창 컨텐츠 설정하고 이동하기</p>
                <p className="description">정보창의 컨텐츠를 설정할 수 있습니다. 하단의 창에 텍스트를 입력하여 정보창 내용을 변경하고, 지도 위 클릭한 지점으로 정보창을 이동해 보세요.</p>
              </Link>
              <Link to={"/info-window-custom"} className="flex-item map-base map-info">
                <p className="title">커스텀 정보창 생성과 정보창 스타일 설정하기</p>
                <p className="description">커스텀 정보창을 생성하고 지도에 추가할 수 있습니다. 하단의 버튼을 클릭해 커스텀 정보창을 생성해 보세요.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapNavigationPage;
