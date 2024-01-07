import CustomModal from "components/CustomModal";
import DoitBtn from "components/DoitBtn";
import MapDesc from "components/MapDesc";
import MapTitle from "components/MapTitle";
import React from "react";
import WebRestInnerLayout from "../../WebRestInnerLayout";

const WebAdminToPolygonPage = () => {
  return (
    <>
      <CustomModal
        label="서비스 확장에 유용한 행정/법정동 구역 시각화 검색"
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
              <tr>
                <td>mode</td>
                <td className="type">Integer</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  조회 구역 범위
                  <ul>
                    <li>0 : ALL (현재 미지원)</li>
                    <li>1 : 광역시도</li>
                    <li>2 : 시군구</li>
                    <li>3 : 읍면동</li>
                    <li>4 : 리</li>
                    <li>* 행정명칭 검색시 mode 값은 무시됩니다.</li>
                  </ul>
                </td>
              </tr>
              <tr id="admin-to-polygon">
                <td>query</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  행정코드 및 행정명칭
                  <button type="button" onClick={() => window.open("https://www.code.go.kr/stdcode/regCodeL.do")}>
                    법정동/행정동 코드 목록 조회
                  </button>
                  <ul>
                    <li>ex) 4113510600</li>
                    <li>ex) 경기도 성남시 분당구 삼평동</li>
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
        <MapTitle label="서비스 확장에 유용한 행정/법정동 구역 시각화 검색" />
        <div className="contents no-border">
          <MapDesc
            label={
              <>
                행정/법정동을 검색하면 해당 구역을 좌표로 변환하고 폴리곤 형태의 구역으로 시각화하여 지도 상에 표현해 줍니다.
                <br />
                행정명칭 또는 행정코드를 입력해 보세요.
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
                          <td className="url">https://api-maps.cloud.toast.com/maps/v3.0/appkeys/&#123;appkey&#125;/adminToPolygon</td>
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
                          <td>coordtype</td>
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
                        <tr>
                          <td>mode</td>
                          <td className="type">Integer</td>
                          <td>O</td>
                          <td className="ex">
                            조회 구역 범위
                            <ul>
                              <li>0 : ALL (현재 미지원)</li>
                              <li>1 : 광역시도</li>
                              <li>2 : 시군구</li>
                              <li>3 : 읍면동</li>
                              <li>4 : 리</li>
                              <li>* 행정명칭 검색시 mode 값은 무시됩니다.</li>
                            </ul>
                          </td>
                        </tr>
                        <tr id="admin-to-polygon">
                          <td>query</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">
                            행정코드 및 행정명칭
                            <button type="button" onClick={() => window.open("https://www.code.go.kr/stdcode/regCodeL.do")}>
                              법정동/행정동 코드 목록 조회
                            </button>
                            <ul>
                              <li>ex) 4113510600</li>
                              <li>ex) 경기도 성남시 분당구 삼평동</li>
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
                          <th colSpan="6">값</th>
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
                          <td colSpan="5">isSuccessful</td>
                          <td className="type">Boolean</td>
                          <td className="ex">성공 여부</td>
                        </tr>
                        <tr>
                          <td colSpan="5">resultCode</td>
                          <td className="type">Integer</td>
                          <td className="ex">실패 코드</td>
                        </tr>
                        <tr>
                          <td colSpan="5">resultMessage</td>
                          <td className="type">String</td>
                          <td className="ex">실패 메시지</td>
                        </tr>
                        <tr>
                          <td rowSpan="7">polygon</td>
                          <td colSpan="5">result</td>
                          <td className="type">Boolean</td>
                          <td className="ex">성공 여부</td>
                        </tr>
                        <tr>
                          <td colSpan="5">count</td>
                          <td className="type">Integer</td>
                          <td className="ex">결과 개수</td>
                        </tr>
                        <tr>
                          <td rowSpan="5">
                            polygondata
                            <span>(Object, Array)</span>
                            <span>폴리곤 데이터</span>
                          </td>
                          <td colSpan="4">admincode</td>
                          <td className="type">String</td>
                          <td className="ex">검색한 AdminCode 값 (mode에 따라 자릿수가 달라짐)</td>
                        </tr>
                        <tr>
                          <td colSpan="4">count</td>
                          <td className="type">Integer</td>
                          <td className="ex">폴리곤의 개수</td>
                        </tr>
                        <tr>
                          <td rowSpan="3">
                            polygonlist
                            <span>(Object, Array)</span>
                          </td>
                          <td colSpan="3">count</td>
                          <td className="type">Integer</td>
                          <td className="ex">포인트 개수</td>
                        </tr>
                        <tr>
                          <td rowSpan="2">
                            polygon
                            <span>(Object, Array)</span>
                          </td>
                          <td colSpan="2">x</td>
                          <td className="type">Double</td>
                          <td className="ex">X 좌표</td>
                        </tr>
                        <tr>
                          <td colSpan="2">y</td>
                          <td className="type">Double</td>
                          <td className="ex">Y 좌표</td>
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

export default WebAdminToPolygonPage;
