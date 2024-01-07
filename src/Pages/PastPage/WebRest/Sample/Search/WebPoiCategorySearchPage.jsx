import CustomModal from "components/CustomModal";
import DoitBtn from "components/DoitBtn";
import MapDesc from "components/MapDesc";
import MapTitle from "components/MapTitle";
import React from "react";
import WebRestInnerLayout from "../../WebRestInnerLayout";

const searchDate = [
  {
    id: 1,
    label: "공간 검색",
    dataType: "search",
  },
  {
    id: 2,
    label: "반경 검색",
    dataType: "range",
  },
];

const WebPoiCategorySearchPage = () => {
  return (
    <>
      <CustomModal
        label="서비스 확장에 유용한 POI 카테고리 검색 (공간 검색)"
        searchOption={searchDate}
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
              <tr data-name="depth">
                <td>depth</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  하위시설물 요구 depth
                  <ul>
                    <li>0 : POI 표출시 부모/Sub 를 구분하지 않고 모두 표출</li>
                    <li>1 : POI 표출시 부모 POI 만 표출하고 Sub-POI 는 카운트만 제공</li>
                    <li>2 : POI 표출시 부모 POI 하위에 Sub-POI 를 따로 그룹 지어서 표출</li>
                    <li>
                      "3 : POI 표출시 부모 POI 하위에 Sub-POI 를 따로 그룹 지어서 표출,
                      <br />
                      "Sub-POI 내에 하위 Sub-POI 가 존재하는 경우 하위 depth 표출
                    </li>
                    <li>* 옵션 선택이 없는 경우 Default 는 0 으로 설정됨</li>
                  </ul>
                </td>
              </tr>
              <tr data-name="spopt">
                <td>spopt</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  공간 검색 Option
                  <ul>
                    <li>1 : 공간 검색 (x1, y1, x2, y2)</li>
                    <li>2 : 반경 검색 (x1, y1, radius)</li>
                  </ul>
                </td>
              </tr>
              <tr data-name="catecode">
                <td>catecode</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">카테고리 코드</td>
              </tr>
              <tr data-name="x1">
                <td>x1</td>
                <td className="type">String</td>
                <td>O </td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">기준 X1좌표</td>
              </tr>
              <tr data-name="y1">
                <td>y1</td>
                <td className="type">String</td>
                <td>O </td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">기준 Y1좌표</td>
              </tr>
              <tr data-name="x2">
                <td>x2</td>
                <td className="type">String</td>
                <td>O </td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">기준 X2좌표</td>
              </tr>
              <tr data-name="y2">
                <td>y2</td>
                <td className="type">String</td>
                <td>O </td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">기준 Y2 좌표</td>
              </tr>
              <tr data-name="radius">
                <td>radius</td>
                <td className="type">String</td>
                <td>O </td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">반경 (m)</td>
              </tr>
              <tr data-name="sortopt">
                <td>sortopt</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  정렬 옵션
                  <ul>
                    <li>Default : 1</li>
                    <li>1 : 거리순</li>
                    <li>2 : 명칭순</li>
                  </ul>
                </td>
              </tr>
              <tr data-name="reqcount">
                <td>reqcount</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">표시할 검색 결과 개수</td>
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
        <MapTitle label="서비스 확장에 유용한 POI 카테고리 검색 (공간 검색)" />
        <div className="contents no-border">
          <MapDesc
            label={
              <>
                범위, 반경에 대한 공간 옵션을 기준으로 특정 카테고리에 해당되는 지점을 검색합니다. <br />
                범위, 반경에 대한 공간 옵션을 설정하고 카테고리 코드를 입력해 검색 결과를 확인해 보세요.
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
                          <td className="url">https://api-maps.cloud.toast.com/maps/v3.0/appkeys/&#123;appkey&#125;/nearby-category-searches</td>
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
                        <tr data-name="depth">
                          <td>depth</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            하위시설물 요구 depth
                            <ul>
                              <li>0 : POI 표출시 부모/Sub 를 구분하지 않고 모두 표출</li>
                              <li>1 : POI 표출시 부모 POI 만 표출하고 Sub-POI 는 카운트만 제공</li>
                              <li>2 : POI 표출시 부모 POI 하위에 Sub-POI 를 따로 그룹 지어서 표출</li>
                              <li>
                                "3 : POI 표출시 부모 POI 하위에 Sub-POI 를 따로 그룹 지어서 표출,
                                <br />
                                "Sub-POI 내에 하위 Sub-POI 가 존재하는 경우 하위 depth 표출
                              </li>
                              <li>* 옵션 선택이 없는 경우 Default 는 0 으로 설정됨</li>
                            </ul>
                          </td>
                        </tr>
                        <tr data-name="spopt">
                          <td>spopt</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">
                            공간 검색 Option
                            <ul>
                              <li>1 : 공간 검색 (x1, y1, x2, y2)</li>
                              <li>2 : 반경 검색 (x1, y1, radius)</li>
                            </ul>
                          </td>
                        </tr>
                        <tr data-name="catecode">
                          <td>catecode</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">카테고리 코드</td>
                        </tr>
                        <tr data-name="x1">
                          <td>x1</td>
                          <td className="type">String</td>
                          <td>O (spopt 참조)</td>
                          <td className="ex">기준 X1좌표</td>
                        </tr>
                        <tr data-name="y1">
                          <td>y1</td>
                          <td className="type">String</td>
                          <td>O (spopt 참조)</td>
                          <td className="ex">기준 Y1좌표</td>
                        </tr>
                        <tr data-name="x2">
                          <td>x2</td>
                          <td className="type">String</td>
                          <td>O (spopt 참조)</td>
                          <td className="ex">기준 X2좌표</td>
                        </tr>
                        <tr data-name="y2">
                          <td>y2</td>
                          <td className="type">String</td>
                          <td>O (spopt 참조)</td>
                          <td className="ex">기준 Y2 좌표</td>
                        </tr>
                        <tr data-name="radius">
                          <td>radius</td>
                          <td className="type">String</td>
                          <td>O (spopt 참조)</td>
                          <td className="ex">반경 (m)</td>
                        </tr>
                        <tr data-name="sortopt">
                          <td>sortopt</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            정렬 옵션
                            <ul>
                              <li>Default : 1</li>
                              <li>1 : 거리순</li>
                              <li>2 : 명칭순</li>
                            </ul>
                          </td>
                        </tr>
                        <tr data-name="reqcount">
                          <td>reqcount</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">표시할 검색 결과 개수</td>
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
                          <td rowSpan="100">
                            cate
                            <span>(Object)</span>
                          </td>
                          <td colSpan="3">result</td>
                          <td className="type">Boolean</td>
                          <td className="ex">성공 여부</td>
                        </tr>
                        <tr>
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
                          <td rowSpan="44">
                            poi
                            <span>(Object, Array)</span>
                            <span>POI 검색 결과 목록</span>
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
                          <td className="ex">좌표와의 거리 (meter 단위)</td>
                        </tr>
                        <tr>
                          <td colSpan="2">tel</td>
                          <td className="type">String</td>
                          <td className="ex">전화번호</td>
                        </tr>
                        <tr>
                          <td colSpan="2">hassubpoi</td>
                          <td className="type">Boolean</td>
                          <td className="ex">하위시설물 데이터 존재 유무</td>
                        </tr>
                        <tr>
                          <td rowSpan="3">
                            subpoi
                            <span>(Object)</span>
                            <span>하위시설물 정보</span>
                          </td>
                          <td>count</td>
                          <td className="type">Integer</td>
                          <td className="ex">하위시설물 개수</td>
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

export default WebPoiCategorySearchPage;
