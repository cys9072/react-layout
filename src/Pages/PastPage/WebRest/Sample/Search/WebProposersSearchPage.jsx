import CustomModal from "components/CustomModal";
import DoitBtn from "components/DoitBtn";
import MapDesc from "components/MapDesc";
import MapTitle from "components/MapTitle";
import React from "react";
import WebRestInnerLayout from "../../WebRestInnerLayout";

const WebProposersSearchPage = () => {
  return (
    <>
      <CustomModal
        label="높은 조회 빈도의 검색어 추천"
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
                <td className="ex">한글/영문/숫자 50 Byte (한글 25자)</td>
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
        <MapTitle label="높은 조회 빈도의 검색어 추천" />
        <div className="contents no-border">
          <MapDesc
            label={
              <>
                조회 빈도가 높은 키워드를 추천하여 검색합니다. <br />
                키워드를 입력하고 추천된 검색어를 확인해 보세요.
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
                          <td className="url">https://api-maps.cloud.toast.com/maps/v3.0/appkeys/&#123;appkey&#125;/proposers</td>
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
                          <th>타입</th>
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
                          <td className="ex">한글/영문/숫자 50 Byte (한글 25자)</td>
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
                          <th>타입</th>
                          <th className="ex">설명</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td rowSpan="3">
                            header
                            <span> (Object)</span>
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
                          <td rowSpan="4">
                            proposer
                            <span>(Object, Array)</span>
                          </td>
                          <td colSpan="2">result</td>
                          <td className="type">Boolean</td>
                          <td className="ex">검색 결과 여부</td>
                        </tr>
                        <tr>
                          <td colSpan="2">count</td>
                          <td className="type">Integer</td>
                          <td className="ex">추천 검색어 개수</td>
                        </tr>
                        <tr>
                          <td rowSpan="2">
                            keyword
                            <span>(Object, Array)</span>
                            <span>추천 검색어 목록</span>
                          </td>
                          <td>keyword</td>
                          <td className="type">String</td>
                          <td className="ex">추천 검색어</td>
                        </tr>
                        <tr>
                          <td>frequency</td>
                          <td className="type">Integer</td>
                          <td className="ex">조회 빈도</td>
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

export default WebProposersSearchPage;
