import CustomModal from "components/CustomModal";
import DoitBtn from "components/DoitBtn";
import MapDesc from "components/MapDesc";
import MapTitle from "components/MapTitle";
import React from "react";
import WebRestInnerLayout from "../../WebRestInnerLayout";

const WebRouteTimePage = () => {
  return (
    <>
      <CustomModal
        label="모빌리티를 위한 출발/도착시간 예측 경로 탐색"
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
                <td>startX</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">출발지 X좌표</td>
              </tr>
              <tr>
                <td>startY</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">출발지 Y좌표</td>
              </tr>
              <tr>
                <td>endX</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">목적지 X좌표</td>
              </tr>
              <tr>
                <td>endY</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">목적지 Y좌표</td>
              </tr>
              <tr>
                <td>type</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  기준 시간
                  <ul>
                    <li>출발 시간 기준 : start</li>
                    <li>도착 시간 기준 : end</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>year</td>
                <td className="type">Integer</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">기준 년</td>
              </tr>
              <tr>
                <td>month</td>
                <td className="type">Integer</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">기준 월</td>
              </tr>
              <tr>
                <td>day</td>
                <td className="type">Integer</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">기준 일</td>
              </tr>
              <tr>
                <td>hour</td>
                <td className="type">Integer</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">기준 시간 (시)</td>
              </tr>
              <tr>
                <td>minutes</td>
                <td className="type">Integer</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">기준 시간 (분)</td>
              </tr>
              <tr>
                <td>via1X</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">경유지1 X좌표</td>
              </tr>
              <tr>
                <td>via1Y</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">경유지1 Y좌표</td>
              </tr>
              <tr>
                <td>via2X</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">경유지2 X좌표</td>
              </tr>
              <tr>
                <td>via2Y</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">경유지2 Y좌표</td>
              </tr>

              <tr>
                <td>coordType</td>
                <td className="type">String</td>
                <td>X</td>
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
                <td>carType</td>
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
                    <li>1 : 1종(소형차)</li>
                    <li>2 : 2종(중형차)</li>
                    <li>3 : 3종(대형차)</li>
                    <li>4 : 4종(대형화물차)</li>
                    <li>5 : 5종(특수화물차)</li>
                    <li>6 : 경차(통행료할인적용)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>useTrafficColor</td>
                <td className="type">Boolean</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  도로 교통 색상 반환 유무 (true, false)
                  <span>Default : true</span>
                </td>
              </tr>
              <tr>
                <td>guideTop</td>
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
              <tr>
                <td>groupByTrafficColor</td>
                <td className="type">Boolean</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  세부경로목록 (paths) 정보를 교통색상별로 그룹핑하여 반환할지 여부
                  <span>Default : false</span>
                </td>
              </tr>
              <tr>
                <td>beforeCount</td>
                <td className="type">Integer</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  기준 시간 이전 탐색 개수
                  <span>Default : 0</span>
                </td>
              </tr>
              <tr>
                <td>afterCount</td>
                <td className="type">Integer</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  기준 시간 이후 탐색 개수
                  <span>Default : 0</span>
                </td>
              </tr>
              <tr>
                <td>interval</td>
                <td className="type">Integer</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  기준 시간 이전/이후 시간 Interval (분)
                  <span>Default : 15</span>
                </td>
              </tr>
              <tr>
                <td>useTaxifare</td>
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
                    <li>1 : 사용 (일반 택시)</li>
                    <li>2 : 사용 (모범 택시)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>searchByAddress</td>
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
                <td>usageType</td>
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
              {/* //{" "}
            <tr>
              // <td>useTaxifare</td>
              // <td className="type">String</td>
              // <td>X</td>
              //{" "}
              <td className="ex">
                예상 택시 요금 조회 여부 //{" "}
                <ul>
                  // <li>0 : 미사용</li>
                  // <li>1 : 사용 (일반 택시)</li>
                  // <li>2 : 사용 (모범 택시)</li>
                  //{" "}
                </ul>
                //{" "}
              </td>
              //{" "}
            </tr>
            // 20.12.10 ondaTaxi 선 적용 //{" "}
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
        <MapTitle label="모빌리티를 위한 출발/도착시간 예측 경로 탐색" />
        <div className="contents no-border">
          <MapDesc
            label={
              <>
                출발/도착지 지정과 함께 출발 또는 도착 시간을 예정(설정)하면, 통계 정보를 바탕으로 예측에 의한 최적 경로를 탐색합니다. <br />
                특정 시간에 출발하면 언제 도착하는지, 특정 시간에 도착하려면 언제 출발해야 하는지 등을 예측 경로 탐색 기능을 통해 가늠해보세요.
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
                          <th className="type">Http Method</th>
                          <th className="url">URL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>GET</td>
                          <td className="url">https://api-maps.cloud.toast.com/maps/v3.0/appkeys/&#123;appkey&#125;/route-time</td>
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
                        <tr>
                          <th>값</th>
                          <th className="type">타입</th>
                          <th>필수</th>
                          <th className="ex">설명</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>startX</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">출발지 X좌표</td>
                        </tr>
                        <tr>
                          <td>startY</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">출발지 Y좌표</td>
                        </tr>
                        <tr>
                          <td>endX</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">목적지 X좌표</td>
                        </tr>
                        <tr>
                          <td>endY</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">목적지 Y좌표</td>
                        </tr>
                        <tr>
                          <td>type</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">
                            기준 시간
                            <ul>
                              <li>출발 시간 기준 : start</li>
                              <li>도착 시간 기준 : end</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>year</td>
                          <td className="type">Integer</td>
                          <td>O</td>
                          <td className="ex">기준 년</td>
                        </tr>
                        <tr>
                          <td>month</td>
                          <td className="type">Integer</td>
                          <td>O</td>
                          <td className="ex">기준 월</td>
                        </tr>
                        <tr>
                          <td>day</td>
                          <td className="type">Integer</td>
                          <td>O</td>
                          <td className="ex">기준 일</td>
                        </tr>
                        <tr>
                          <td>hour</td>
                          <td className="type">Integer</td>
                          <td>O</td>
                          <td className="ex">기준 시간 (시)</td>
                        </tr>
                        <tr>
                          <td>minutes</td>
                          <td className="type">Integer</td>
                          <td>O</td>
                          <td className="ex">기준 시간 (분)</td>
                        </tr>
                        <tr>
                          <td>via1X</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">경유지1 X좌표</td>
                        </tr>
                        <tr>
                          <td>via1Y</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">경유지1 Y좌표</td>
                        </tr>
                        <tr>
                          <td>via2X</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">경유지2 X좌표</td>
                        </tr>
                        <tr>
                          <td>via2Y</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">경유지2 Y좌표</td>
                        </tr>
                        <tr data-name="via3X">
                          <td>via3X</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">경유지3 X좌표</td>
                        </tr>
                        <tr data-name="via3Y">
                          <td>via3Y</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">경유지3 Y좌표</td>
                        </tr>
                        <tr data-name="via4X">
                          <td>via4X</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">경유지4 X좌표</td>
                        </tr>
                        <tr data-name="via4Y">
                          <td>via4Y</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">경유지4 Y좌표</td>
                        </tr>
                        <tr data-name="via5X">
                          <td>via5X</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">경유지5 X좌표</td>
                        </tr>
                        <tr data-name="via5Y">
                          <td>via5Y</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">경유지5 Y좌표</td>
                        </tr>
                        <tr>
                          <td>coordType</td>
                          <td className="type">String</td>
                          <td>X</td>
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
                          <td>carType</td>
                          <td className="type">Integer</td>
                          <td>X</td>
                          <td className="ex">
                            톨게이트비 계산을 위한 차종
                            <ul>
                              <li>Default : 1</li>
                              <li>ex) carType=1</li>
                              <li>1 : 1종(소형차)</li>
                              <li>2 : 2종(중형차)</li>
                              <li>3 : 3종(대형차)</li>
                              <li>4 : 4종(대형화물차)</li>
                              <li>5 : 5종(특수화물차)</li>
                              <li>6 : 경차(통행료할인적용)</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>useTrafficColor</td>
                          <td className="type">Boolean</td>
                          <td>X</td>
                          <td className="ex">
                            도로 교통 색상 반환 유무 (true, false)
                            <span>Default : true</span>
                          </td>
                        </tr>
                        <tr>
                          <td>guideTop</td>
                          <td className="type">Integer</td>
                          <td>X</td>
                          <td className="ex">
                            표출할 안내 정보 개수
                            <span>Default : 5</span>
                          </td>
                        </tr>
                        <tr>
                          <td>groupByTrafficColor</td>
                          <td className="type">Boolean</td>
                          <td>X</td>
                          <td className="ex">
                            세부경로목록 (paths) 정보를 교통색상별로 그룹핑하여 반환할지 여부
                            <span>Default : false</span>
                          </td>
                        </tr>
                        <tr>
                          <td>beforeCount</td>
                          <td className="type">Integer</td>
                          <td>X</td>
                          <td className="ex">
                            기준 시간 이전 탐색 개수
                            <span>Default : 0</span>
                          </td>
                        </tr>
                        <tr>
                          <td>afterCount</td>
                          <td className="type">Integer</td>
                          <td>X</td>
                          <td className="ex">
                            기준 시간 이후 탐색 개수
                            <span>Default : 0</span>
                          </td>
                        </tr>
                        <tr>
                          <td>interval</td>
                          <td className="type">Integer</td>
                          <td>X</td>
                          <td className="ex">
                            기준 시간 이전/이후 시간 Interval (분)
                            <span>Default : 15</span>
                          </td>
                        </tr>
                        <tr>
                          <td>useTaxifare</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            예상 택시 요금 조회 여부
                            <ul>
                              <li>Default : 0</li>
                              <li>0 : 미사용</li>
                              <li>1 : 사용 (일반 택시)</li>
                              <li>2 : 사용 (모범 택시)</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>searchByAddress</td>
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
                          <td>usageType</td>
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
                        {/* //{" "}
                        <tr>
                          // <td>useTaxifare</td>
                          // <td className="type">String</td>
                          // <td>X</td>
                          //{" "}
                          <td className="ex">
                            예상 택시 요금 조회 여부 //{" "}
                            <ul>
                              // <li>0 : 미사용</li>
                              // <li>1 : 사용 (일반 택시)</li>
                              // <li>2 : 사용 (모범 택시)</li>
                              //{" "}
                            </ul>
                            //{" "}
                          </td>
                          //{" "}
                        </tr>
                        // 20.12.10 ondaTaxi 선 적용 //{" "}
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
                      </tbody>
                    </table>
                  </li>
                  <li className="cont-list">
                    <p className="cont-title">Response Field</p>
                    <table>
                      <thead>
                        <tr>
                          <th colSpan="7">값</th>
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
                          <td colSpan="6">isSuccessful</td>
                          <td className="type">Boolean</td>
                          <td className="ex">성공 여부</td>
                        </tr>
                        <tr>
                          <td colSpan="6">resultCode</td>
                          <td className="type">Integer</td>
                          <td className="ex">실패 코드</td>
                        </tr>
                        <tr>
                          <td colSpan="6">resultMessage</td>
                          <td className="type">String</td>
                          <td className="ex">실패 메시지</td>
                        </tr>
                        <tr>
                          <td rowSpan="100">
                            route
                            <span>(Object)</span>
                          </td>
                          <td rowSpan="100">
                            data
                            <span>(Object)</span>
                            <span>경로 정보</span>
                          </td>
                          <td colSpan="5">spend_time</td>
                          <td className="type">Integer</td>
                          <td className="ex">소요 시간 (초)</td>
                        </tr>
                        <tr>
                          <td colSpan="5">distance</td>
                          <td className="type">Integer</td>
                          <td className="ex">거리 (m)</td>
                        </tr>
                        <tr>
                          <td colSpan="5">toll_fee</td>
                          <td className="type">Integer</td>
                          <td className="ex">톨게이트 요금</td>
                        </tr>
                        <tr>
                          <td colSpan="5">taxiFare</td>
                          <td className="type">Integer</td>
                          <td className="ex">
                            예상 택시 요금
                            <span>
                              useTaxifare 값이 1,2일 때만 결과값 표출, <strong>totalTaxiFare 사용 권장</strong>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="5">totalTaxiFare</td>
                          <td className="type">String</td>
                          <td className="ex">
                            예상 택시 요금
                            <span>(모든 useTaxifare 값에 사용)</span>
                            <span>useTaxifare 값이 3일 때 일반택시, 모범택시 요금 표출</span>
                          </td>
                        </tr>
                        <tr>
                          <td rowSpan="13">
                            times
                            <span>(Object, Array)</span>
                            <span>세부 경로 목록</span>
                          </td>
                          <td colSpan="4">index</td>
                          <td className="type">Integer</td>
                          <td className="ex">
                            기준 시간 대비 Index (0 이면 기준 시간)
                            <ul>
                              <li>30분 전 (Index -2)</li>
                              <li>15분 전 (Index -1)</li>
                              <li>
                                <strong>기준시간 (Index 0)</strong>
                              </li>
                              <li>15분 이후 (Index 1)</li>
                              <li>30분 이후 (Index 2)</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="4">spend_time</td>
                          <td className="type">Integer</td>
                          <td className="ex">소요 시간 (초)</td>
                        </tr>
                        <tr>
                          <td colSpan="4">distance</td>
                          <td className="type">Integer</td>
                          <td className="ex">거리 (m)</td>
                        </tr>
                        <tr>
                          <td rowSpan="5">
                            start_time
                            <span>(Object, Array)</span>
                            <span>출발 시간</span>
                          </td>
                          <td colSpan="3">year</td>
                          <td className="type">Object</td>
                          <td className="ex">년</td>
                        </tr>
                        <tr>
                          <td colSpan="3">month</td>
                          <td className="type">Object</td>
                          <td className="ex">월</td>
                        </tr>
                        <tr>
                          <td colSpan="3">day</td>
                          <td className="type">Object</td>
                          <td className="ex">일</td>
                        </tr>
                        <tr>
                          <td colSpan="3">hour</td>
                          <td className="type">Object</td>
                          <td className="ex">시</td>
                        </tr>
                        <tr>
                          <td colSpan="3">minutes</td>
                          <td className="type">Object</td>
                          <td className="ex">분</td>
                        </tr>
                        <tr>
                          <td rowSpan="5">
                            end_time
                            <span>(Object, Array)</span>
                            <span>도착시간</span>
                          </td>
                          <td colSpan="3">year</td>
                          <td className="type">Object</td>
                          <td className="ex">년</td>
                        </tr>
                        <tr>
                          <td colSpan="3">month</td>
                          <td className="type">Object</td>
                          <td className="ex">월</td>
                        </tr>
                        <tr>
                          <td colSpan="3">day</td>
                          <td className="type">Object</td>
                          <td className="ex">일</td>
                        </tr>
                        <tr>
                          <td colSpan="3">hour</td>
                          <td className="type">Object</td>
                          <td className="ex">시</td>
                        </tr>
                        <tr>
                          <td colSpan="3">minutes</td>
                          <td className="type">Object</td>
                          <td className="ex">분</td>
                        </tr>
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
                          <td colSpan="3">x</td>
                          <td className="type">Double</td>
                          <td className="ex">X좌표</td>
                        </tr>
                        <tr>
                          <td colSpan="3">y</td>
                          <td className="type">Double</td>
                          <td className="ex">Y좌표</td>
                        </tr>
                        <tr>
                          <td colSpan="4">speed</td>
                          <td className="type">Integer</td>
                          <td className="ex">속도</td>
                        </tr>
                        <tr>
                          <td colSpan="4">spend_time</td>
                          <td className="type">Integer</td>
                          <td className="ex">소요 시간 (초)</td>
                        </tr>
                        <tr>
                          <td colSpan="4">distance</td>
                          <td className="type">Integer</td>
                          <td className="ex">거리 (m)</td>
                        </tr>
                        <tr>
                          <td colSpan="4">road_code</td>
                          <td className="type">Integer</td>
                          <td className="ex">도로 종별 코드</td>
                        </tr>
                        <tr>
                          <td colSpan="4">traffic_color</td>
                          <td className="type">String</td>
                          <td className="ex">도로 교통 색상</td>
                        </tr>
                        <tr>
                          <td rowSpan="9">
                            guides
                            <span>(Object, Array)</span>
                            <span>주요 도로 정보 목록</span>
                          </td>
                          <td rowSpan="2">
                            coords
                            <span>(Object, Array)</span>
                            <span>상세 좌표 목록</span>
                          </td>
                          <td colSpan="3">x</td>
                          <td className="type">Array</td>
                          <td className="ex">X좌표</td>
                        </tr>
                        <tr>
                          <td colSpan="3">y</td>
                          <td className="type">Array</td>
                          <td className="ex">Y좌표</td>
                        </tr>
                        <tr>
                          <td colSpan="4">distance</td>
                          <td className="type">Integer</td>
                          <td className="ex">거리 (m)</td>
                        </tr>
                        <tr>
                          <td colSpan="4">name</td>
                          <td className="type">String</td>
                          <td className="ex">도로명</td>
                        </tr>
                        <tr>
                          <td colSpan="4">road_code</td>
                          <td className="type">Integer</td>
                          <td className="ex">도로 종별 코드</td>
                        </tr>
                        <tr>
                          <td colSpan="4">score</td>
                          <td className="type">Integer</td>
                          <td className="ex">비중</td>
                        </tr>
                        <tr>
                          <td colSpan="4">speed</td>
                          <td className="type">Integer</td>
                          <td className="ex">속도 (km)</td>
                        </tr>
                        <tr>
                          <td colSpan="4">type</td>
                          <td className="type">String</td>
                          <td className="ex">도로 타입</td>
                        </tr>
                        <tr>
                          <td colSpan="4">traffic_color</td>
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

export default WebRouteTimePage;
