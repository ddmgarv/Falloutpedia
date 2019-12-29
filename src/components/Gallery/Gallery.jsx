import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default ({ content, exitGal }) => {
  return (
    <div className="gallery">
      <div className="gallery__exit" onClick={exitGal}>
        <FontAwesomeIcon icon={faTimesCircle} />
      </div>
      <div className="gallery__container">
        {content.map((falloutImg, index) => (
          <div className="gallery__container--item" key={index}>
            <img src={falloutImg} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
