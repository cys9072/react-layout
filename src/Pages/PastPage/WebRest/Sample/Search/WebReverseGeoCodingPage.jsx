import CustomModal from "components/CustomModal";
import DoitBtn from "components/DoitBtn";
import MapDesc from "components/MapDesc";
import MapTitle from "components/MapTitle";
import React from "react";
import WebRestInnerLayout from "../../WebRestInnerLayout";

const WebReverseGeoCodingPage = () => {
  return (
    <>
      <CustomModal
        label="리버스 지오코딩 Reverse Geocoding [좌표→주소]"
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
                <td>posX</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">X좌표</td>
              </tr>
              <tr>
                <td>posY</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">Y좌표 </td>
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
        <MapTitle label="리버스 지오코딩 Reverse Geocoding [좌표→주소]" />
        <div className="contents no-border">
          <MapDesc
            label={
              <>
                좌표를 입력하면, 입력한 좌표에 해당하는 주소 정보를 표출합니다.
                <br /> 좌표를 입력해 보세요.
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
                          <td className="url">https://api-maps.cloud.toast.com/maps/v3.0/appkeys/&#123;appkey&#125;/addresses</td>
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
                          <td>posX</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">X좌표</td>
                        </tr>
                        <tr>
                          <td>posY</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">Y좌표 </td>
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
                          <th colspan="3">값</th>
                          <th className="type">타입</th>
                          <th className="ex">설명</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td rowspan="3">
                            header
                            <span>(Object)</span>
                          </td>
                          <td colspan="2">isSuccessful</td>
                          <td className="type">Boolean</td>
                          <td className="ex">성공 여부</td>
                        </tr>
                        <tr>
                          <td colspan="2">resultCode</td>
                          <td className="type">Integer</td>
                          <td className="ex">실패 코드</td>
                        </tr>
                        <tr>
                          <td colspan="2">resultMessage</td>
                          <td className="type">String</td>
                          <td className="ex">실패 메시지</td>
                        </tr>
                        <tr>
                          <td rowspan="27">
                            location
                            <span>(Object)</span>
                          </td>
                          <td colspan="2">hasAdmAddress</td>
                          <td className="type">Boolean</td>
                          <td className="ex">행정동 주소 반환 여부</td>
                        </tr>
                        <tr>
                          <td rowspan="10">
                            adm
                            <span>(Object)</span>
                            <span>기본(법정동) 주소 정보</span>
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
                          <td>address</td>
                          <td className="type">String</td>
                          <td className="ex">주소</td>
                        </tr>
                        <tr>
                          <td>distance</td>
                          <td className="type">Integer</td>
                          <td className="ex">
                            좌표와의 거리 (meter 단위)
                            <span>x1, y1 좌표를 기준으로 계산한 거리를 반환</span>
                          </td>
                        </tr>
                        <tr>
                          <td>admcode</td>
                          <td className="type">String</td>
                          <td className="ex">법정동 코드</td>
                        </tr>
                        <tr>
                          <td>jibun</td>
                          <td className="type">String</td>
                          <td className="ex">지번</td>
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
                        <tr>
                          <td>bldname</td>
                          <td className="type">String</td>
                          <td className="ex">건물명</td>
                        </tr>
                        <tr>
                          <td>postcode</td>
                          <td className="type">String</td>
                          <td className="ex">우편번호</td>
                        </tr>
                        <tr>
                          <td rowspan="8">
                            adm_address
                            <span>(Object)</span>
                            <span>행정동 주소 정보</span>
                          </td>
                          <td>address</td>
                          <td className="type">String</td>
                          <td className="ex">주소</td>
                        </tr>
                        <tr>
                          <td>admcode</td>
                          <td className="type">String</td>
                          <td className="ex">행정동 코드</td>
                        </tr>
                        <tr>
                          <td>address_category1</td>
                          <td className="type">String</td>
                          <td className="ex">도/시</td>
                        </tr>
                        <tr>
                          <td>address_category2</td>
                          <td className="type">String</td>
                          <td className="ex">시/군/구</td>
                        </tr>
                        <tr>
                          <td>address_category3</td>
                          <td className="type">String</td>
                          <td className="ex">읍/면/동</td>
                        </tr>
                        <tr>
                          <td>address_category4</td>
                          <td className="type">String</td>
                          <td className="ex">리</td>
                        </tr>
                        <tr>
                          <td>jibun</td>
                          <td className="type">String</td>
                          <td className="ex">지번</td>
                        </tr>
                        <tr>
                          <td>cut_address</td>
                          <td className="type">String</td>
                          <td className="ex">축약 주소</td>
                        </tr>
                        <tr>
                          <td rowspan="8">
                            legal_address
                            <span>(Object)</span>
                            <span>법정동 주소 정보</span>
                          </td>
                          <td>address</td>
                          <td className="type">String</td>
                          <td className="ex">주소</td>
                        </tr>
                        <tr>
                          <td>admcode</td>
                          <td className="type">String</td>
                          <td className="ex">법정동 코드</td>
                        </tr>
                        <tr>
                          <td>address_category1</td>
                          <td className="type">String</td>
                          <td className="ex">도/시</td>
                        </tr>
                        <tr>
                          <td>address_category2</td>
                          <td className="type">String</td>
                          <td className="ex">시/군/구</td>
                        </tr>
                        <tr>
                          <td>address_category3</td>
                          <td className="type">String</td>
                          <td className="ex">읍/면/동</td>
                        </tr>
                        <tr>
                          <td>address_category4</td>
                          <td className="type">String</td>
                          <td className="ex">리</td>
                        </tr>
                        <tr>
                          <td>jibun</td>
                          <td className="type">String</td>
                          <td className="ex">지번</td>
                        </tr>
                        <tr>
                          <td>cut_address</td>
                          <td className="type">String</td>
                          <td className="ex">축약 주소</td>
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

export default WebReverseGeoCodingPage;
