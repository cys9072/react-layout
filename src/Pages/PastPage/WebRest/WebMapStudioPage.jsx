import MapDesc from "components/MapDesc";
import MapTitle from "components/MapTitle";
import React from "react";
import { Link } from "react-router-dom";
import WebRestInnerLayout from "../WebRest/WebRestInnerLayout";
const WebMapStudioPage = () => {
  return (
    <>
      <div className="container">
        <MapTitle label="지도 스타일 편집 도구 Map Studio" />
        <div className="contents no-border">
          <MapDesc
            label={
              <>
                Map Studio는 지도 스타일 편집 도구입니다. 지도의 배경 색상, 폰트, 범례 아이콘 등을 편집하여 나만의 특별한 스타일로 지도를 디자인 할 수 있습니다.
                <br />
                Map Studio를 통해 동료와 협업이 가능하며 지도의 스타일을 빠르고 효과적으로 편집하고 활용할 수 있습니다.
                <br />
                <br />
                Map Studio 에 대한 자세한 사항은{" "}
                <Link style={{ color: "#e7290f", fontWeight: "500", textDecoration: "underline" }} target="_blank" to="https://docs.nhncloud.com/ko/Application%20Service/Maps/ko/map-studio-v1.0">
                  Map Studio 소개 페이지
                </Link>
                를 참고해주세요.
              </>
            }
          />

          <WebRestInnerLayout>
            <div className="cont-box" id="reference_coordinates">
              {/* <DoitBtn /> */}
              <MapTitle label="Map Studio 스타일 조회" fontSize={20} marginTop="60px" />
              <MapDesc
                label={
                  <>
                    Map Studio에서 배포된 스타일 정보를 <strong>아이나비 MAPS API를 통해 조회</strong>할 수 있습니다.
                  </>
                }
              />

              <div className="cont-list-box">
                <ul>
                  <li className="cont-list">
                    <p className="cont-title">Request URL</p>
                    <table>
                      <thead>
                        <tr>
                          <th className="type">Http Method</th>
                          <th className="url">URL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>GET</td>
                          <td className="url">https://api-maps.cloud.toast.com/maps/v3.0/appkeys/&#123;appKey&#125;/styleinfo</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li className="cont-list">
                    <p className="cont-title">Request Path parameter</p>
                    <table>
                      <thead>
                        <tr>
                          <th>값</th>
                          <th className="type">타입</th>
                          <th className="ex">설명</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>appKey</td>
                          <td className="type">String</td>
                          <td className="ex">고유의 appKey</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li className="cont-list">
                    <p className="cont-title">Request Query parameter</p>
                    <table>
                      <thead>
                        <tr>
                          <th>값</th>
                          <th className="type">타입</th>
                          <th>필수</th>
                          <th className="ex">설명</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>keyKind</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">OS 종류 (I : IOS, A : ANDROID, C : COMMON)</td>
                        </tr>
                        <tr>
                          <td>styleID</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">Style ID</td>
                        </tr>
                        <tr>
                          <td>styleName</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">Style 명칭</td>
                        </tr>
                        <tr>
                          <td>platform</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">플랫폼 종류 (N : Navi, M : Mobile, W : Web, C : Common)</td>
                        </tr>
                        <tr>
                          <td>pkgName</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">패키지명</td>
                        </tr>
                        <tr>
                          <td>workspace</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">Workspace ID</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li className="cont-list">
                    <p className="cont-title">Response Field</p>
                    <table>
                      <thead>
                        <tr>
                          <th colSpan="4">값</th>
                          <th className="type">타입</th>
                          <th className="ex">설명</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td rowSpan="3">
                            header
                            <span>(Object)</span>
                          </td>
                          <td colSpan="3">isSuccessful</td>
                          <td className="type">Boolean</td>
                          <td className="ex">성공 여부</td>
                        </tr>
                        <tr>
                          <td colSpan="3">resultCode</td>
                          <td className="type">Integer</td>
                          <td className="ex">실패 코드</td>
                        </tr>
                        <tr>
                          <td colSpan="3">resultMessage</td>
                          <td className="type">String</td>
                          <td className="ex">실패 메시지</td>
                        </tr>
                        <tr>
                          <td rowSpan="13">
                            result
                            <span>(Object)</span>
                          </td>
                          <td rowSpan="11">
                            data
                            <span>(Object, Array)</span>
                          </td>
                          <td colSpan="2">count</td>
                          <td className="type">integer</td>
                          <td className="ex">stylejson 개수</td>
                        </tr>
                        <tr>
                          <td rowSpan="10">
                            styleList
                            <span>(Object)</span>
                            <span>사용자 Style 리스트</span>
                          </td>
                          <td>workspace</td>
                          <td className="type">String</td>
                          <td className="ex">Workspace ID</td>
                        </tr>
                        <tr>
                          <td>styleID</td>
                          <td className="type">String</td>
                          <td className="ex">Style ID</td>
                        </tr>
                        <tr>
                          <td>styleName</td>
                          <td className="type">String</td>
                          <td className="ex">Style 명칭</td>
                        </tr>
                        <tr>
                          <td>filename</td>
                          <td className="type">String</td>
                          <td className="ex">StyleJson 파일명 (확장자 제외)</td>
                        </tr>
                        <tr>
                          <td>pkgName</td>
                          <td className="type">String</td>
                          <td className="ex">패키지명</td>
                        </tr>
                        <tr>
                          <td>platform</td>
                          <td className="type">String</td>
                          <td className="ex">플랫폼 종류 (N : Navi, M : Mobile, W : Web, C : Common)</td>
                        </tr>
                        <tr>
                          <td>keyKind</td>
                          <td className="type">String</td>
                          <td className="ex">OS 종류 (I : IOS, A : ANDROID, C : COMMON)</td>
                        </tr>
                        <tr>
                          <td>registerDt</td>
                          <td className="type">String</td>
                          <td className="ex">StyleJson 파일 배포일</td>
                        </tr>
                        <tr>
                          <td>modifyDt</td>
                          <td className="type">String</td>
                          <td className="ex">StyleJson 파일 수정 배포일</td>
                        </tr>
                        <tr>
                          <td>styleURL</td>
                          <td className="type">String</td>
                          <td className="ex">StyleJson 파일 URL</td>
                        </tr>
                        <tr>
                          <td colSpan="3">baseStyleUrl</td>
                          <td className="type">String</td>
                          <td className="ex">기본 StyleJson URL</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                </ul>
              </div>
            </div>
          </WebRestInnerLayout>
        </div>
      </div>
    </>
  );
};

export default WebMapStudioPage;
