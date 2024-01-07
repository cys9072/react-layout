import CustomModal from "components/CustomModal";
import DoitBtn from "components/DoitBtn";
import MapDesc from "components/MapDesc";
import MapTitle from "components/MapTitle";
import React from "react";
import WebRestInnerLayout from "../../WebRestInnerLayout";

const WebPoiDetailSearchPage = () => {
  return (
    <>
      <CustomModal
        label="서비스 확장에 유용한 POI 상세 검색"
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
                <td>poiid</td>
                <td className="type">String</td>
                <td>O</td>
                <td>
                  <input type="text" />
                </td>
                <td className="ex">
                  POI ID
                  <span>poiid를 구분자','와 함께 입력 (복수개 가능 186개까지)</span>
                  <span>ex) poiid=717788,8972661,7630525</span>
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
        <MapTitle label="서비스 확장에 유용한 POI 상세 검색" />
        <div className="contents no-border">
          <MapDesc
            label={
              <>
                POI 검색 결과에 대한 상세 정보를 제공합니다. [홈페이지, 이메일, FAX, 전화번호, 교통편, 유가정보]
                <br />
                키워드를 입력해 POI 상세 정보를 확인해 보세요.
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
                          <td className="url">https://api-maps.cloud.toast.com/maps/v3.0/appkeys/&#123;appkey&#125;/pois</td>
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
                          <td>poiid</td>
                          <td className="type">String</td>
                          <td>O</td>
                          <td className="ex">
                            POI ID
                            <span>poiid를 구분자','와 함께 입력 (복수개 가능 186개까지)</span>
                            <span>ex) poiid=717788,8972661,7630525</span>
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
                          <td rowSpan="100">
                            poi
                            <span>(Object)</span>
                          </td>
                          <td colSpan="3">totalcount</td>
                          <td className="type">Integer</td>
                          <td className="ex">전체 검색결과 대상 개수</td>
                        </tr>
                        <tr>
                          <td colSpan="3">count</td>
                          <td className="type">Integer</td>
                          <td className="ex">검색 결과 개수</td>
                        </tr>
                        <tr>
                          <td rowSpan="44">
                            poiinfo
                            <span>(Array)</span>
                          </td>
                          <td colSpan="2">poiid</td>
                          <td className="type">Integer</td>
                          <td className="ex">POI ID</td>
                        </tr>
                        <tr>
                          <td colSpan="2">dpx</td>
                          <td className="type">String</td>
                          <td className="ex">display X좌표 (WGS84의 경우 longitude)</td>
                        </tr>
                        <tr>
                          <td colSpan="2">dpy</td>
                          <td className="type">String</td>
                          <td className="ex">display Y좌표 (WGS84의 경우 latitude)</td>
                        </tr>
                        <tr>
                          <td colSpan="2">rpx</td>
                          <td className="type">String</td>
                          <td className="ex">
                            탐색 X좌표 (WGS84의 경우 longitude)
                            <span>경로 탐색에 사용되는 X좌표</span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="2">rpy</td>
                          <td className="type">String</td>
                          <td className="ex">
                            탐색 Y좌표 (WGS84의 경우 latitude)
                            <span>경로 탐색에 사용되는 Y좌표</span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="2">name1</td>
                          <td className="type">String</td>
                          <td className="ex">정식 명칭</td>
                        </tr>
                        <tr>
                          <td colSpan="2">name2</td>
                          <td className="type">String</td>
                          <td className="ex">축약 명칭</td>
                        </tr>
                        <tr>
                          <td colSpan="2">name3</td>
                          <td className="type">String</td>
                          <td className="ex">확장 명칭1</td>
                        </tr>
                        <tr>
                          <td colSpan="2">name4</td>
                          <td className="type">String</td>
                          <td className="ex">확장 명칭2</td>
                        </tr>
                        <tr>
                          <td colSpan="2">admcode</td>
                          <td className="type">String</td>
                          <td className="ex">법정동 코드</td>
                        </tr>
                        <tr>
                          <td colSpan="2">address</td>
                          <td className="type">String</td>
                          <td className="ex">주소</td>
                        </tr>
                        <tr>
                          <td colSpan="2">jibun</td>
                          <td className="type">String</td>
                          <td className="ex">지번</td>
                        </tr>
                        <tr>
                          <td colSpan="2">roadname</td>
                          <td className="type">String</td>
                          <td className="ex">새 주소 도로명</td>
                        </tr>
                        <tr>
                          <td colSpan="2">roadjibun</td>
                          <td className="type">String</td>
                          <td className="ex">새 주소 지번</td>
                        </tr>
                        <tr>
                          <td colSpan="2">detailaddress</td>
                          <td className="type">String</td>
                          <td className="ex">상세 주소</td>
                        </tr>
                        <tr>
                          <td colSpan="2">catecode</td>
                          <td className="type">String</td>
                          <td className="ex">분류 코드</td>
                        </tr>
                        <tr>
                          <td colSpan="2">catename</td>
                          <td className="type">String</td>
                          <td className="ex">분류 명칭</td>
                        </tr>
                        <tr>
                          <td colSpan="2">fulladdress</td>
                          <td className="type">String</td>
                          <td className="ex">전체 주소 (행정주소+지번+상세주소)</td>
                        </tr>
                        <tr>
                          <td colSpan="2">zip</td>
                          <td className="type">String</td>
                          <td className="ex">우편번호</td>
                        </tr>
                        <tr>
                          <td colSpan="2">homeage</td>
                          <td className="type">String</td>
                          <td className="ex">홈페이지 url</td>
                        </tr>
                        <tr>
                          <td colSpan="2">email</td>
                          <td className="type">String</td>
                          <td className="ex">email</td>
                        </tr>
                        <tr>
                          <td colSpan="2">howtogo</td>
                          <td className="type">String</td>
                          <td className="ex">교통편</td>
                        </tr>
                        <tr>
                          <td colSpan="2">tel1</td>
                          <td className="type">String</td>
                          <td className="ex">전화번호1</td>
                        </tr>
                        <tr>
                          <td colSpan="2">tel2</td>
                          <td className="type">String</td>
                          <td className="ex">전화번호2</td>
                        </tr>
                        <tr>
                          <td colSpan="2">fax1</td>
                          <td className="type">String</td>
                          <td className="ex">팩스번호1</td>
                        </tr>
                        <tr>
                          <td colSpan="2">fax2</td>
                          <td className="type">String</td>
                          <td className="ex">팩스번호2</td>
                        </tr>
                        <tr>
                          <td colSpan="2">detail_count</td>
                          <td className="type">Integer</td>
                          <td className="ex">분류 상세 항목 갯수</td>
                        </tr>
                        <tr>
                          <td colSpan="2">etc_count</td>
                          <td className="type">Integer</td>
                          <td className="ex">분류 기타 항목 갯수</td>
                        </tr>
                        <tr>
                          <td rowSpan="2">
                            detailinfo
                            <span>(Array)</span>
                          </td>
                          <td>name</td>
                          <td className="type">String</td>
                          <td className="ex">분류 상세 항목 설명</td>
                        </tr>
                        <tr>
                          <td>value</td>
                          <td className="type">String</td>
                          <td className="ex">분류 상세 항목 내용</td>
                        </tr>
                        <tr>
                          <td rowSpan="2">
                            etcinfo
                            <span>(Array)</span>
                          </td>
                          <td>name</td>
                          <td className="type">String</td>
                          <td className="ex">분류 기타 항목 설명</td>
                        </tr>
                        <tr>
                          <td>value</td>
                          <td className="type">String</td>
                          <td className="ex">분류 기타 항목 내용</td>
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

export default WebPoiDetailSearchPage;
