import CustomModal from "components/CustomModal";
import DoitBtn from "components/DoitBtn";
import MapDesc from "components/MapDesc";
import MapTitle from "components/MapTitle";
import React from "react";
import WebRestInnerLayout from "../../WebRestInnerLayout";

const WebRouteMultiplePage = () => {
  return (
    <>
      <CustomModal
        label="모빌리티를 위한 다중 경유지 추가"
        countLabel={"경유지 개수 (viaCnt) (최대 100개)"}
        requestParameters={
          <table>
            <thead>
              <tr data-name="theadInTr">
                <th colSpan="2">값</th>
                <th className="type">타입</th>
                <th>필수</th>
                <th>입력값</th>
                <th className="ex">설명</th>
              </tr>
            </thead>
            <tbody>
              <tr data-name="startX">
                <td colSpan="2">startX</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">출발지 X좌표</td>
              </tr>
              <tr data-name="startY">
                <td colSpan="2">startY</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">출발지 Y좌표</td>
              </tr>
              <tr data-name="endX">
                <td colSpan="2">endX</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">목적지 X좌표</td>
              </tr>
              <tr data-name="endY">
                <td colSpan="2">endY</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">목적지 Y좌표</td>
              </tr>
              <tr data-name="option">
                <td colSpan="2">option</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  경로 탐색 옵션
                  <ul>
                    <li>탐색 옵션 ',' 단위로 요청</li>
                    <li>ex) option=real_traffic,real_traffic2</li>
                    <li>real_traffic : 실시간 추천1</li>
                    <li>real_traffic2 : 실시간 추천2</li>
                    <li>real_traffic_freeroad : 실시간 (무료)</li>
                    <li>short_distance_priority : 단거리</li>
                    <li>motorcycle : 이륜차</li>
                    <li>highway_priority : 고속도로 우선</li>
                  </ul>
                </td>
              </tr>
              <tr data-name="coordType">
                <td colSpan="2">coordType</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  좌표 타입
                  <ul>
                    <li>Default : wgs84</li>
                    <li>tw : 팅크웨어 좌표</li>
                    <li>wgs84</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td colSpan="2">viaList[0].viaX </td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" placeholder="ex)127.109600" />
                </td>
                <td className="ex">경유지 X좌표</td>
              </tr>
              <tr>
                <td colSpan="2">viaList[0].viaY </td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" placeholder="ex)37.392037" />
                </td>
                <td className="ex">경유지 Y좌표</td>
              </tr>

              <tr data-name="useAngle" colSpan="2">
                <td colSpan="2">useAngle</td>
                <td className="type">Boolean</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  출발 지점의 주행 방향 옵션
                  <ul>
                    <li>Default: false</li>
                    <li>true : 주행 방향 우선</li>
                    <li>false : 주행 방향 비우선</li>
                  </ul>
                </td>
              </tr>
              <tr data-name="angle">
                <td colSpan="2">angle</td>
                <td className="type">Integer</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  각도
                  <ul>
                    <li>Default: 0</li>
                    <li>useAngle 이 true 일 때만 동작, 0 ˚~ 359 ˚ 까지 사용 가능</li>
                  </ul>
                </td>
              </tr>
              <tr data-name="carType">
                <td colSpan="2">carType</td>
                <td className="type">Integer</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  톨게이트비 계산을 위한 차종
                  <ul>
                    <li>Default : 1</li>
                    <li>ex) carType=1</li>
                    <li>1 : 1종 (소형차)</li>
                    <li>2 : 2종 (중형차)</li>
                    <li>3 : 3종 (대형차)</li>
                    <li>4 : 4종 (대형화물차)</li>
                    <li>5 : 5종 (특수화물차)</li>
                    <li>6 : 경차 (통행료할인적용)</li>
                  </ul>
                </td>
              </tr>
              <tr data-name="guideTop">
                <td colSpan="2">guideTop</td>
                <td className="type">Integer</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  표출할 안내 정보 개수
                  <span>Default : 5</span>
                </td>
              </tr>
              <tr data-name="groupByTrafficColor">
                <td colSpan="2">groupByTrafficColor</td>
                <td className="type">Boolean</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  세부 경로 목록 (paths) 정보를 교통색상별로 그룹핑하여 반환할지 여부
                  <span>Default : false</span>
                </td>
              </tr>
              <tr data-name="useTaxifare">
                <td colSpan="2">useTaxifare</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  예상 택시 요금 조회 여부
                  <ul>
                    <li>Default : 0</li>
                    <li>0 : 미사용</li>
                    <li>1 : 사용</li>
                  </ul>
                </td>
              </tr>
              {/* // 20.12.10 ondaTaxi 선 적용 //{" "}
            <tr>
              // <td colSpan="2">useTaxifare</td>
              // <td className="type">String</td>
              // <td>X</td>
              <td>
              <input type="text" /></td>
              //{" "}
              <td className="ex">
                예상 택시 요금 조회 여부 //{" "}
                <ul>
                  // <li>Default : 0</li>
                  // <li>0 : 미사용</li>
                  // <li>1 : 일반택시</li>
                  // <li>2 : 모범택시</li>
                  // <li>3 : 일반택시 + 모범택시</li>
                  //{" "}
                </ul>
                //{" "}
              </td>
              //{" "}
            </tr> */}
              <tr data-name="useStartDirection">
                <td colSpan="2">useStartDirection</td>
                <td className="type">Boolean</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  출발지 좌표 기준 탐색 방향 지정 프로젝션 기능 여부
                  <ul>
                    <li> Default : false</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td colSpan="2">searchByAddress</td>
                <td className="type">Boolean</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  주소 기반 경로 탐색 여부
                  <ul>
                    <li> Default : false</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td colSpan="2">usageType</td>
                <td className="type">Integer</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  차량 용도
                  <ul>
                    <li> Default : 0</li>
                    <li> 일반 : 0</li>
                    <li> 택시 : 1 (탐색 옵션이 recommendation 일 경우에만 적용)</li>
                  </ul>
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
        <MapTitle label="모빌리티를 위한 다중 경유지 추가" />
        <div className="contents no-border">
          <MapDesc
            label={
              <>
                기존 경로 상에 다수의 경유지를 추가로 반영하여 경로 탐색이 가능합니다.
                <br />
                경유지를 추가해 보세요.
                <br />
                - 경유지 추가는 최대 100개까지 가능합니다.
                <br />- 다수의 경유지 추가 지정이 발생하 수 있는 딜리버리 및 모빌리티 서비스에 적합합니다.
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
                          <th className="type" colSpan="3">
                            Http Method
                          </th>
                          <th className="ex" colSpan="2">
                            URL
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="3">POST</td>
                          <td className="url">https://api-maps.cloud.toast.com/maps/v3.0/appkeys/&#123;appkey&#125;/route-normal-via</td>
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
                    <p className="cont-title">Request Parameters</p>
                    <table>
                      <thead>
                        <tr data-name="theadInTr">
                          <th colSpan="2">값</th>
                          <th className="type">타입</th>
                          <th>필수</th>
                          <th className="ex">설명</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr data-name="startX">
                          <td colSpan="2">startX</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">출발지 X좌표</td>
                        </tr>
                        <tr data-name="startY">
                          <td colSpan="2">startY</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">출발지 Y좌표</td>
                        </tr>
                        <tr data-name="endX">
                          <td colSpan="2">endX</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">목적지 X좌표</td>
                        </tr>
                        <tr data-name="endY">
                          <td colSpan="2">endY</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">목적지 Y좌표</td>
                        </tr>
                        <tr data-name="option">
                          <td colSpan="2">option</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">
                            경로 탐색 옵션
                            <ul>
                              <li>탐색 옵션 ',' 단위로 요청</li>
                              <li>ex) option=real_traffic,real_traffic2</li>
                              <li>real_traffic : 실시간 추천1</li>
                              <li>real_traffic2 : 실시간 추천2</li>
                              <li>real_traffic_freeroad : 실시간 (무료)</li>
                              <li>short_distance_priority : 단거리</li>
                              <li>motorcycle : 이륜차</li>
                              <li>highway_priority : 고속도로 우선</li>
                            </ul>
                          </td>
                        </tr>
                        <tr data-name="coordType">
                          <td colSpan="2">coordType</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">
                            좌표 타입
                            <ul>
                              <li>Default : wgs84</li>
                              <li>tw : 팅크웨어 좌표</li>
                              <li>wgs84</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td rowSpan="2">
                            viaList
                            <span>(Array)</span>
                            <span>경유지 정보</span>
                          </td>
                          <td>viaX</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">경유지 X좌표</td>
                        </tr>
                        <tr>
                          <td>viaY</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">경유지 Y좌표</td>
                        </tr>
                        <tr data-name="useAngle" colSpan="2">
                          <td colSpan="2">useAngle</td>
                          <td className="type">Boolean</td>
                          <td>X</td>
                          <td className="ex">
                            출발 지점의 주행 방향 옵션
                            <ul>
                              <li>Default: false</li>
                              <li>true : 주행 방향 우선</li>
                              <li>false : 주행 방향 비우선</li>
                            </ul>
                          </td>
                        </tr>
                        <tr data-name="angle">
                          <td colSpan="2">angle</td>
                          <td className="type">Integer</td>
                          <td>X</td>
                          <td className="ex">
                            각도
                            <ul>
                              <li>Default: 0</li>
                              <li>useAngle 이 true 일 때만 동작, 0 ˚~ 359 ˚ 까지 사용 가능</li>
                            </ul>
                          </td>
                        </tr>
                        <tr data-name="carType">
                          <td colSpan="2">carType</td>
                          <td className="type">Integer</td>
                          <td>X</td>
                          <td className="ex">
                            톨게이트비 계산을 위한 차종
                            <ul>
                              <li>Default : 1</li>
                              <li>ex) carType=1</li>
                              <li>1 : 1종 (소형차)</li>
                              <li>2 : 2종 (중형차)</li>
                              <li>3 : 3종 (대형차)</li>
                              <li>4 : 4종 (대형화물차)</li>
                              <li>5 : 5종 (특수화물차)</li>
                              <li>6 : 경차 (통행료할인적용)</li>
                            </ul>
                          </td>
                        </tr>
                        <tr data-name="guideTop">
                          <td colSpan="2">guideTop</td>
                          <td className="type">Integer</td>
                          <td>X</td>
                          <td className="ex">
                            표출할 안내 정보 개수
                            <span>Default : 5</span>
                          </td>
                        </tr>
                        <tr data-name="groupByTrafficColor">
                          <td colSpan="2">groupByTrafficColor</td>
                          <td className="type">Boolean</td>
                          <td>X</td>
                          <td className="ex">
                            세부 경로 목록 (paths) 정보를 교통색상별로 그룹핑하여 반환할지 여부
                            <span>Default : false</span>
                          </td>
                        </tr>
                        <tr data-name="useTaxifare">
                          <td colSpan="2">useTaxifare</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            예상 택시 요금 조회 여부
                            <ul>
                              <li>Default : 0</li>
                              <li>0 : 미사용</li>
                              <li>1 : 사용</li>
                            </ul>
                          </td>
                        </tr>
                        {/* // 20.12.10 ondaTaxi 선 적용 //{" "}
                        <tr>
                          // <td colSpan="2">useTaxifare</td>
                          // <td className="type">String</td>
                          // <td>X</td>
                          //{" "}
                          <td className="ex">
                            예상 택시 요금 조회 여부 //{" "}
                            <ul>
                              // <li>Default : 0</li>
                              // <li>0 : 미사용</li>
                              // <li>1 : 일반택시</li>
                              // <li>2 : 모범택시</li>
                              // <li>3 : 일반택시 + 모범택시</li>
                              //{" "}
                            </ul>
                            //{" "}
                          </td>
                          //{" "}
                        </tr> */}
                        <tr data-name="useStartDirection">
                          <td colSpan="2">useStartDirection</td>
                          <td className="type">Boolean</td>
                          <td>X</td>
                          <td className="ex">
                            출발지 좌표 기준 탐색 방향 지정 프로젝션 기능 여부
                            <ul>
                              <li> Default : false</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="2">searchByAddress</td>
                          <td className="type">Boolean</td>
                          <td>X</td>
                          <td className="ex">
                            주소 기반 경로 탐색 여부
                            <ul>
                              <li> Default : false</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="2">usageType</td>
                          <td className="type">Integer</td>
                          <td>X</td>
                          <td className="ex">
                            차량 용도
                            <ul>
                              <li> Default : 0</li>
                              <li> 일반 : 0</li>
                              <li> 택시 : 1 (탐색 옵션이 recommendation 일 경우에만 적용)</li>
                            </ul>
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
                            <span>(Object, Array)</span>
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
                          <td rowSpan="14">
                            route
                            <span>(Object)</span>
                          </td>
                          <td rowSpan="14">
                            data
                            <span>(Object, Array)</span>
                            <span>경로 정보</span>
                          </td>
                          <td colSpan="3">option</td>
                          <td className="type">String</td>
                          <td className="ex">탐색 옵션</td>
                        </tr>
                        <tr>
                          <td colSpan="3">spend_time</td>
                          <td className="type">Integer</td>
                          <td className="ex">소요 시간 (초)</td>
                        </tr>
                        <tr>
                          <td colSpan="3">distance</td>
                          <td className="type">Integer</td>
                          <td className="ex">거리 (m)</td>
                        </tr>
                        <tr>
                          <td colSpan="3">toll_fee</td>
                          <td className="type">Integer</td>
                          <td className="ex">톨게이트 요금</td>
                        </tr>
                        {/* //{" "}
                        <tr>
                          // <td colSpan="3">taxiFare</td>
                          // <td className="type">Integer</td>
                          // <td className="ex">예상 택시 요금</td>
                          //{" "}
                        </tr>
                        // 20.12.10 ondaTaxi 선 적용 */}
                        <tr>
                          <td colSpan="3">taxiFare</td>
                          <td className="type">Integer</td>
                          <td className="ex">
                            예상 택시 요금
                            <span>useTaxifare값이 1,2 일때만 결과값 표출, totalTaxiFare 사용 권장</span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="3">totalTaxiFare</td>
                          <td className="type">String</td>
                          <td className="ex">
                            예상 택시 요금
                            <span>(모든 useTaxifare 값에 사용)</span>
                            <span>useTaxifare값이 3 일때 일반택시, 모범택시 요금 표출 </span>
                          </td>
                        </tr>
                        {/* //{" "}
                        <tr>
                          // <td colSpan="3">searchType</td>
                          // <td className="type">String</td>
                          //{" "}
                          <td className="ex">
                            검색 타입 //{" "}
                            <ul>
                              // <li>통합 검색 : 0</li>
                              // <li>지도 지정 : 1</li>
                              //{" "}
                            </ul>
                            //{" "}
                          </td>
                          //{" "}
                        </tr> */}
                        <tr>
                          <td rowSpan="7">
                            paths
                            <span>(Object, Array)</span>
                            <span>세부 경로 목록</span>
                          </td>
                          <td rowSpan="2">
                            coords
                            <span>(Object, Array)</span>
                            <span>상세 좌표 목록</span>
                          </td>
                          <td>x</td>
                          <td className="type">Double</td>
                          <td className="ex">
                            X좌표
                            <ul>
                              <li>(coordType에 따라 tw 또는 wgs84 좌표로 반환가능)</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>y</td>
                          <td className="type">Double</td>
                          <td className="ex">
                            Y좌표
                            <ul>
                              <li>(coordType에 따라 tw 또는 wgs84 좌표로 반환가능)</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="2">speed</td>
                          <td className="type">Integer</td>
                          <td className="ex">속도 (km)</td>
                        </tr>
                        <tr>
                          <td colSpan="2">spend_time</td>
                          <td className="type">Integer</td>
                          <td className="ex">소요 시간 (초)</td>
                        </tr>
                        <tr>
                          <td colSpan="2">distance</td>
                          <td className="type">Integer</td>
                          <td className="ex">거리 (m)</td>
                        </tr>
                        <tr>
                          <td colSpan="2">road_code</td>
                          <td className="type">Integer</td>
                          <td className="ex">도로 종별 코드</td>
                        </tr>
                        <tr>
                          <td colSpan="2">traffic_color</td>
                          <td className="type">String</td>
                          <td className="ex">도로 교통 색상</td>
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

export default WebRouteMultiplePage;
