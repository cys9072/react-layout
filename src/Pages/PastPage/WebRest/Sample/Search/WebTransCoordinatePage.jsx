import CustomModal from "components/CustomModal";
import DoitBtn from "components/DoitBtn";
import MapDesc from "components/MapDesc";
import MapTitle from "components/MapTitle";
import React from "react";
import WebRestInnerLayout from "../../WebRestInnerLayout";

const WebTransCoordinatePage = () => {
  return (
    <>
      <CustomModal
        label="서비스 확장에 유용한 좌표(계) 변환 [WGS84↔TM]"
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
                <td>coordtype</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  좌표형식
                  <ul>
                    <li>0 : WGS84 → TM</li>
                    <li>1 : TM → WGS84</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>x</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">X좌표</td>
              </tr>
              <tr>
                <td>y</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">Y좌표 </td>
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
        <MapTitle label="서비스 확장에 유용한 좌표(계) 변환 [WGS84↔TM]" />
        <div className="contents no-border">
          <MapDesc
            label={
              <>
                WGS84 방식과 TM 방식의 좌표(계)를 상호 변환하여 검색합니다.
                <br />
                좌표를 검색하고 변환된 좌표를 확인해 보세요.
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
                          <td className="url">https://api-maps.cloud.toast.com/maps/v3.0/appkeys/&#123;appkey&#125;/trans-coordinates</td>
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
                        <tr>
                          <td>coordtype</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">
                            좌표형식
                            <ul>
                              <li>0 : WGS84 → TM</li>
                              <li>1 : TM → WGS84</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>x</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">X좌표</td>
                        </tr>
                        <tr>
                          <td>y</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">Y좌표 </td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li className="cont-list">
                    <p className="cont-title">Response Field</p>
                    <table>
                      <thead>
                        <tr>
                          <th colSpan="2">값</th>
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
                          <td>isSuccessful</td>
                          <td className="type">Boolean</td>
                          <td className="ex">성공 여부</td>
                        </tr>
                        <tr>
                          <td>resultCode</td>
                          <td className="type">Integer</td>
                          <td className="ex">실패 코드</td>
                        </tr>
                        <tr>
                          <td>resultMessage</td>
                          <td className="type">String</td>
                          <td className="ex">실패 메시지</td>
                        </tr>
                        <tr>
                          <td rowSpan="3">
                            coordinate
                            <span>(Object)</span>
                          </td>
                          <td>coordtype</td>
                          <td className="type">String</td>
                          <td className="ex">변환 좌표 형태</td>
                        </tr>
                        <tr>
                          <td>x</td>
                          <td className="type">String</td>
                          <td className="ex">변환 X좌표</td>
                        </tr>
                        <tr>
                          <td>y</td>
                          <td className="type">String</td>
                          <td className="ex">변환 Y좌표</td>
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

export default WebTransCoordinatePage;
