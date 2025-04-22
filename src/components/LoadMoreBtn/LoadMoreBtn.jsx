import React from "react";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={s.loadMore}>
      <button onClick={onClick} className={s.loadBtn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
