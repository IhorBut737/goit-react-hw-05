import React from "react";
import s from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  const { alt_description, urls } = image;

  return (
    <div className={s.card} onClick={() => onClick(image)}>
      <img
        src={urls.small}
        alt={alt_description}
        loading="lazy"
        className={s.image}
      />
    </div>
  );
};
export default ImageCard;
