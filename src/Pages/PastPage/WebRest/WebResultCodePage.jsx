import MapDesc from "components/MapDesc";
import MapTitle from "components/MapTitle";
import React from "react";
import WebRestInnerLayout from "../WebRest/WebRestInnerLayout";
const WebResultCodePage = () => {
  return (
    <>
      <div className="container">
        <MapTitle label="결과 코드 리스트" />
        <div className="contents no-border">
          <MapDesc label={<>MAPS API/SDK 활용 시에 참고하기 위한 결과 코드값 정보를 제공합니다.</>} />

          <WebRestInnerLayout>
            <div className="cont-box" id="reference_coordinates">
              <div className="cont-list-box">
                <ul>
                  <li className="cont-list">
                    <p className="cont-title">결과코드</p>
                    <table>
                      <thead>
                        <tr>
                          <th>resultCode</th>
                          <th className="type">resultMessage</th>
                          <th className="type">비고</th>
                          <th className="ex">설명</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>0</td>
                          <td className="type"></td>
                          <td className="type">공통</td>
                          <td className="ex">성공</td>
                        </tr>
                        <tr>
                          <td>100</td>
                          <td className="type">Result Not Found</td>
                          <td className="type">검색 전용</td>
                          <td className="ex">결과 없음</td>
                        </tr>
                        <tr>
                          <td>101</td>
                          <td className="type">Argument Error</td>
                          <td className="type">공통</td>
                          <td className="ex">파라미터 오류</td>
                        </tr>
                        <tr>
                          <td>102</td>
                          <td className="type">Internal Server Error</td>
                          <td className="type">공통</td>
                          <td className="ex">서버 오류</td>
                        </tr>
                        <tr>
                          <td>201</td>
                          <td className="type">Searching for Security</td>
                          <td className="type">검색 전용</td>
                          <td className="ex">POI 보안시설물</td>
                        </tr>
                        <tr>
                          <td>202</td>
                          <td className="type">Longitude/Latitude</td>
                          <td className="type">검색 전용</td>
                          <td className="ex">경위도</td>
                        </tr>
                        <tr>
                          <td>203</td>
                          <td className="type">Mobile Phone Number</td>
                          <td className="type">검색 전용</td>
                          <td className="ex">전화번호 (Mobile)</td>
                        </tr>
                        <tr>
                          <td>204</td>
                          <td className="type">Invalid Query</td>
                          <td className="type">검색 전용</td>
                          <td className="ex">서버 오류</td>
                        </tr>
                        <tr>
                          <td>205</td>
                          <td className="type">POI not in given Admin</td>
                          <td className="type">검색 전용</td>
                          <td className="ex">결과 없음 (지역설정)</td>
                        </tr>
                        <tr>
                          <td>206</td>
                          <td className="type">POI not in given Area</td>
                          <td className="type">검색 전용</td>
                          <td className="ex">결과 없음 (영역설정)</td>
                        </tr>
                        <tr>
                          <td>207</td>
                          <td className="type">POI not in given Category</td>
                          <td className="type">검색 전용</td>
                          <td className="ex">결과 없음 (분류설정)</td>
                        </tr>
                        <tr>
                          <td>208</td>
                          <td className="type">Neighbor Search Only</td>
                          <td className="type">검색 전용</td>
                          <td className="ex">결과 없음 (주변검색만입력)</td>
                        </tr>
                        <tr>
                          <td>209</td>
                          <td className="type">Neighbor Search not Found</td>
                          <td className="type">검색 전용</td>
                          <td className="ex">결과 없음 (주변 + 키워드 검색 결과 없음) </td>
                        </tr>
                        <tr>
                          <td>300</td>
                          <td className="type">AppKey Error</td>
                          <td className="type">공통</td>
                          <td className="ex">AppKey 인증 오류</td>
                        </tr>
                        <tr>
                          <td>501</td>
                          <td className="type">Unknown Fail</td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">실패(unknown)</td>
                        </tr>
                        <tr>
                          <td>502</td>
                          <td className="type">Apply Smart Re-navigation</td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">Smart재탐색 적용</td>
                        </tr>
                        <tr>
                          <td>503</td>
                          <td className="type">Canceled navigation by user</td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">사용자에 의한 탐색 취소</td>
                        </tr>
                        <tr>
                          <td>504</td>
                          <td className="type">Error due to Checksum</td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">체크섬 오류</td>
                        </tr>
                        <tr>
                          <td>517</td>
                          <td className="type">Memory allocation failure</td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">메모리 할당 실패</td>
                        </tr>
                        <tr>
                          <td>518</td>
                          <td className="type">File open failure</td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">파일 열기 실패</td>
                        </tr>
                        <tr>
                          <td>519</td>
                          <td className="type">File read failure</td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">파일 읽기 실패</td>
                        </tr>
                        <tr>
                          <td>520</td>
                          <td className="type">File write failure</td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">파일 쓰기 실패</td>
                        </tr>
                        <tr>
                          <td>521</td>
                          <td className="type">Socket connection failure</td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">소켓 연결 실패</td>
                        </tr>
                        <tr>
                          <td>532</td>
                          <td className="type">Request parameter is invalid</td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">요청 파라미터가 유효하지 않음</td>
                        </tr>
                        <tr>
                          <td>533</td>
                          <td className="type">The starting point is not selected, or the wrong starting point</td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">출발지가 선택되지 않았거나, 잘못된 출발지</td>
                        </tr>
                        <tr>
                          <td>534</td>
                          <td className="type">Destination is not selected or wrong destination</td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">목적지가 선택되지 않았거나, 잘못된 목적지</td>
                        </tr>
                        <tr>
                          <td>535</td>
                          <td className="type">Wrong stopover</td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">잘못된 경유지</td>
                        </tr>
                        <tr>
                          <td>536</td>
                          <td className="type">Link Projection failure</td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">Link Projection</td>
                        </tr>
                        <tr>
                          <td>537</td>
                          <td className="type">Exceeding the navigational distance (1000km, walking navigation: 20km)</td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">탐색 가능 거리 초과(1000km, 도보 탐색 : 20km)</td>
                        </tr>
                        <tr>
                          <td>538</td>
                          <td className="type">Exceeds the number of expandable nodes</td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">확장 가능 노드 수 초과</td>
                        </tr>
                        <tr>
                          <td>539</td>
                          <td className="type">Expansion failure</td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">확장 실패</td>
                        </tr>
                        <tr>
                          <td>540</td>
                          <td className="type">Expansion failure due to inactivity or traffic control</td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">특별한 사정이나 교통 통제로 인한 확장 실패</td>
                        </tr>
                        <tr>
                          <td>541</td>
                          <td className="type">Expansion failure due to vehicle height/weight restrictions near the starting point</td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">출발지 근처의 차량 높이/중량 제한으로 확장 실패</td>
                        </tr>
                        <tr>
                          <td>542</td>
                          <td className="type">Expansion failed due to a part-time curfew near the departure point</td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">출발지 근처의 시간제 통행금지로 인해 확장 실패</td>
                        </tr>
                        <tr>
                          <td>543</td>
                          <td className="type">The destination is a physical island road, and there are no established ferry routes. </td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">목적지가 물리적 섬도로이며, 구축된 페리 항로가 없음</td>
                        </tr>
                        <tr>
                          <td>544</td>
                          <td className="type">The departure or destination is a logical (transportation) island, and there are more than one destination</td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">출발 또는 목적지가 논리적(교통) 섬이며, 목적지가 2개 이상인 경우</td>
                        </tr>
                        <tr>
                          <td>545</td>
                          <td className="type">No data requested</td>
                          <td className="type">탐색 전용</td>
                          <td className="ex">요청한 데이터가 없음</td>
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

export default WebResultCodePage;
