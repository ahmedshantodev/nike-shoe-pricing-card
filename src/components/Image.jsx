import React from "react";

const Image = ({ imageSrc , altText , style}) => {
  return <img src={imageSrc} alt={altText}  className={style}/>
};

export default Image;
