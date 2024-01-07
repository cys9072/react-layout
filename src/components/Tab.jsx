import React, { useState } from "react";
import { Link } from "react-router-dom";

const TAB_LIST = [
  {
    id: 1,
    label: "전체",
  },
  {
    id: 2,
    label: "MAP",
  },
  {
    id: 3,
    label: "API",
  },
  {
    id: 4,
    label: "SDK",
  },
];
const Tab = () => {
  const [isTabClick, setIsTabClick] = useState(0);
  return (
    <div className="tab-box">
      {TAB_LIST.map((tab_item, tab_index) => {
        return (
          <Link key={tab_item.id} className={`tab-box__item ${isTabClick === tab_index && "active"}`} onClick={() => setIsTabClick(tab_index)}>
            {tab_item.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Tab;
