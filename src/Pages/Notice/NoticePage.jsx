import React from "react";
import { ICON } from "constant";
import { Link } from "react-router-dom";
import Tab from "components/Tab";
import Pagination from "components/Pagination";
const Notice = () => {
  return (
    <section>
      <div className="cont-box">
        <h2 className="border-none title-mb">공지사항</h2>
      </div>

      <div className="tab-box-wrap">
        <Tab />
        <form>
          <fieldset>
            <legend>검색</legend>
            <div className="search-box">
              <input className="search-input" type="search" name="notice-search" />
              <button className="search-svg" type="button">
                <img src={ICON.SEARCH} alt="" />
              </button>
            </div>
          </fieldset>
        </form>
      </div>

      <div className="result-list-wrap">
        <ul className="result-list">
          {new Array(2).fill(undefined).map((_, index) => {
            return (
              <li className="result-list__item" key={index}>
                <Link to="/notice/:idx">
                  <div className="result__header">
                    <div className="result__header--tag">API</div>
                    <div className="result__header--title">책 검색 API 스펙변경안내 (변경일정:23년 7월22일)</div>
                  </div>
                  <div className="result__description">안녕하세요 개발자센터입니다. 서비스 개편에 따라, 서비스에서 제공하지 않는 값에 대한 api 스펙변경사항이있어 안내 드립니다. 요청변수 및 출력결과가 제한되는 값은 아래와 같습니다. -대상 검색 API</div>
                  <div className="result__date">2023년 12월 13일</div>
                </Link>
              </li>
            );
          })}
        </ul>

        <Pagination />
      </div>
    </section>
  );
};

export default Notice;
