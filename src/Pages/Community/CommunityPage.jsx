import React from "react";
import { Link } from "react-router-dom";
import Tab from "components/Tab";
import Pagination from "components/Pagination";
import { ICON } from "constant";
const CommunityPage = () => {
  return (
    <section>
      <div className="cont-box">
        <h2 className="border-none title-mb">커뮤니티</h2>
      </div>

      <div className="tab-box-wrap">
        <Tab />

        <form>
          <fieldset>
            <legend>검색</legend>
            <div className="search-box">
              <input className="search-input" type="search" name="notice-search" />
              <button className="search-svg" type="button">
                <img src={ICON.SEARCH} alt="search icon" />
              </button>
            </div>
          </fieldset>
        </form>
      </div>

      <div className="result-list-wrap">
        <ul className="result-list">
          {new Array(2).fill(undefined).map((_, index) => {
            return (
              <li className="result-list__item community" key={index}>
                <Link to="/community/:idx">
                  <div className="result__header community">
                    <div className="result__header--tag">API</div>
                    <div className="result__header--title">카카오 내비 연동 인증 실패 문의</div>
                  </div>

                  <div className="result__date flex-start">
                    <span className="user-nickname">개발초보</span>
                    <span>2023년 12월 13일</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <Link className="btn-common tab-box--write" to="/community-write">
          작성하기
        </Link>

        <Pagination />
      </div>
    </section>
  );
};

export default CommunityPage;
