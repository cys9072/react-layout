import { ICON } from "constant";

export const HEADER_SIDE_DATA = [
  {
    title: "소개/OVERVIEW",
    icon: ICON.HEADER_ICON_01,
    id: "intro",
    content: [
      {
        title: "소개",
        linkTo: "/intro",
        content: [],
      },
      {
        title: "OVERVIEW",
        linkTo: "/intro-overview",
        content: [],
      },
    ],
  },
  {
    title: "요금제",
    id: "billing",
    icon: ICON.HEADER_ICON_02,
    linkTo: "billing-plan",
    content: [],
  },
  {
    title: "MAPS",
    id: "maps",
    icon: ICON.HEADER_ICON_03,
    content: [
      {
        title: "WEB (JS)",
        content: [
          {
            title: "guide",
            linkTo: "/map-guide",
            content: [],
          },
          {
            title: "sample",
            lastClass: "list-inner",
            combineLink: "/map-navigation",
            content: [
              {
                title: "지도",
                content: [
                  {
                    title: "지도 생성하기",
                    linkTo: "/map-create",
                    content: [],
                  },
                  {
                    title: "지도 스타일 변경",
                    linkTo: "/map-style",
                    content: [],
                  },
                  {
                    title: "지도 이벤트 등록",
                    linkTo: "/map-event",
                    content: [],
                  },
                  {
                    title: "지도 이동",
                    linkTo: "/map-fly-to",
                    content: [],
                  },
                  {
                    title: "지도 인터렉션 제어",
                    linkTo: "/map-interaction",
                    content: [],
                  },
                  {
                    title: "지도 컨트롤 제어",
                    linkTo: "/map-control",
                    content: [],
                  },
                  {
                    title: "거리 계산",
                    linkTo: "/map-calc-point",
                    content: [],
                  },
                  {
                    title: "지도 정보 얻어오기",
                    linkTo: "/map-information",
                    content: [],
                  },
                ],
              },
              {
                title: "마커",
                content: [
                  {
                    title: "마커 생성하기",
                    linkTo: "/marker-create",
                    content: [],
                  },
                  {
                    title: "마커 이동하기",
                    linkTo: "/marker-move",
                    content: [],
                  },
                  {
                    title: "마커 이벤트 등록하기",
                    linkTo: "/marker-event",
                    content: [],
                  },
                  {
                    title: "겹친 마커 얻기",
                    linkTo: "/marker-overlapping",
                    content: [],
                  },
                  {
                    title: "접속위치 기반 마커/정보창 생성",
                    linkTo: "/marker-connect-location",
                    content: [],
                  },
                  {
                    title: "마커 애니메이션",
                    linkTo: "/marker-animation",
                    content: [],
                  },
                  {
                    title: "마커 스타일 설정하기",
                    linkTo: "/marker-style",
                    content: [],
                  },
                  {
                    title: "마커 클러스터 생성하기",
                    linkTo: "/marker-cluster-create",
                    content: [],
                  },
                  {
                    title: "마커 클러스터 기준 거리 설정하기",
                    linkTo: "/marker-cluster-setting-distance",
                    content: [],
                  },
                  {
                    title: "클러스터 이벤트 등록하기",
                    linkTo: "/marker-cluster-event",
                    content: [],
                  },
                ],
              },
              {
                title: "피처",
                content: [
                  {
                    title: "피처 생성하기",
                    linkTo: "/create-pitcher",
                    content: [],
                  },
                  {
                    title: "피처 이동 인터렉션 ON/OFF 하기",
                    linkTo: "/pitcher-interaction",
                    content: [],
                  },
                  {
                    title: "피처 이벤트 등록하기",
                    linkTo: "/pitcher-event",
                    content: [],
                  },
                  {
                    title: "피처 스타일 설정하기",
                    linkTo: "/pitcher-style",
                    content: [],
                  },
                  {
                    title: "원 반경 설정하기",
                    linkTo: "/pitcher-radius",
                    content: [],
                  },
                  {
                    title: "라벨 컨텐츠 설정하기",
                    linkTo: "/pitcher-custom-label",
                    content: [],
                  },
                  {
                    title: "라벨 이동하기",
                    linkTo: "/pitcher-move-label",
                    content: [],
                  },
                  {
                    title: "다각형 면적 계산",
                    linkTo: "/pitcher-calc",
                    content: [],
                  },
                ],
              },
              {
                title: "데이터",

                content: [
                  {
                    title: "지오 코딩",
                    linkTo: "/dater-geo-coding",
                    content: [],
                  },
                  {
                    title: "리버스 지오코딩",
                    linkTo: "/dater-reverse-geo-coding",
                    content: [],
                  },
                  {
                    title: "경로생성",
                    linkTo: "/dater-create-path",
                    content: [],
                  },
                  {
                    title: "POI 검색",
                    linkTo: "/dater-search-poi",
                    content: [],
                  },
                ],
              },
              {
                title: "팝업",

                content: [
                  {
                    title: "정보창 생성하기",
                    linkTo: "/create-info-window",
                    content: [],
                  },
                  {
                    title: "정보창 컨텐츠 설정하고 이동하기",
                    linkTo: "/info-window-contents",
                    content: [],
                  },
                  {
                    title: "커스텀 정보창 생성과 정보창 스타일 설정하기",
                    linkTo: "/info-window-custom",
                    content: [],
                  },
                ],
              },
            ],
          },
          {
            title: "docs",
            linkTo: "/docs",
            content: [],
          },
          {
            title: "wizard",
            linkTo: "/wizard",
            content: [],
          },
        ],
      },
      {
        title: "ANDROID",
        linkTo: "https://inavimaps-android.gitbook.io",
        newTab: true,
        content: [],
      },
      {
        title: "IOS",
        linkTo: "https://inavimaps-ios.gitbook.io",
        newTab: true,
        content: [],
      },
    ],
  },
  {
    title: "WEB (REST)",
    id: "webRest",
    icon: ICON.HEADER_ICON_04,
    content: [
      {
        title: "sample",
        lastClass: "list-inner",
        combineLink: "/web-navigation",
        content: [
          {
            title: "검색",
            content: [
              {
                title: "지오코딩",
                linkTo: "/web-geo-coding",
                content: [],
              },
              {
                title: "리버스 지오코딩",
                linkTo: "/web-reverse-geo-coding",
                content: [],
              },
              {
                title: "통합검색",
                linkTo: "/web-integrated-search",
                content: [],
              },
              {
                title: "POI 상세검색",
                linkTo: "/web-poi-detail-search",
                content: [],
              },
              {
                title: "POI 하위 시설물 검색",
                linkTo: "web-sub-poi-detail-search",
                content: [],
              },
              {
                title: "POI 카테고리 검색",
                linkTo: "/web-poi-category-search",
                content: [],
              },
              {
                title: "검색어 추천",
                linkTo: "/web-proposers-search",
                content: [],
              },
              {
                title: "행정/법정동 시각화 구역 검색",
                linkTo: "/web-admin-to-polygon",
                content: [],
              },
              {
                title: "좌표기준 행정/법정동 검색",
                linkTo: "/web-polygon-to-admin",
                content: [],
              },
              {
                title: "좌표(계) 변환",
                linkTo: "/web-trans-coordinate",
                content: [],
              },
              {
                title: "건물 입구점 조회",
                linkTo: "/web-search-entry-point",
                content: [],
              },
            ],
          },
          {
            title: "탐색",
            content: [
              {
                title: "경로탐색",
                linkTo: "/web-route-normal",
                content: [],
              },
              {
                title: "경로 탐색 요약(일반/경유지)",
                linkTo: "/web-route-summary",
                content: [],
              },
              {
                title: "다중 경유지 추가",
                linkTo: "/web-route-multiple",
                content: [],
              },
              {
                title: "다중 출발지 - 단일 목적지 경로 탐색",
                linkTo: "/web-route-multiple-start",
                content: [],
              },
              {
                title: "단일 출발지 - 다중 목적지 경로 탐색",
                linkTo: "/web-route-multiple-end",
                content: [],
              },
              {
                title: "출발/도착시간 예측 탐색",
                linkTo: "/web-route-time",
                content: [],
              },
              {
                title: "커스텀 노드 경로 탐색",
                linkTo: "/web-route-custom-node",
                content: [],
              },
            ],
          },
          {
            title: "Static Maps",
            linkTo: "/web-static-maps",
            content: [],
          },
        ],
      },
      {
        title: "map studio",
        linkTo: "/web-map-studio",
        content: [],
      },
      {
        title: "결과코드",
        linkTo: "/web-result-code",
        content: [],
      },
    ],
  },
  {
    title: "BIZ 파트너",
    id: "bizPartner",
    icon: ICON.HEADER_ICON_05,
    linkTo: "/biz-partner",
    content: [],
  },
  {
    title: "공지사항",
    id: "notice",
    icon: ICON.HEADER_ICON_06,
    linkTo: "/notice",
    content: [],
  },
  {
    title: "개발자 커뮤니티",
    id: "community",
    icon: ICON.HEADER_ICON_07,
    linkTo: "/community",
    content: [],
  },
  {
    title: "APP KEY",
    id: "app",
    icon: ICON.HEADER_ICON_08,
    linkTo: "https://www.nhncloud.com/kr/service/application-service/maps",
    newTab: true,
    content: [],
  },
];
