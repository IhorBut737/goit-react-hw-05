import React from "react";
import { FadeLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <FadeLoader color="#ffffff" size={20} />
    </div>
  );
};

export default Loader;
