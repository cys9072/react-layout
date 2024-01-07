import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HEADER_SIDE_DATA } from "./headerList";
import AnimateHeight from "react-animate-height";

const LINK_TYPE = {
  HAS_LINK: true,
  NO_LINK: false,
};
const AcoBody = ({ data, active, onClick, childContent }) => {
  return (
    <>
      {LINK_TYPE.HAS_LINK === !!data.linkTo && (
        <li id={data.id ? data.id : null} className={`${active ? "open on none-click" : ""} ${childContent === null ? "plus-hidden" : ""}`}>
          <Link to={data.linkTo} onClick={onClick} target={`${data.newTab === true ? "_blank" : ""}`}>
            {data.icon && <img src={data.icon} alt="" />}
            {data.title}
          </Link>
        </li>
      )}

      {LINK_TYPE.NO_LINK === !!data.linkTo && (
        <li id={data.id ? data.id : null} className={`${active ? "open on" : ""} ${childContent === null ? "plus-hidden" : ""}`}>
          <button onClick={onClick}>
            {data.icon && <img src={data.icon} alt="" />}
            {data.title}
          </button>
          {
            <AnimateHeight id="list-panel" duration={300} height={active ? "auto" : 0}>
              {data?.content}
            </AnimateHeight>
          }
        </li>
      )}
    </>
  );
};

const AccordionContainer = ({ data }) => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  /**
   *
   * @param {*} index 클릭 한 index
   * @returns 최초 null 상태의 state를 if 문으로 비교해, 클릭 한 index와 active가 같으면 null return, 같지 않으면 active에 index 주입
   */
  const handleClick = (item, index) => {
    if (!!item.combineLink) navigate(item.combineLink);
    if (active === index) return setActive(null);
    if (active !== index) return setActive(index);
  };
  return (
    <>
      {data.length === 0 && null}
      {data &&
        data?.map((item, index) => {
          return <AcoBody key={index} childContent={item.content} data={item} active={active === index} onClick={() => handleClick(item, index)} />;
        })}
    </>
  );
};

/**
 *
 * @param {*} baseData init data (최초 데이터)
 * @param {*} num check menu depth (기능상의 이점은 없으나, 추후 수정 할때 depth 확인용)
 * @returns 데이터를 순회 하면서, content의 length가 0이 아니면 하위 depth에 아코디언을 새로 만들고 length가 0 이면 null을 주입
 */
const buildData = (baseData, num) => {
  if (baseData.length === 0) return;
  if (baseData.length !== 0) {
    for (let i = 0; i < baseData.length; i++) {
      buildData(baseData[i].content, num + 1);
      if (baseData[i].content.length !== 0) {
        baseData[i].content = (
          <ul className={`${num === 1 ? "inner" : ""} ${num === 2 ? "list" : ""} ${baseData[i].lastClass ? "list-inner" : ""} sidebar-nav-title`}>
            <AccordionContainer data={baseData[i].content} />
          </ul>
        );
      } else {
        baseData[i].content = null;
      }
    }
  }
};

buildData(HEADER_SIDE_DATA, 0);

const CustomAccordion = () => (
  <ul className="sidebar-nav">
    <AccordionContainer data={HEADER_SIDE_DATA} />
  </ul>
);

export default CustomAccordion;
