import CustomModal from "components/CustomModal";
import DoitBtn from "components/DoitBtn";
import MapDesc from "components/MapDesc";
import MapTitle from "components/MapTitle";
import React from "react";
import WebRestInnerLayout from "../../WebRestInnerLayout";

const WebSearchEntryPointPage = () => {
  return (
    <>
      <CustomModal
        label="서비스 확장에 유용한 목적지 입구점 조회"
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
              <tr data-name="coordtype">
                <td>coordtype</td>
                <td className="type">Integer</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  좌표 타입
                  <ul>
                    <li>Default : 1</li>
                    <li>0 : TW</li>
                    <li>1 : WGS84</li>
                  </ul>
                </td>
              </tr>
              <tr data-name="type">
                <td>type</td>
                <td className="type">Integer</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">차후 기능 추가 예정</td>
              </tr>
              <tr data-name="posX">
                <td>posX</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">X좌표</td>
              </tr>
              <tr data-name="posY">
                <td>posY</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">Y좌표</td>
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
        <MapTitle label="서비스 확장에 유용한 목적지 입구점 조회" />
        <div className="contents no-border">
          <MapDesc
            label={
              <>
                목적지의 주요 입구점을 조회할 수 있습니다. <br />
                입구점을 조회해 보세요.
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
                          <td>POST, GET</td>
                          <td className="url">https://api-maps.cloud.toast.com/maps/v3.0/appkeys/&#123;appkey&#125;/searchEntryPoint</td>
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
                        <tr data-name="coordtype">
                          <td>coordtype</td>
                          <td className="type">Integer</td>
                          <td>X</td>
                          <td className="ex">
                            좌표 타입
                            <ul>
                              <li>Default : 1</li>
                              <li>0 : TW</li>
                              <li>1 : WGS84</li>
                            </ul>
                          </td>
                        </tr>
                        <tr data-name="type">
                          <td>type</td>
                          <td className="type">Integer</td>
                          <td>X</td>
                          <td className="ex">차후 기능 추가 예정</td>
                        </tr>
                        <tr data-name="posX">
                          <td>posX</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">X좌표</td>
                        </tr>
                        <tr data-name="posY">
                          <td>posY</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">Y좌표</td>
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
                          <td rowSpan="5">data</td>
                          <td colSpan="2">result</td>
                          <td className="type">Boolean</td>
                          <td className="ex">성공 여부</td>
                        </tr>
                        <tr>
                          <td colSpan="2">count</td>
                          <td className="type">Integer</td>
                          <td className="ex">조회된 건물군 입구점 개수</td>
                        </tr>
                        <tr>
                          <td rowSpan="3">
                            entrypoints
                            <span>(Object, Array)</span>
                          </td>
                          <td>x</td>
                          <td className="type">Double</td>
                          <td className="ex">X좌표</td>
                        </tr>
                        <tr>
                          <td>y</td>
                          <td className="type">Double</td>
                          <td className="ex">Y좌표</td>
                        </tr>
                        <tr>
                          <td>type</td>
                          <td className="type">Integer</td>
                          <td className="ex">차후 기능 추가 예정</td>
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

export default WebSearchEntryPointPage;
