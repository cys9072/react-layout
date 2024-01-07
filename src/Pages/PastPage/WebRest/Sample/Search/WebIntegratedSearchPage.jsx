import CustomModal from "components/CustomModal";
import DoitBtn from "components/DoitBtn";
import MapDesc from "components/MapDesc";
import MapTitle from "components/MapTitle";
import React from "react";
import WebRestInnerLayout from "../../WebRestInnerLayout";

const searchDate = [
  {
    id: 1,
    label: "통합 검색",
    dataType: "search",
  },
  {
    id: 2,
    label: "키워드 검색",
    dataType: "keyword",
  },
  {
    id: 3,
    label: "공간 검색",
    dataType: "extent",
  },
  {
    id: 4,
    label: "반경 검색",
    dataType: "radius",
  },
  {
    id: 5,
    label: "행정코드 검색",
    dataType: "admcode",
  },
];
const WebIntegratedSearchPage = () => {
  return (
    <>
      <CustomModal
        label="쉽고 편리한 통합 검색"
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
              <tr data-name="query">
                <td>query</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">검색어</td>
              </tr>
              <tr data-name="coordtype">
                <td>coordtype</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  좌표형식
                  <ul>
                    <li>Default : 1</li>
                    <li>0 : TW</li>
                    <li>1 : WGS84</li>
                    <li>2 : TM</li>
                  </ul>
                </td>
              </tr>
              <tr data-name="startposition">
                <td>startposition</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  검색 시작 위치
                  <span>0 : 첫번째 위치</span>
                  <span>* 미입력 시 0으로 조회</span>
                </td>
              </tr>
              <tr data-name="reqcount">
                <td>reqcount</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  검색 요청 개수
                  <ul>
                    <li>reqcount : type별 개수</li>
                    <li>type : POI(명칭), TEL(전화번호), ADM(주소)</li>
                    <li>ex) reqcount=10 이면, type별로 count 가 반환되어 합산</li>
                    <li>* 0으로 설정시 Max Count(100) 반환</li>
                  </ul>
                </td>
              </tr>
              <tr data-name="spopt">
                <td>spopt</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  검색 option
                  <ul>
                    <li>0 : 공간 검색 사용 안함</li>
                    <li>1 : Extent(공간) 검색</li>
                    <li>2 : Range(반경) 검색</li>
                    <li>
                      * spopt값이 설정되지 않은 경우 0으로 설정
                      <br /> * POI 를 검색하는 경우에만 공간 검색 옵션 적용 (주소 검색일 경우 옵션 적용 안됨){" "}
                    </li>
                  </ul>
                </td>
              </tr>
              <tr data-name="radius">
                <td>radius</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  반경
                  <span>spopt가 2인 경우 사용 (meter 단위)</span>
                </td>
              </tr>
              <tr data-name="admcode">
                <td>admcode</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  법정동/행정동 코드
                  <button type="button" onClick={() => window.open("https://www.code.go.kr/stdcode/regCodeL.do")}>
                    법정동/행정동 코드 목록 조회
                  </button>
                  <ul>
                    <li>키워드가 법정동 검색일 때, 결과값은 법정동 코드</li>
                    <li>키워드가 행정동 검색일 때, 결과값은 행정동 코드</li>
                  </ul>
                </td>
              </tr>
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
              <tr data-name="x1">
                <td>x1</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  X1좌표
                  <ul>
                    <li>spopt가 0인 경우 기준점 X좌표</li>
                    <li>spopt가 1인 경우 Extent의 좌상단 X좌표 </li>
                    <li>spopt가 2인 경우 기준점 X좌표</li>
                  </ul>
                </td>
              </tr>
              <tr data-name="y1">
                <td>y1</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  Y1좌표
                  <ul>
                    <li>spopt가 0인 경우 기준점 Y좌표 </li>
                    <li>spopt가 1인 경우 Extent의 좌상단 Y좌표 </li>
                    <li>spopt가 2인 경우 기준점 Y좌표</li>
                  </ul>
                </td>
              </tr>
              <tr data-name="x2">
                <td>x2</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  X2좌표
                  <ul>
                    <li>spopt가 1인 경우 Extent의 우하단 X좌표</li>
                    <li>spopt가 2인 경우 사용 안함</li>
                  </ul>
                </td>
              </tr>
              <tr data-name="y2">
                <td>y2</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  Y2좌표
                  <ul>
                    <li>spopt가 1인 경우 Extent의 우하단 Y좌표</li>
                    <li>spopt가 2인 경우 사용 안함</li>
                  </ul>
                </td>
              </tr>
              <tr data-name="sortopt">
                <td>sortopt</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  정렬 option
                  <ul>
                    <li>1 : 명칭 순 정렬</li>
                    <li>2 : 거리 순 정렬 (좌표를 입력한 경우) </li>
                    <li>3 : 이름매치 → 거리 순 정렬 (좌표를 입력한 경우)</li>
                    <li>4 : 검색어 Weight (가중치) 정렬</li>
                  </ul>
                  <span>* sortopt 값이 설정되지 않은 경우 4로 설정</span>
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
        <MapTitle label="쉽고 편리한 통합 검색" />
        <div className="contents no-border">
          <MapDesc
            label={
              <>
                상호명, 건물명, 업종명, 초성검색, 주소(지번&도로명), 전화번호 등 다양한 키워드에 대한 통합 검색 기능을 제공합니다.
                <br /> 키워드를 입력해 쉽고 편리한 통합 검색 기능을 확인해 보세요.
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
                          <td className="url">https://api-maps.cloud.toast.com/maps/v3.0/appkeys/&#123;appkey&#125;/searches</td>
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
                        <tr data-name="query">
                          <td>query</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">검색어</td>
                        </tr>
                        <tr data-name="coordtype">
                          <td>coordtype</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            좌표형식
                            <ul>
                              <li>Default : 1</li>
                              <li>0 : TW</li>
                              <li>1 : WGS84</li>
                              <li>2 : TM</li>
                            </ul>
                          </td>
                        </tr>
                        <tr data-name="startposition">
                          <td>startposition</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            검색 시작 위치
                            <span>0 : 첫번째 위치</span>
                            <span>* 미입력 시 0으로 조회</span>
                          </td>
                        </tr>
                        <tr data-name="reqcount">
                          <td>reqcount</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            검색 요청 개수
                            <ul>
                              <li>reqcount : type별 개수</li>
                              <li>type : POI(명칭), TEL(전화번호), ADM(주소)</li>
                              <li>ex) reqcount=10 이면, type별로 count 가 반환되어 합산</li>
                              <li>* 0으로 설정시 Max Count(100) 반환</li>
                            </ul>
                          </td>
                        </tr>
                        <tr data-name="spopt">
                          <td>spopt</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            검색 option
                            <ul>
                              <li>0 : 공간 검색 사용 안함</li>
                              <li>1 : Extent(공간) 검색</li>
                              <li>2 : Range(반경) 검색</li>
                              <li>
                                * spopt값이 설정되지 않은 경우 0으로 설정
                                <br /> * POI 를 검색하는 경우에만 공간 검색 옵션 적용 (주소 검색일 경우 옵션 적용 안됨){" "}
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr data-name="radius">
                          <td>radius</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            반경
                            <span>spopt가 2인 경우 사용 (meter 단위)</span>
                          </td>
                        </tr>
                        <tr data-name="admcode">
                          <td>admcode</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            법정동/행정동 코드
                            <button type="button" onClick={() => window.open("https://www.code.go.kr/stdcode/regCodeL.do")}>
                              법정동/행정동 코드 목록 조회
                            </button>
                            <ul>
                              <li>키워드가 법정동 검색일 때, 결과값은 법정동 코드</li>
                              <li>키워드가 행정동 검색일 때, 결과값은 행정동 코드</li>
                            </ul>
                          </td>
                        </tr>
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
                        <tr data-name="x1">
                          <td>x1</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            X1좌표
                            <ul>
                              <li>spopt가 0인 경우 기준점 X좌표</li>
                              <li>spopt가 1인 경우 Extent의 좌상단 X좌표 </li>
                              <li>spopt가 2인 경우 기준점 X좌표</li>
                            </ul>
                          </td>
                        </tr>
                        <tr data-name="y1">
                          <td>y1</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            Y1좌표
                            <ul>
                              <li>spopt가 0인 경우 기준점 Y좌표 </li>
                              <li>spopt가 1인 경우 Extent의 좌상단 Y좌표 </li>
                              <li>spopt가 2인 경우 기준점 Y좌표</li>
                            </ul>
                          </td>
                        </tr>
                        <tr data-name="x2">
                          <td>x2</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            X2좌표
                            <ul>
                              <li>spopt가 1인 경우 Extent의 우하단 X좌표</li>
                              <li>spopt가 2인 경우 사용 안함</li>
                            </ul>
                          </td>
                        </tr>
                        <tr data-name="y2">
                          <td>y2</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            Y2좌표
                            <ul>
                              <li>spopt가 1인 경우 Extent의 우하단 Y좌표</li>
                              <li>spopt가 2인 경우 사용 안함</li>
                            </ul>
                          </td>
                        </tr>
                        <tr data-name="sortopt">
                          <td>sortopt</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            정렬 option
                            <ul>
                              <li>1 : 명칭 순 정렬</li>
                              <li>2 : 거리 순 정렬 (좌표를 입력한 경우) </li>
                              <li>3 : 이름매치 → 거리 순 정렬 (좌표를 입력한 경우)</li>
                              <li>4 : 검색어 Weight (가중치) 정렬</li>
                            </ul>
                            <span>* sortopt 값이 설정되지 않은 경우 4로 설정</span>
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
                          <th colSpan="5">값</th>
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
                          <td colSpan="4">isSuccessful</td>
                          <td className="type">Boolean</td>
                          <td className="ex">성공 여부</td>
                        </tr>
                        <tr>
                          <td colSpan="4">resultCode</td>
                          <td className="type">Integer</td>
                          <td className="ex">실패 코드</td>
                        </tr>
                        <tr>
                          <td colSpan="4">resultMessage</td>
                          <td className="type">String</td>
                          <td className="ex">실패 메시지</td>
                        </tr>
                        <tr>
                          <td rowSpan="100">
                            search
                            <span>(Object)</span>
                          </td>
                          <td colSpan="4">type</td>
                          <td className="type">Integer</td>
                          <td className="ex">
                            <ol>
                              <li>0 : 일반 검색</li>
                              <li>1 : 연관 검색</li>
                            </ol>
                            <span>ex) 연관 검색 : 판교역 주변 주유소</span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="4">totalcount</td>
                          <td className="type">Integer</td>
                          <td className="ex">
                            전체 검색 결과 대상 개수 (POI + TEL_POI + ADM)
                            <span>poitotalcount + tel_poitotalcount + admtotalcount</span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="4">count</td>
                          <td className="type">Integer</td>
                          <td className="ex">
                            검색 결과 개수 (POI + TEL_POI)
                            <span>poicount + tel_poicount</span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="4">poitotalcount</td>
                          <td className="type">Integer</td>
                          <td className="ex">전체 POI(명칭) 검색 결과 대상 개수</td>
                        </tr>
                        <tr>
                          <td colSpan="4">poicount</td>
                          <td className="type">Integer</td>
                          <td className="ex">POI (명칭) 검색 결과 개수</td>
                        </tr>
                        <tr>
                          <td colSpan="4">tel_poitotalcount</td>
                          <td className="type">Integer</td>
                          <td className="ex">전체 TEL_POI 검색결과 대상 개수</td>
                        </tr>
                        <tr>
                          <td colSpan="4">tel_poicount</td>
                          <td className="type">Integer</td>
                          <td className="ex">TEL_POI 검색 결과 개수</td>
                        </tr>
                        <tr>
                          <td colSpan="4">admtotalcount</td>
                          <td className="type">Integer</td>
                          <td className="ex">전체 ADM(주소) 검색 결과 대상 개수</td>
                        </tr>
                        <tr>
                          <td colSpan="4">admcount</td>
                          <td className="type">Integer</td>
                          <td className="ex">ADM (주소) 검색 결과 개수</td>
                        </tr>
                        <tr>
                          <td colSpan="4">reftotalcount</td>
                          <td className="type">Integer</td>
                          <td className="ex">전체 연관 검색 결과 대상 개수</td>
                        </tr>
                        <tr>
                          <td colSpan="4">refcount</td>
                          <td className="type">Integer</td>
                          <td className="ex">연관 검색 결과 개수</td>
                        </tr>
                        <tr>
                          <td colSpan="4">res_type</td>
                          <td className="type">String</td>
                          <td className="ex">
                            검색 결과 Type명칭
                            <span>POI (명칭), CATEGORY (카테고리), ADM (주소), TEL_POI (전화번호 POI) 순</span>
                            <span>ex) NYNN: 명칭 No, 카테고리 YES, 주소 NO, 전화번호 NO</span>
                          </td>
                        </tr>
                        <tr>
                          <td rowSpan="23">
                            poi
                            <span>(Array)</span>
                          </td>
                          <td colSpan="3">poiid</td>
                          <td className="type">Integer</td>
                          <td className="ex">POI ID</td>
                        </tr>
                        <tr>
                          <td colSpan="3">depth</td>
                          <td className="type">String</td>
                          <td className="ex">POI 하위시설물 depth</td>
                        </tr>
                        <tr>
                          <td colSpan="3">dpx</td>
                          <td className="type">String</td>
                          <td className="ex">display X좌표 (WGS84의 경우 longitude)</td>
                        </tr>
                        <tr>
                          <td colSpan="3">dpy</td>
                          <td className="type">String</td>
                          <td className="ex">display Y좌표 (WGS84의 경우 latitude)</td>
                        </tr>
                        <tr>
                          <td colSpan="3">rpx</td>
                          <td className="type">String</td>
                          <td className="ex">
                            탐색 X좌표 (WGS84의 경우 longitude)
                            <span>경로 탐색에 사용되는 X좌표</span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="3">rpy</td>
                          <td className="type">String</td>
                          <td className="ex">
                            탐색 Y좌표 (WGS84의 경우 latitude)
                            <span>경로 탐색에 사용되는 Y좌표</span>
                          </td>
                        </tr>
                        <tr>
                          <td rowSpan="2">
                            entrypoint
                            <span>(Object)</span>
                            <ul>
                              <li>입구점</li>
                            </ul>
                          </td>
                          <td colSpan="2">px</td>
                          <td className="type">String</td>
                          <td className="ex">입구점 X좌표 (WGS84의 경우 longitude)</td>
                        </tr>
                        <tr>
                          <td colSpan="2">py</td>
                          <td className="type">String</td>
                          <td className="ex">입구점 Y좌표 (WGS84의 경우 latitude)</td>
                        </tr>
                        <tr>
                          <td colSpan="3">name1</td>
                          <td className="type">String</td>
                          <td className="ex">정식 명칭</td>
                        </tr>
                        <tr>
                          <td colSpan="3">name2</td>
                          <td className="type">String</td>
                          <td className="ex">축약 명칭</td>
                        </tr>
                        <tr>
                          <td colSpan="3">name3</td>
                          <td className="type">String</td>
                          <td className="ex">확장 명칭1</td>
                        </tr>
                        <tr>
                          <td colSpan="3">name4</td>
                          <td className="type">String</td>
                          <td className="ex">확장 명칭2</td>
                        </tr>
                        <tr>
                          <td colSpan="3">admcode</td>
                          <td className="type">String</td>
                          <td className="ex">
                            법정동/행정동 코드
                            <ul>
                              <li>키워드가 법정동 검색일 때, 결과값은 법정동 코드</li>
                              <li>키워드가 행정동 검색일 때, 결과값은 행정동 코드</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="3">address</td>
                          <td className="type">String</td>
                          <td className="ex">주소</td>
                        </tr>
                        <tr>
                          <td colSpan="3">jibun</td>
                          <td className="type">String</td>
                          <td className="ex">지번</td>
                        </tr>
                        <tr>
                          <td colSpan="3">roadname</td>
                          <td className="type">String</td>
                          <td className="ex">새 주소 도로명</td>
                        </tr>
                        <tr>
                          <td colSpan="3">roadjibun</td>
                          <td className="type">String</td>
                          <td className="ex">새 주소 지번</td>
                        </tr>
                        <tr>
                          <td colSpan="3">detailaddress</td>
                          <td className="type">String</td>
                          <td className="ex">상세주소</td>
                        </tr>
                        <tr>
                          <td colSpan="3">catecode</td>
                          <td className="type">String</td>
                          <td className="ex">분류코드</td>
                        </tr>
                        <tr>
                          <td colSpan="3">catename</td>
                          <td className="type">String</td>
                          <td className="ex">분류명칭</td>
                        </tr>
                        <tr>
                          <td colSpan="3">distance</td>
                          <td className="type">Integer</td>
                          <td className="ex">
                            좌표와의 거리 (meter 단위)
                            <span>x1, y1 좌표를 기준으로 계산한 거리를 반환</span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="3">tel</td>
                          <td className="type">String</td>
                          <td className="ex">전화번호</td>
                        </tr>
                        <tr>
                          <td colSpan="3">hasdetailinfo</td>
                          <td className="type">Boolean</td>
                          <td className="ex">
                            상세 정보 존재여부
                            <span>true : POI 상세 검색 API 에서 POI 상세 정보 확인 가능</span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="4">tel</td>
                          <td className="type">Array</td>
                          <td className="ex">
                            TEL 검색 결과 목록
                            <span>POI (Array) 정보와 동일</span>
                          </td>
                        </tr>
                        <tr>
                          <td rowSpan="9">
                            adm
                            <span>(Array)</span>
                            <span>ADM 검색 결과 목록</span>
                          </td>
                          <td colSpan="3">posx</td>
                          <td className="type">String</td>
                          <td className="ex">X좌표 (WGS84의 경우 longitude)</td>
                        </tr>
                        <tr>
                          <td colSpan="3">posy</td>
                          <td className="type">String</td>
                          <td className="ex">Y좌표 (WGS84의 경우 latitude)</td>
                        </tr>
                        <tr>
                          <td colSpan="3">admcode</td>
                          <td className="type">String</td>
                          <td className="ex">
                            법정동/행정동 코드
                            <ul>
                              <li>키워드가 법정동 검색일 때, 결과값은 법정동 코드</li>
                              <li>키워드가 행정동 검색일 때, 결과값은 행정동 코드</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="3">address</td>
                          <td className="type">String</td>
                          <td className="ex">주소</td>
                        </tr>
                        <tr>
                          <td colSpan="3">jibun</td>
                          <td className="type">String</td>
                          <td className="ex">지번</td>
                        </tr>
                        <tr>
                          <td colSpan="3">roadname</td>
                          <td className="type">String</td>
                          <td className="ex">새 주소 도로명</td>
                        </tr>
                        <tr>
                          <td colSpan="3">roadjibun</td>
                          <td className="type">String</td>
                          <td className="ex">새 주소 지번</td>
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

export default WebIntegratedSearchPage;
