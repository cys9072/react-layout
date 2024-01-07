import CustomModal from "components/CustomModal";
import DoitBtn from "components/DoitBtn";
import MapDesc from "components/MapDesc";
import MapTitle from "components/MapTitle";
import React from "react";
import WebRestInnerLayout from "../../WebRestInnerLayout";

const WebSubPoiDetailSearchPage = () => {
  return (
    <>
      <CustomModal
        label="서비스 확장에 유용한 POI 하위 시설물 검색"
        requestParameters={
          <table>
            <thead>
              <tr>
                <th>값</th>
                <th className="type">타입</th>
                <th>필수</th>
                <th>입력값</th>
                <th className="ex">설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>poiid</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  POI ID
                  <span>복수개 지원 안됨</span>
                </td>
              </tr>
              <tr>
                <td>x1</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  현위치 또는 지도 중심 좌표
                  <span>x, y좌표가 모두 NULL 또는 0 일 경우, 거리 계산을 수행하지 않음</span>
                  <span>복수개 지원 안됨</span>
                </td>
              </tr>
              <tr>
                <td>y1</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  현위치 또는 지도 중심 좌표
                  <span>x, y좌표가 모두 NULL 또는 0 일 경우, 거리 계산을 수행하지 않음</span>
                  <span>복수개 지원 안됨</span>
                </td>
              </tr>
            </tbody>
          </table>
        }
        responseCode={`
  "header": {
    "isSuccessful": true,
    "resultCode": 100,
    "resultMessage": "Result Not Found"
  }
`}
      />
      <div className="container">
        <MapTitle label="서비스 확장에 유용한 POI 하위 시설물 검색" />
        <div className="contents no-border">
          <MapDesc
            label={
              <>
                특정 POI에 대한 하위 시설물로의 확장 검색 기능을 제공합니다. <br />
                키워드를 입력해 POI 하위 시설물 정보를 확인해 보세요.
              </>
            }
          />

          <WebRestInnerLayout>
            <div className="cont-box" id="reference_coordinates">
              <DoitBtn />
              <div className="cont-list-box">
                <ul>
                  <li className="cont-list">
                    <p className="cont-title">Request URL</p>
                    <table>
                      <thead>
                        <tr>
                          <th>Http Method</th>
                          <th className="url">URL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>GET</td>
                          <td className="url">https://api-maps.cloud.toast.com/maps/v3.0/appkeys/&#123;appkey&#125;/sub-pois</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li className="cont-list">
                    <p className="cont-title">Request Path Parameter</p>
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
                    <p className="cont-title">Request Query Parameters</p>
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
                          <td>poiid</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">
                            POI ID
                            <span>복수개 지원 안됨</span>
                          </td>
                        </tr>
                        <tr>
                          <td>x1</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            현위치 또는 지도 중심 좌표
                            <span>x, y좌표가 모두 NULL 또는 0 일 경우, 거리 계산을 수행하지 않음</span>
                            <span>복수개 지원 안됨</span>
                          </td>
                        </tr>
                        <tr>
                          <td>y1</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            현위치 또는 지도 중심 좌표
                            <span>x, y좌표가 모두 NULL 또는 0 일 경우, 거리 계산을 수행하지 않음</span>
                            <span>복수개 지원 안됨</span>
                          </td>
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
                          <th>타입</th>
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
                          <td rowSpan="49">
                            subpoi
                            <span>(Object)</span>
                          </td>
                          <td colSpan="3">totalcount</td>
                          <td className="type">Integer</td>
                          <td className="ex">전체 검색 결과 대상 개수</td>
                        </tr>
                        <tr>
                          <td colSpan="3">count</td>
                          <td className="type">Integer</td>
                          <td className="ex">검색 결과 개수</td>
                        </tr>
                        <tr>
                          <td rowSpan="43">
                            poi
                            <span>(Array)</span>
                          </td>
                          <td colSpan="2">poiid</td>
                          <td className="type">Integer</td>
                          <td className="ex">POI ID</td>
                        </tr>
                        <tr>
                          <td colSpan="2">depth</td>
                          <td className="type">String</td>
                          <td className="ex">POI 하위시설물 depth</td>
                        </tr>
                        <tr>
                          <td colSpan="2">dpx</td>
                          <td className="type">String</td>
                          <td className="ex">display X좌표 (WGS84의 경우 longitude)</td>
                        </tr>
                        <tr>
                          <td colSpan="2">dpy</td>
                          <td className="type">String</td>
                          <td className="ex">display Y좌표 (WGS84의 경우 latitude)</td>
                        </tr>
                        <tr>
                          <td colSpan="2">rpx</td>
                          <td className="type">String</td>
                          <td className="ex">
                            탐색 X좌표 (WGS84의 경우 longitude)
                            <span>경로 탐색에 사용되는 X좌표</span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="2">rpy</td>
                          <td className="type">String</td>
                          <td className="ex">
                            탐색 Y좌표 (WGS84의 경우 latitude)
                            <span>경로 탐색에 사용되는 Y좌표</span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="2">name1</td>
                          <td className="type">String</td>
                          <td className="ex">정식 명칭</td>
                        </tr>
                        <tr>
                          <td colSpan="2">name2</td>
                          <td className="type">String</td>
                          <td className="ex">축약 명칭</td>
                        </tr>
                        <tr>
                          <td colSpan="2">name3</td>
                          <td className="type">String</td>
                          <td className="ex">확장 명칭1</td>
                        </tr>
                        <tr>
                          <td colSpan="2">name4</td>
                          <td className="type">String</td>
                          <td className="ex">확장 명칭2</td>
                        </tr>
                        <tr>
                          <td colSpan="2">admcode</td>
                          <td className="type">String</td>
                          <td className="ex">법정동 코드</td>
                        </tr>
                        <tr>
                          <td colSpan="2">address</td>
                          <td className="type">String</td>
                          <td className="ex">주소</td>
                        </tr>
                        <tr>
                          <td colSpan="2">jibun</td>
                          <td className="type">String</td>
                          <td className="ex">지번</td>
                        </tr>
                        <tr>
                          <td colSpan="2">roadname</td>
                          <td className="type">String</td>
                          <td className="ex">새 주소 도로명</td>
                        </tr>
                        <tr>
                          <td colSpan="2">roadjibun</td>
                          <td className="type">String</td>
                          <td className="ex">새 주소 지번</td>
                        </tr>
                        <tr>
                          <td colSpan="2">detailaddress</td>
                          <td className="type">String</td>
                          <td className="ex">상세 주소</td>
                        </tr>
                        <tr>
                          <td colSpan="2">catecode</td>
                          <td className="type">String</td>
                          <td className="ex">분류 코드</td>
                        </tr>
                        <tr>
                          <td colSpan="2">catename</td>
                          <td className="type">String</td>
                          <td className="ex">분류 명칭</td>
                        </tr>
                        <tr>
                          <td colSpan="2">distance</td>
                          <td className="type">Integer</td>
                          <td className="ex">
                            좌표와의 거리 (meter 단위)
                            <span>x1, y1 좌표를 기준으로 계산한 거리를 반환</span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="2">tel</td>
                          <td className="type">String</td>
                          <td className="ex">전화번호</td>
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

export default WebSubPoiDetailSearchPage;
