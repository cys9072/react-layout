import CustomModal from "components/CustomModal";
import DoitBtn from "components/DoitBtn";
import MapDesc from "components/MapDesc";
import MapTitle from "components/MapTitle";
import { IMG } from "constant";
import React from "react";
import WebRestInnerLayout from "../WebRestInnerLayout";
const WebStaticMaps = () => {
  return (
    <>
      <CustomModal
        disableRequest
        disableResult
        disableResponse
        label="Static Map"
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
                <td>lon</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">요청할 Long (경도) 좌표</td>
              </tr>
              <tr>
                <td>lat</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">요청할 Lat (위도) 좌표</td>
              </tr>
              <tr>
                <td>width</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  요청할 이미지 width값
                  <span>default : 400px</span>
                  <span>x2 값을 입력한 경우, width X 2 (max-width : 1000px)</span>
                </td>
              </tr>
              <tr>
                <td>height</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  요청할 이미지 height값
                  <span>default : 400px</span>
                </td>
              </tr>
              <tr>
                <td>zoom</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  요청할 좌표의 확대 레벨
                  <span>default : 14</span>
                </td>
              </tr>
              <tr>
                <td>bearing</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  요청할 좌표의 회전율 (0 - 359)
                  <span>default : 0</span>
                </td>
              </tr>
              <tr>
                <td>pitch</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  요청할 좌표의 기울기 (0 - 60)
                  <span>default : 0</span>
                </td>
              </tr>
              <tr>
                <td>x2</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  사이즈 2배 반환 여부
                  <span>x2 값을 입력한 경우, 2 배 반환 ex) x2 = 1</span>
                  <span>x2 값을 입력하지 않은 경우, 정사이즈 반환</span>
                </td>
              </tr>
              <tr>
                <td>mx</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">마커를 표현할 좌표 (lon, imgUrl 값이 있으면 반환)</td>
              </tr>
              <tr>
                <td>my</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">마커를 표현할 좌표 (lat, imgUrl 값이 있으면 반환)</td>
              </tr>
              <tr>
                <td>imgUrl</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  마커를 표현할 이미지 URL
                  <span>ex) https://www.fivepin.co.kr/resources/images/MyStory/marker_plog_around_center.png</span>
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
        <MapTitle label="Static Map" />
        <div className="contents no-border">
          <MapDesc label={<>사용자가 지정한 지도 범위에 대해 정적 지도 이미지 URL을 반환합니다.</>} />

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
                          <td className="url">https://api-maps.cloud.toast.com/maps/v3.0/appkeys/&#123;appKey&#125;/static-maps?lon=&#123;lon&#125;&lat=&#123;lat&#125;&zoom=&#123;zoom&#125;&bearing=&#123;bearing&#125;&pitch=&#123;pitch&#125;&width=&#123;width&#125;&height=&#123;height&#125;&x2=&#123;x2&#125;&mx=&#123;mx&#125;&my=&#123;my&#125;&imgUrl=&#123;imgUrl&#125;</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li className="cont-list">
                    <p className="cont-title">Request Path parameter</p>
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
                    <p className="cont-title">Request Query parameter</p>
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
                          <td>lon</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">요청할 Long (경도) 좌표</td>
                        </tr>
                        <tr>
                          <td>lat</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">요청할 Lat (위도) 좌표</td>
                        </tr>
                        <tr>
                          <td>width</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            요청할 이미지 width값
                            <span>default : 400px</span>
                            <span>x2 값을 입력한 경우, width X 2 (max-width : 1000px)</span>
                          </td>
                        </tr>
                        <tr>
                          <td>height</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            요청할 이미지 height값
                            <span>default : 400px</span>
                          </td>
                        </tr>
                        <tr>
                          <td>zoom</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            요청할 좌표의 확대 레벨
                            <span>default : 14</span>
                          </td>
                        </tr>
                        <tr>
                          <td>bearing</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            요청할 좌표의 회전율 (0 - 359)
                            <span>default : 0</span>
                          </td>
                        </tr>
                        <tr>
                          <td>pitch</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            요청할 좌표의 기울기 (0 - 60)
                            <span>default : 0</span>
                          </td>
                        </tr>
                        <tr>
                          <td>x2</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            사이즈 2배 반환 여부
                            <span>x2 값을 입력한 경우, 2 배 반환 ex) x2 = 1</span>
                            <span>x2 값을 입력하지 않은 경우, 정사이즈 반환</span>
                          </td>
                        </tr>
                        <tr>
                          <td>mx</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">마커를 표현할 좌표 (lon, imgUrl 값이 있으면 반환)</td>
                        </tr>
                        <tr>
                          <td>my</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">마커를 표현할 좌표 (lat, imgUrl 값이 있으면 반환)</td>
                        </tr>
                        <tr>
                          <td>imgUrl</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            마커를 표현할 이미지 URL
                            <span>ex) https://www.fivepin.co.kr/resources/images/MyStory/marker_plog_around_center.png</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li className="cont-list">
                    <p className="cont-title">Response Field (Fail)</p>
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
                          <td>
                            result
                            <span>(Object)</span>
                          </td>
                          <td colSpan="2">url</td>
                          <td className="type">String</td>
                          <td className="ex">StaticMap URL</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li className="cont-list">
                    <p className="cont-title">Response Static Map (Success)</p>
                    <div className="li-img">
                      <p>예시)</p>
                      <img src={IMG.EX_STATIC_MAP} alt="staticmap" />
                      <p>zoom (지도 확대 레벨) = 14, bearing (좌표의 회전율) = 112, pitch (좌표의 기울기) = 60, width (지도 width) = 1000, height (지도 height) = 600</p>
                    </div>
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

export default WebStaticMaps;
