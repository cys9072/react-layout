import CustomModal from "components/CustomModal";
import DoitBtn from "components/DoitBtn";
import MapDesc from "components/MapDesc";
import MapTitle from "components/MapTitle";
import React from "react";
import WebRestInnerLayout from "../../WebRestInnerLayout";

const WebRouteSummaryPage = () => {
  return (
    <>
      <CustomModal
        label="모빌리티를 위한 경로 탐색 정보 요약 (일반/경유지)"
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
                <td>coordType</td>
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
                <td>option</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  경로탐색 옵션
                  <ul>
                    <li>탐색 option ',' 단위로 요청</li>
                    <li>ex) option=real_traffic,real_traffic2</li>
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
                    <li>Default: 0</li>
                    <li>useAngle 이 true 일 때만 동작, 0 ˚~ 359 ˚ 까지 사용 가능</li>
                  </ul>
                </td>
              </tr>
              <tr data-name="usageType">
                <td>usageType</td>
                <td className="type">Integer</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  차량 용도
                  <ul>
                    <li>Default: 0</li>
                    <li>0 : 일반</li>
                    <li>1 : 택시</li>
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
        <MapTitle label="모빌리티를 위한 경로 탐색 정보 요약 (일반/경유지)" />
        <div className="contents no-border">
          <MapDesc
            label={
              <>
                경로 탐색에 대한 결과 정보를 요약 형태로 제공합니다. 일반적인 출발-도착지 설정 외에도 경유지를 추가하는 등 하나 이상의 탐색 옵션을 적용시킬 수 있습니다.
                <br />
                경로를 탐색하고 요약 정보를 확인해 보세요.
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
                          <td>GET, POST</td>
                          <td className="url">https://api-maps.cloud.toast.com/maps/v3.0/appkeys/&#123;appkey&#125;/route-summary</td>
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
                          <td>option</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">
                            경로탐색 옵션
                            <ul>
                              <li>탐색 option ',' 단위로 요청</li>
                              <li>ex) option=real_traffic,real_traffic2</li>
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
                              <li>Default: 0</li>
                              <li>useAngle 이 true 일 때만 동작, 0 ˚~ 359 ˚ 까지 사용 가능</li>
                            </ul>
                          </td>
                        </tr>
                        <tr data-name="usageType">
                          <td>usageType</td>
                          <td className="type">Integer</td>
                          <td>X</td>
                          <td className="ex">
                            차량 용도
                            <ul>
                              <li>Default: 0</li>
                              <li>0 : 일반</li>
                              <li>1 : 택시</li>
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
                          <th colSpan="3">값</th>
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
                          <td colSpan="2">isSuccessful</td>
                          <td className="type">Boolean</td>
                          <td className="ex">성공 여부</td>
                        </tr>
                        <tr>
                          <td colSpan="2">resultCode</td>
                          <td className="type">Integer</td>
                          <td className="ex">실패 코드</td>
                        </tr>
                        <tr>
                          <td colSpan="2">resultMessage</td>
                          <td className="type">String</td>
                          <td className="ex">실패 메시지</td>
                        </tr>
                        <tr>
                          <td rowSpan="3">
                            route
                            <span>(Object)</span>
                          </td>
                          <td rowSpan="3">
                            data
                            <span>(Array)</span>
                            <span>경로 정보</span>
                          </td>
                          <td>option</td>
                          <td className="type">String</td>
                          <td className="ex">옵션 명</td>
                        </tr>
                        <tr>
                          <td>spend_time</td>
                          <td className="type">Integer</td>
                          <td className="ex">소요 시간 (초)</td>
                        </tr>
                        <tr>
                          <td>distance</td>
                          <td className="type">Integer</td>
                          <td className="ex">거리 (m)</td>
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

export default WebRouteSummaryPage;
