import React, { useState } from "react";

const DropDownMenu = ({ searchOption }) => {
  const [active, setActive] = useState(false);
  const [optionValue, setOptionValue] = useState("");

  return (
    <div className="dropdown-wrap">
      <div className="title">검색 타입 : </div>
      <div className={`dropdown ${active ? "active" : ""}`} onClick={() => setActive((val) => !val)}>
        <span className="dropdown-title">{optionValue === "" ? "선택" : optionValue}</span>
        <ul className={`dropdown-menu ${active ? "active" : ""}`}>
          {searchOption?.map((optItem, optIndex) => {
            return (
              <li key={optItem.id} data-type={optItem.dataType} onClick={() => setOptionValue(optItem.label)}>
                {optItem.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DropDownMenu;
