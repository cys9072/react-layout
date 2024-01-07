import { ICON } from "constant";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
  const [page] = useState([
    { id: 1, label: 1 },
    { id: 2, label: 2 },
    { id: 3, label: 3 },
    { id: 4, label: 4 },
    { id: 5, label: 5 },
  ]);

  const [isPageClick, setIsPageClick] = useState(0);
  return (
    <div className="pagination">
      <button className="pagination-btn pagination-prev">
        <img src={ICON.PAGINATION_ARROW} alt="뒤로가기 꺽쇠 모양 버튼 이미지" />
      </button>
      <div className="pagination-num-box">
        {page?.map((page_item, page_index) => {
          return (
            <Link key={page_item.id} className={`pagination-btn pagination-num ${isPageClick === page_index && "active"}`} onClick={() => setIsPageClick(page_index)}>
              {page_item.label}
            </Link>
          );
        })}
      </div>
      <button className="pagination-btn pagination-next">
        <img src={ICON.PAGINATION_ARROW} alt="앞으로 꺽쇠모양 버튼 이미지" />
      </button>
    </div>
  );
};

export default Pagination;
