import CommonLayout from "Layout/CommonLayout";
import MainLayout from "Layout/MainLayout";
import BaseLayout from "Layout/BaseLayout";
import PastLayout from "Layout/PastLayout";
import ScrollToTop from "components/Comment/ScrollTop";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as Pages from "./Pages";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<CommonLayout />}>
          {/* 메인페이지만 적용 되는 레이아웃 */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Pages.MainPage />} />
          </Route>
          {/* pref 개발에 관련된 레이아웃 */}
          <Route element={<BaseLayout />}>
            <Route path="/intro" element={<Pages.IntroPage />} />
            <Route path="/intro-overview" element={<Pages.OverViewPage />} />
            <Route path="/billing-plan" element={<Pages.BillingPage />} />
            <Route path="/map-guide" element={<Pages.GuidePage />} />
            <Route path="/biz-partner" element={<Pages.BizPartnerPage />} />
            <Route path="/notice" element={<Pages.NoticePage />} />
            <Route path="/notice/:idx" element={<Pages.NoticeDetailPage />} />

            <Route path="/community" element={<Pages.CommunityPage />} />
            <Route path="/community/:idx" element={<Pages.CommunityDetailPage />} />
            <Route path="/community-write" element={<Pages.CommunityWritePage />} />
          </Route>

          {/* 기존 페이지 레이아웃 + 디자인 리뉴얼  */}
          <Route element={<PastLayout />}>
            {/* map */}
            <Route path="/map-navigation" element={<Pages.MapNavigationPage />} />
            <Route path="/map-create" element={<Pages.MapCreatePage />} />
            <Route path="/map-style" element={<Pages.MapStylePage />} />
            <Route path="/map-event" element={<Pages.MapEventPage />} />
            <Route path="/map-fly-to" element={<Pages.MapFlyToPage />} />
            <Route path="/map-interaction" element={<Pages.MapInteractionControl />} />
            <Route path="/map-control" element={<Pages.MapControlPage />} />
            <Route path="/map-calc-point" element={<Pages.MapCalcBetweenTwoPointPage />} />
            <Route path="/map-information" element={<Pages.MapInformationPage />} />
            {/* marker */}
            <Route path="/marker-create" element={<Pages.MarkerCreatePage />} />
            <Route path="/marker-move" element={<Pages.MarkerMovePage />} />
            <Route path="/marker-event" element={<Pages.MarkerEventPage />} />
            <Route path="/marker-overlapping" element={<Pages.MarkerOverlappingPage />} />
            <Route path="/marker-connect-location" element={<Pages.MarkerConnectLocationPage />} />
            <Route path="/marker-animation" element={<Pages.MarkerAnimation />} />
            <Route path="/marker-style" element={<Pages.MarkerStylePage />} />
            <Route path="/marker-cluster-create" element={<Pages.MarkerClusterCreatePage />} />
            <Route path="/marker-cluster-setting-distance" element={<Pages.MarkerClusterSettingDistancePage />} />
            <Route path="/marker-cluster-event" element={<Pages.MarkerClusterEventPage />} />
            {/* pitcher */}
            <Route path="/create-pitcher" element={<Pages.CreatePitcherPage />} />
            <Route path="/pitcher-interaction" element={<Pages.PitcherInteractionPage />} />
            <Route path="/pitcher-event" element={<Pages.PitcherAddEventPage />} />
            <Route path="/pitcher-style" element={<Pages.PitcherStylePage />} />
            <Route path="/pitcher-radius" element={<Pages.PitcherRadiusPage />} />
            <Route path="/pitcher-custom-label" element={<Pages.PitcherCustomLabelPage />} />
            <Route path="/pitcher-move-label" element={<Pages.PitcherMoveLabelPage />} />
            <Route path="/pitcher-calc" element={<Pages.PitcherCalcPage />} />
            {/* dater */}
            <Route path="/dater-geo-coding" element={<Pages.DaterGeoCodingPage />} />
            <Route path="/dater-reverse-geo-coding" element={<Pages.DaterReverseGeoCodingPage />} />
            <Route path="/dater-create-path" element={<Pages.DaterCreatePathPage />} />
            <Route path="/dater-search-poi" element={<Pages.DaterSearchPoiPage />} />
            {/* infoWindow */}
            <Route path="/create-info-window" element={<Pages.CreateInfoWindowPage />} />
            <Route path="/info-window-contents" element={<Pages.InfoWindowContentsPage />} />
            <Route path="/info-window-custom" element={<Pages.InfoWindowCustomPage />} />
            {/* docs */}
            <Route path="/docs" element={<Pages.DocsPage />} />
            {/* wizard */}
            <Route path="/wizard" element={<Pages.WizardPage />} />

            {/*  */}
            {/* web(REST) */}
            <Route path="/web-navigation" element={<Pages.WebNavigationPage />} />
            {/* search */}
            <Route path="/web-geo-coding" element={<Pages.WebGeoCodingPage />} />
            <Route path="/web-reverse-geo-coding" element={<Pages.WebReverseGeoCodingPage />} />
            <Route path="/web-integrated-search" element={<Pages.WebIntegratedSearchPage />} />
            <Route path="/web-poi-detail-search" element={<Pages.WebPoiDetailSearchPage />} />
            <Route path="/web-sub-poi-detail-search" element={<Pages.WebSubPoiDetailSearchPage />} />
            <Route path="/web-poi-category-search" element={<Pages.WebPoiCategorySearchPage />} />
            <Route path="/web-proposers-search" element={<Pages.WebProposersSearchPage />} />
            <Route path="/web-admin-to-polygon" element={<Pages.WebAdminToPolygonPage />} />
            <Route path="/web-polygon-to-admin" element={<Pages.WebPolygonToAdminPage />} />
            <Route path="/web-trans-coordinate" element={<Pages.WebTransCoordinatePage />} />
            <Route path="/web-search-entry-point" element={<Pages.WebSearchEntryPointPage />} />
            {/* explore */}
            <Route path="/web-route-normal" element={<Pages.WebRouteNormalPage />} />
            <Route path="/web-route-summary" element={<Pages.WebRouteSummaryPage />} />
            <Route path="/web-route-multiple" element={<Pages.WebRouteMultiplePage />} />
            <Route path="/web-route-multiple-start" element={<Pages.WebRouteMultipleStartPage />} />
            <Route path="/web-route-multiple-end" element={<Pages.WebRouteMultipleEndPage />} />
            <Route path="/web-route-time" element={<Pages.WebRouteTimePage />} />
            <Route path="/web-route-custom-node" element={<Pages.WebRouteNodeCustomPage />} />

            {/* map-studio */}
            <Route path="/web-map-studio" element={<Pages.WebMapStudioPage />} />
            {/* map-studio */}
            <Route path="/web-result-code" element={<Pages.WebResultCodePage />} />
            {/* static-maps */}
            <Route path="/web-static-maps" element={<Pages.WebStaticMaps />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
