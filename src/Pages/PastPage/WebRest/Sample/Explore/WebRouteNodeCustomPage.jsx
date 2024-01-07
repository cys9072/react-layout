import CustomModal from "components/CustomModal";
import DoitBtn from "components/DoitBtn";
import MapDesc from "components/MapDesc";
import MapTitle from "components/MapTitle";
import React from "react";
import WebRestInnerLayout from "../../WebRestInnerLayout";

const WebRouteNodeCustomPage = () => {
  return (
    <>
      <CustomModal
        label="모빌리티를 위한 커스텀 노드 경로 탐색"
        countLabel={"톨게이트 개수 (tollPassList) (최대 50개)"}
        otherCountLabel={"통과 도엽 개수 (passCnt) (최대 50개)"}
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
              <tr data-name="mapVersion">
                <td colSpan="2">mapVersion</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">지도 버전</td>
              </tr>
              <tr data-name="mapType">
                <td colSpan="2">mapType</td>
                <td className="type">Integer</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  지도 데이터 타입
                  <ul>
                    <li>MT : 0</li>
                    <li>MR : 1</li>
                  </ul>
                </td>
              </tr>
              <tr data-name="passCnt">
                <td colSpan="2">passCnt</td>
                <td className="type">Integer</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">통과 도엽 개수</td>
              </tr>

              <tr>
                <td colSpan="2">mapList[0].mapId </td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" placeholder="ex)161603" />
                </td>
                <td className="ex">Map ID</td>
              </tr>
              <tr>
                <td colSpan="2">mapList[0].nodeCnt </td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" placeholder="ex)2" />
                </td>
                <td className="ex">Node ID 개수</td>
              </tr>
              <tr>
                <td colSpan="2">mapList[0].nodeList </td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" placeholder="ex)1390, 1386" />
                </td>
                <td className="ex">Node ID 리스트</td>
              </tr>

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
              <tr data-name="coordType">
                <td colSpan="2">coordType</td>
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
              <tr data-name="carType">
                <td colSpan="2">carType</td>
                <td className="type">String</td>
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
                    <li>7 : 전기차(통행료할인적용)</li>
                    <li>8 : 전기차 택시(통행료할인적용)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td colSpan="2">tollPassList[0].tollgateName</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" placeholder="ex)고잔톨게이트" />
                </td>
                <td className="ex">톨게이트 이름</td>
              </tr>
              <tr>
                <td colSpan="2">tollPassList[0].timeStamp</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" placeholder="ex)1600346221000" />
                </td>
                <td className="ex">톨게이트 통과 시간 (millisec)</td>
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
        <MapTitle label="모빌리티를 위한 커스텀 노드 경로 탐색" />
        <div className="contents no-border">
          <MapDesc
            label={
              <>
                사용자가 특정 노드를 지정해주면, 해당 노드를 경로 탐색에 반영합니다. <br />
                특정 노드를 지정하고 경로를 탐색해 보세요. (특정 노드 제시 예 : 톨게이트 개수, 통과 도엽 개수)
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
                          <td>POST</td>
                          <td className="url">https://api-maps.cloud.toast.com/maps/v3.0/appkeys/&#123;appkey&#125;/route-node</td>
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
                        <tr data-name="mapVersion">
                          <td colSpan="2">mapVersion</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">지도 버전</td>
                        </tr>
                        <tr data-name="mapType">
                          <td colSpan="2">mapType</td>
                          <td className="type">Integer</td>
                          <td>O</td>
                          <td className="ex">
                            지도 데이터 타입
                            <ul>
                              <li>MT : 0</li>
                              <li>MR : 1</li>
                            </ul>
                          </td>
                        </tr>
                        <tr data-name="passCnt">
                          <td colSpan="2">passCnt</td>
                          <td className="type">Integer</td>
                          <td>O</td>
                          <td className="ex">통과 도엽 개수</td>
                        </tr>
                        <tr>
                          <td rowSpan="3">
                            mapList
                            <span>(Object, Array)</span>
                          </td>
                          <td>mapId</td>
                          <td className="type">Integer</td>
                          <td>O</td>
                          <td className="ex">Map ID</td>
                        </tr>
                        <tr>
                          <td>nodeCnt</td>
                          <td className="type">Integer</td>
                          <td>O</td>
                          <td className="ex">Node ID 개수</td>
                        </tr>
                        <tr>
                          <td>nodeList</td>
                          <td className="type">Object, Array</td>
                          <td>O</td>
                          <td className="ex">Node ID 리스트</td>
                        </tr>
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
                        <tr data-name="coordType">
                          <td colSpan="2">coordType</td>
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
                        <tr data-name="carType">
                          <td colSpan="2">carType</td>
                          <td className="type">String</td>
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
                              <li>7 : 전기차(통행료할인적용)</li>
                              <li>8 : 전기차 택시(통행료할인적용)</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td rowSpan="2">
                            tollPassList
                            <span>(Object, Array)</span>
                          </td>
                          <td>tollgateName</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">톨게이트 이름</td>
                        </tr>
                        <tr>
                          <td>timeStamp</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">톨게이트 통과 시간 (millisec)</td>
                        </tr>
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
                            <span>(Object Array)</span>
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
                            <span>(Object Array)</span>
                            <span>경로 정보</span>
                          </td>
                          <td colSpan="5">option</td>
                          <td className="type">String</td>
                          <td className="ex">탐색 옵션</td>
                        </tr>
                        <tr>
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
                          <td colSpan="5">totalTollFee</td>
                          <td className="type">Integer</td>
                          <td className="ex">총합 톨게이트 요금</td>
                        </tr>
                        <tr>
                          <td colSpan="5">customResCode</td>
                          <td className="type">Integer</td>
                          <td className="ex">
                            custom 경로 탐색 반환 여부
                            <ul>
                              <li>0 : 일반 경로 탐색 반환 (custom 경로 탐색 실패시)</li>
                              <li>1 : custom 경로 반환, custom + 구간 복구 경로 반환</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td rowSpan="4">
                            tollList
                            <span>(Object, Array)</span>
                          </td>
                          <td colSpan="4">tollgateName</td>
                          <td className="type">String</td>
                          <td className="ex">톨게이트 명</td>
                        </tr>
                        <tr>
                          <td colSpan="4">tollFee</td>
                          <td className="type">Integer</td>
                          <td className="ex">톨게이트 요금</td>
                        </tr>
                        <tr>
                          <td colSpan="4">tollPassTime</td>
                          <td className="type">String</td>
                          <td className="ex">톨게이트 통과 시간</td>
                        </tr>
                        <tr>
                          <td colSpan="4">tollDiscountRate</td>
                          <td className="type">Integer</td>
                          <td className="ex">톨게이트 할인율 (%)</td>
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
                          <td className="ex">
                            X좌표
                            <span>(coordType에 따라 tw 또는 wgs84 좌표로 반환 가능)</span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="3">y</td>
                          <td className="type">Double</td>
                          <td className="ex">
                            Y좌표
                            <span>(coordType에 따라 tw 또는 wgs84 좌표로 반환 가능)</span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="4">speed</td>
                          <td className="type">Integer</td>
                          <td className="ex">속도 (km)</td>
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

export default WebRouteNodeCustomPage;
