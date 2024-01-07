import CustomModal from "components/CustomModal";
import DropDownMenu from "components/CustomModal/DropDownMenu";
import DoitBtn from "components/DoitBtn";
import MapDesc from "components/MapDesc";
import MapTitle from "components/MapTitle";
import React from "react";
import WebRestInnerLayout from "../../WebRestInnerLayout";

const WebGeoCodingPage = () => {
  return (
    <>
      <CustomModal
        label="지오코딩 Geocoding [주소→좌표]"
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
                <td>query</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">검색어</td>
              </tr>
              <tr>
                <td>coordtype</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  좌표 형식
                  <ul>
                    <li>Default : 1</li>
                    <li>0 : TW</li>
                    <li>1 : WGS84</li>
                    <li>2 : TM</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>startposition</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  검색 시작 위치<span>0 : 첫번째 위치</span>
                  <span>* 미입력 시 0으로 조회</span>
                </td>
              </tr>
              <tr>
                <td>reqcount</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  검색 요청 개수<span>* 0으로 설정시 Max Count (100) 반환</span>
                </td>
              </tr>
              <tr>
                <td>admcode</td>
                <td className="type">String</td>
                <td>X</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  법정동/행정동 코드
                  <button
                    type="button"
                    onClick={() => {
                      window.open("https://www.code.go.kr/stdcode/regCodeL.do");
                    }}
                  >
                    법정동/행정동 코드 목록 조회
                  </button>
                  <ul>
                    <li>키워드가 법정동 검색일 때, 결과값은 법정동 코드</li>
                    <li>키워드가 행정동 검색일 때, 결과값은 행정동 코드</li>
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
        <MapTitle label="지오코딩 Geocoding [주소→좌표]" />
        <div className="contents no-border">
          <MapDesc
            label={
              <>
                주소를 입력하면, 입력한 주소에 해당하는 좌표 정보를 표출합니다. <br />
                주소를 입력해 보세요.
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
                          <td className="url">https://api-maps.cloud.toast.com/maps/v3.0/appkeys/&#123;appkey&#125;/coordinates</td>
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
                          <td>query</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">검색어</td>
                        </tr>
                        <tr>
                          <td>coordtype</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            좌표 형식
                            <ul>
                              <li>Default : 1</li>
                              <li>0 : TW</li>
                              <li>1 : WGS84</li>
                              <li>2 : TM</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>startposition</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            검색 시작 위치<span>0 : 첫번째 위치</span>
                            <span>* 미입력 시 0으로 조회</span>
                          </td>
                        </tr>
                        <tr>
                          <td>reqcount</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            검색 요청 개수<span>* 0으로 설정시 Max Count (100) 반환</span>
                          </td>
                        </tr>
                        <tr>
                          <td>admcode</td>
                          <td className="type">String</td>
                          <td>X</td>
                          <td className="ex">
                            법정동/행정동 코드
                            <button
                              type="button"
                              onClick={() => {
                                window.open("https://www.code.go.kr/stdcode/regCodeL.do");
                              }}
                            >
                              법정동/행정동 코드 목록 조회
                            </button>
                            <ul>
                              <li>키워드가 법정동 검색일 때, 결과값은 법정동 코드</li>
                              <li>키워드가 행정동 검색일 때, 결과값은 행정동 코드</li>
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
                            header<span>(Object)</span>
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
                          <td rowSpan="11">
                            address<span>(Object)</span>
                          </td>
                          <td colSpan="2">totalcount</td>
                          <td className="type">Integer</td>
                          <td className="ex">전체 검색 결과 대상 개수</td>
                        </tr>
                        <tr>
                          <td colSpan="2">res_type</td>
                          <td className="type">String</td>
                          <td className="ex">
                            검색 결과 Type명칭<span>POI (명칭), CATEGORY (카테고리), ADM (주소), TEL_POI (전화번호 POI) 순</span>
                            <span>ex) NYNN : 명칭 No, 카테고리 YES, 주소 NO, 전화번호 NO</span>
                          </td>
                        </tr>
                        <tr>
                          <td rowSpan="8">
                            adm<span>(Array)</span>
                            <span>검색결과</span>
                          </td>
                          <td>posx</td>
                          <td className="type">String</td>
                          <td className="ex">X좌표</td>
                        </tr>
                        <tr>
                          <td>posy</td>
                          <td className="type">String</td>
                          <td className="ex">Y좌표</td>
                        </tr>
                        <tr>
                          <td>admcode</td>
                          <td className="type">String</td>
                          <td className="ex">
                            법정동/행정동 코드
                            <ul>
                              <li>키워드가 법정동 검색일 때, 결과값은 법정동 코드</li>
                              <li>키워드가 행정동 검색일 때, 결과값은 행정동 코드</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>address</td>
                          <td className="type">String</td>
                          <td className="ex">주소</td>
                        </tr>
                        <tr>
                          <td>roadname</td>
                          <td className="type">String</td>
                          <td className="ex">새 주소 도로명</td>
                        </tr>
                        <tr>
                          <td>roadjibun</td>
                          <td className="type">String</td>
                          <td className="ex">새 주소 지번</td>
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

export default WebGeoCodingPage;
