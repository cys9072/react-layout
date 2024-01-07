import CustomModal from "components/CustomModal";
import DoitBtn from "components/DoitBtn";
import MapDesc from "components/MapDesc";
import MapTitle from "components/MapTitle";
import React from "react";
import WebRestInnerLayout from "../../WebRestInnerLayout";

const WebRouteMultipleEndPage = () => {
  return (
    <>
      <CustomModal
        label="모빌리티를 위한 단일 출발지-다중 목적지 간 최적 경로 탐색"
        countLabel={"목적지(data) (목적지 최대 50개)"}
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
              <tr>
                <td colSpan="2">data[0].endIdx</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" placeholder="ex)test" />
                </td>
                <td className="ex">목적지 식별 ID</td>
              </tr>
              <tr>
                <td colSpan="2">data[0].endX</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" placeholder="ex)127.110450" />
                </td>
                <td className="ex">목적지 X좌표</td>
              </tr>
              <tr>
                <td colSpan="2">data[0].endY</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" placeholder="ex)37.394858" />
                </td>
                <td className="ex">목적지 Y좌표</td>
              </tr>

              <tr>
                <td colSpan="2">data[1].endIdx</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" placeholder="ex)test2" />
                </td>
                <td className="ex">목적지 식별 ID</td>
              </tr>
              <tr>
                <td colSpan="2">data[1].endX</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" placeholder="ex)127.110450" />
                </td>
                <td className="ex">목적지 X좌표</td>
              </tr>
              <tr>
                <td colSpan="2">data[1].endY</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" placeholder="ex)37.394858" />
                </td>
                <td className="ex">목적지 Y좌표</td>
              </tr>

              <tr data-name="orderby">
                <td colSpan="2">orderby</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  정렬 기준
                  <ul>
                    <li>0 : distance_desc : 거리 내림차순</li>
                    <li>1 : distance_asc : 거리 오름차순</li>
                    <li>2 : time_desc : 시간 내림차순</li>
                    <li>3 : time_asc : 시간 오름차순</li>
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
              <tr data-name="resultCount">
                <td colSpan="2">resultCount</td>
                <td className="type">Integer</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">응답 요청 개수</td>
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
        <MapTitle label="모빌리티를 위한 단일 출발지-다중 목적지 간 최적 경로 탐색" />
        <div className="contents no-border">
          <MapDesc
            label={
              <>
                하나의 출발지에서 다수의 목적지로 향하는 최적 경로를 탐색하고 요약한 정보를 제공합니다. <br />
                다중 목적지를 입력하고 최적의 경로 정보를 확인해 보세요.
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
                          <td className="url">https://api-maps.cloud.toast.com/maps/v3.0/appkeys/&#123;appkey&#125;/route-end-multi-summary</td>
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
                        <tr>
                          <td rowSpan="3">
                            data
                            <span>(Array)</span>
                            <ul>
                              <li>목적지 정보</li>
                            </ul>
                          </td>
                          <td>endIdx</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">목적지 식별 ID</td>
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
                        <tr data-name="orderby">
                          <td colSpan="2">orderby</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">
                            정렬 기준
                            <ul>
                              <li>0 : distance_desc : 거리 내림차순</li>
                              <li>1 : distance_asc : 거리 오름차순</li>
                              <li>2 : time_desc : 시간 내림차순</li>
                              <li>3 : time_asc : 시간 오름차순</li>
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
                        <tr data-name="resultCount">
                          <td colSpan="2">resultCount</td>
                          <td className="type">Integer</td>
                          <td>X</td>
                          <td className="ex">응답 요청 개수</td>
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
                          <td rowSpan="6">
                            route
                            <span>(Object)</span>
                          </td>
                          <td rowSpan="6">
                            data
                            <span>(Array)</span>
                            <span>경로 정보</span>
                          </td>
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
                          <td colSpan="2">endIdx</td>
                          <td className="type">String</td>
                          <td className="ex">목적지 식별 ID</td>
                        </tr>
                        <tr>
                          <td colSpan="2">endX</td>
                          <td className="type">String</td>
                          <td className="ex">목적지 X좌표</td>
                        </tr>
                        <tr>
                          <td colSpan="2">endY</td>
                          <td className="type">String</td>
                          <td className="ex">목적지 Y좌표</td>
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

export default WebRouteMultipleEndPage;
