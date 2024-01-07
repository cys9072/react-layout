import CustomModal from "components/CustomModal";
import DoitBtn from "components/DoitBtn";
import MapDesc from "components/MapDesc";
import MapTitle from "components/MapTitle";
import React from "react";
import WebRestInnerLayout from "../../WebRestInnerLayout";

const WebRouteNormalPage = () => {
  return (
    <>
      <CustomModal
        label="모빌리티를 위한 스마트 경로 탐색"
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
                <td>option</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  경로탐색 옵션
                  <ul>
                    <li>탐색 option 하나만 가능</li>
                    <li>ex) option=real_traffic</li>
                    <li>real_traffic : 실시간 추천1</li>
                    <li>real_traffic2 : 실시간 추천2</li>
                    <li>real_traffic_freeroad : 실시간 (무료)</li>
                    <li>short_distance_priority : 최단거리</li>
                    <li>motorcycle : 이륜차</li>
                    <li>recommendation : 추천</li>
                    <li>highway_priority : 고속도로 우선</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>coordType</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" placeholder="wgs84" />
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

              <tr data-name="useAngle">
                <td>useAngle</td>
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
                <td>angle</td>
                <td className="type">Integer</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  각도
                  <ul>
                    <li>Default : 0</li>
                    <li>useAngle 이 true 일 때만 동작, 0 ˚~ 359 ˚ 까지 사용 가능</li>
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
                    <li>1 : 1종 (소형차)</li>
                    <li>2 : 2종 (중형차)</li>
                    <li>3 : 3종 (대형차)</li>
                    <li>4 : 4종 (대형화물차)</li>
                    <li>5 : 5종 (특수화물차)</li>
                    <li>6 : 경차 (통행료할인적용)</li>
                  </ul>
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
                  세부 경로 목록 (paths) 정보를 교통색상별로 그룹핑하여 반환할지 여부
                  <span>Default : false</span>
                </td>
              </tr>
              {/* // <tr>
    //   <td>searchTypeS</td>
    //   <td className='type'>String</td>
    //   <td>X</td>
    //   <td className='ex'>출발지 검색 타입
    //     <ul>
    //       <li>통합 검색 : 0</li>
    //       <li>지도 지정 : 1</li>
    //     </ul>
    //   </td>
    // </tr>
    // <tr>
    //   <td>searchTypeE</td>
    //   <td className='type'>String</td>
    //   <td>X</td>
    //   <td className='ex'>목적지 검색 타입
    //     <ul>
    //       <li>통합 검색 : 0</li>
    //       <li>지도 지정 : 1</li>
    //     </ul>
    //   </td>
    // </tr> */}
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
              {/* // 20.12.10 ondaTaxi 선 적용
    // <tr>
    //   <td colSpan='2'>useTaxifare</td>
    //   <td className='type'>String</td>
    //   <td>X</td>
    //   <td className='ex'>예상 택시 요금 조회 여부
    //     <ul>
    //       <li>Default : 0</li>
    //       <li>0 : 미사용</li>
    //       <li>1 : 일반택시</li>
    //       <li>2 : 모범택시</li>
    //       <li>3 : 일반택시 + 모범택시</li>
    //     </ul>
    //   </td>
    // </tr> */}
              <tr>
                <td>useStartDirection</td>
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
        <MapTitle label="모빌리티를 위한 스마트 경로 탐색" />
        <div className="contents no-border">
          <MapDesc
            label={
              <>
                출발/도착지로 지정한 지점 간 경로를 탐색하고, 다양한 옵션을 바탕으로 최적의 경로 정보를 스마트하게 제공합니다. <br />
                다양한 옵션과 함께 스마트한 경로 탐색 기능을 확인해 보세요.
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
                          <td colSpan="3">GET, POST</td>
                          <td className="url">https://api-maps.cloud.toast.com/maps/v3.0/appkeys/&#123;appkey&#125;/route-normal</td>
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
                          <td>option</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">
                            경로탐색 옵션
                            <ul>
                              <li>탐색 option 하나만 가능</li>
                              <li>ex) option=real_traffic</li>
                              <li>real_traffic : 실시간 추천1</li>
                              <li>real_traffic2 : 실시간 추천2</li>
                              <li>real_traffic_freeroad : 실시간 (무료)</li>
                              <li>short_distance_priority : 최단거리</li>
                              <li>motorcycle : 이륜차</li>
                              <li>recommendation : 추천</li>
                              <li>highway_priority : 고속도로 우선</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>coordType</td>
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
                        <tr data-name="useAngle">
                          <td>useAngle</td>
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
                          <td>angle</td>
                          <td className="type">Integer</td>
                          <td>X</td>
                          <td className="ex">
                            각도
                            <ul>
                              <li>Default : 0</li>
                              <li>useAngle 이 true 일 때만 동작, 0 ˚~ 359 ˚ 까지 사용 가능</li>
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
                              <li>1 : 1종 (소형차)</li>
                              <li>2 : 2종 (중형차)</li>
                              <li>3 : 3종 (대형차)</li>
                              <li>4 : 4종 (대형화물차)</li>
                              <li>5 : 5종 (특수화물차)</li>
                              <li>6 : 경차 (통행료할인적용)</li>
                            </ul>
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
                            세부 경로 목록 (paths) 정보를 교통색상별로 그룹핑하여 반환할지 여부
                            <span>Default : false</span>
                          </td>
                        </tr>
                        {/* // <tr>
                //   <td>searchTypeS</td>
                //   <td className='type'>String</td>
                //   <td>X</td>
                //   <td className='ex'>출발지 검색 타입
                //     <ul>
                //       <li>통합 검색 : 0</li>
                //       <li>지도 지정 : 1</li>
                //     </ul>
                //   </td>
                // </tr>
                // <tr>
                //   <td>searchTypeE</td>
                //   <td className='type'>String</td>
                //   <td>X</td>
                //   <td className='ex'>목적지 검색 타입
                //     <ul>
                //       <li>통합 검색 : 0</li>
                //       <li>지도 지정 : 1</li>
                //     </ul>
                //   </td>
                // </tr> */}
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
                        {/* // 20.12.10 ondaTaxi 선 적용
                // <tr>
                //   <td colSpan='2'>useTaxifare</td>
                //   <td className='type'>String</td>
                //   <td>X</td>
                //   <td className='ex'>예상 택시 요금 조회 여부
                //     <ul>
                //       <li>Default : 0</li>
                //       <li>0 : 미사용</li>
                //       <li>1 : 일반택시</li>
                //       <li>2 : 모범택시</li>
                //       <li>3 : 일반택시 + 모범택시</li>
                //     </ul>
                //   </td>
                // </tr> */}
                        <tr>
                          <td>useStartDirection</td>
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
                          <td rowSpan="14">
                            route
                            <span>(Object)</span>
                          </td>
                          <td rowSpan="14">
                            data
                            <span>(Object)</span>
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
                        <tr>
                          <td colSpan="3">taxiFare</td>
                          <td className="type">Integer</td>
                          <td className="ex">예상 택시 요금</td>
                        </tr>
                        {/* // 20.12.10 ondaTaxi 선 적용
                // <tr>
                //   <td colSpan='3'>taxiFare</td>
                //   <td className='type'>Integer</td>
                //   <td className='ex'>예상 택시 요금
                //     <span>useTaxifare값이 1,2 일때만 결과값 표출, totalTaxiFare 사용 권장</span>
                //   </td>
                // </tr>
                // <tr>
                //   <td colSpan='3'>totalTaxiFare</td>
                //   <td className='type'>String</td>
                //   <td className='ex'>예상 택시 요금
                //     <span>(모든 useTaxifare 값에 사용)</span>
                //     <span>useTaxifare값이 3 일때 일반택시, 모범택시 요금 표출 </span>
                //   </td>
                // </tr>
                // <tr>
                //   <td colSpan='3'>searchType</td>
                //   <td className='type'>String</td>
                //   <td className='ex'>검색 타입
                //     <ul>
                //       <li>통합 검색 : 0</li>
                //       <li>지도 지정 : 1</li>
                //     </ul>
                //   </td>
                // </tr> */}
                        <tr>
                          <td colSpan="3">isHighWay</td>
                          <td className="type">Boolean</td>
                          <td className="ex">
                            고속도로 여부
                            <ul>
                              <li>true : 목적지가 고속도로 or 도시고속</li>
                              <li>false : 그 외에 일반도로</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td rowSpan="7">
                            paths
                            <span>(Array)</span>
                            <span>세부 경로 목록</span>
                          </td>
                          <td rowSpan="2">
                            coords
                            <span>(Array)</span>
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

export default WebRouteNormalPage;
