import React from "react";

const CountMenu = ({ countLabel }) => {
  return (
    <div className="data-control-btn">
      <div className="title">{countLabel} : </div>
      <button type="button" name="delete" className="btn-delete">
        &ndash;
      </button>
      <button type="button" name="add" className="btn-add">
        +
      </button>
    </div>
  );
};

export default CountMenu;
