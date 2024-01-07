import CustomModal from "components/CustomModal";
import DoitBtn from "components/DoitBtn";
import MapDesc from "components/MapDesc";
import MapTitle from "components/MapTitle";
import React from "react";
import WebRestInnerLayout from "../../WebRestInnerLayout";

const WebPolygonToAdminPage = () => {
  return (
    <>
      <CustomModal
        label="서비스 확장에 유용한 좌표 기준 행정/법정동 정보 검색"
        countLabel={"polygon좌표 개수 (polygonCnt) (최대 50개)"}
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
              <tr data-name="coordtype">
                <td colSpan="2">coordtype</td>
                <td className="type">Integer</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  좌표 타입
                  <ul>
                    <li>Default : 1</li>
                    <li>0 : TW</li>
                    <li>1 : wgs84</li>
                  </ul>
                </td>
              </tr>
              <tr data-name="mode">
                <td colSpan="2">mode</td>
                <td className="type">Integer</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  조회 구역 범위
                  <ul>
                    <li>0 : 법정동, 행정동 (Default)</li>
                    <li>1 : 법정동만</li>
                    <li>2 : 행정동만</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td colSpan="2">polygon[0].x</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" placeholder="ex)127.112576" />
                </td>
                <td className="ex">polygon X좌표</td>
              </tr>
              <tr>
                <td colSpan="2">polygon[0].y</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" placeholder="ex)37.403078" />
                </td>
                <td className="ex">polygon Y좌표</td>
              </tr>
              <tr>
                <td colSpan="2">polygon[1].x</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" placeholder="ex)127.112576" />
                </td>
                <td className="ex">polygon X좌표</td>
              </tr>
              <tr>
                <td colSpan="2">polygon[1].y</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" placeholder="ex)37.403078" />
                </td>
                <td className="ex">polygon Y좌표</td>
              </tr>
              <tr>
                <td colSpan="2">polygon[2].x</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" placeholder="ex)127.112576" />
                </td>
                <td className="ex">polygon X좌표</td>
              </tr>
              <tr>
                <td colSpan="2">polygon[2].y</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" placeholder="ex)37.403078" />
                </td>
                <td className="ex">polygon Y좌표</td>
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
        <MapTitle label="서비스 확장에 유용한 좌표 기준 행정/법정동 정보 검색" />
        <div className="contents no-border">
          <MapDesc
            label={
              <>
                좌표를 기준으로 지도 상에 구역을 설정하고 해당 구역의 행정/법정동 정보를 출력해 줍니다.
                <br />
                좌표를 입력하고 해당되는 행정/법정동 정보를 확인해 보세요.
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
                          <td className="url">https://api-maps.cloud.toast.com/maps/v3.0/appkeys/&#123;appkey&#125;/polygonToAdmin</td>
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
                        <tr data-name="coordtype">
                          <td colSpan="2">coordtype</td>
                          <td className="type">Integer</td>
                          <td>O</td>
                          <td className="ex">
                            좌표 타입
                            <ul>
                              <li>Default : 1</li>
                              <li>0 : TW</li>
                              <li>1 : wgs84</li>
                            </ul>
                          </td>
                        </tr>
                        <tr data-name="mode">
                          <td colSpan="2">mode</td>
                          <td className="type">Integer</td>
                          <td>X</td>
                          <td className="ex">
                            조회 구역 범위
                            <ul>
                              <li>0 : 법정동, 행정동 (Default)</li>
                              <li>1 : 법정동만</li>
                              <li>2 : 행정동만</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td rowSpan="2">
                            polygon
                            <span>(Object, Array)</span>
                          </td>
                          <td>x</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">X 좌표</td>
                        </tr>
                        <tr>
                          <td>y</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">Y 좌표</td>
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
                          <td rowSpan="6">adm</td>
                          <td colSpan="4">result</td>
                          <td className="type">Boolean</td>
                          <td className="ex">성공 여부</td>
                        </tr>
                        <tr>
                          <td rowSpan="3">
                            admincodes
                            <span>(Object, Array)</span>
                          </td>
                          <td colSpan="3">count</td>
                          <td className="type">Integer</td>
                          <td className="ex">조회된 행정 코드 개수</td>
                        </tr>
                        <tr>
                          <td rowSpan="2">
                            admincodelist
                            <span>(Object, Array)</span>
                            <span>행정 코드 리스트</span>
                          </td>
                          <td colSpan="2">AdminCode</td>
                          <td className="type">String</td>
                          <td className="ex">행정 코드</td>
                        </tr>
                        <tr>
                          <td colSpan="2">Address</td>
                          <td className="type">String</td>
                          <td className="ex">행정 명칭</td>
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

export default WebPolygonToAdminPage;
