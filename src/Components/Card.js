import React from "react";
import "./card.css";
import "../Assets/font.css";
const Card = ({name, email, tech, image}) => {
  return (
    <div className="card grow">
      <img height="210" width="230" src={image} alt="my_photo" />
      <div className="info">
        <h2>{name}</h2>
        <h5>{email}</h5>
        <p>{tech.join(', ')}</p>
      </div>
    </div>
  );
};

export default Card;