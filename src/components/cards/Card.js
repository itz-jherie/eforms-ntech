import React from 'react';
import "./card.css";
import data from "../../assets/dataFiles/dataCards";

const Card = ({title, content}) => {
 
  return (
    <div className="card">
      <h3 className="card--title">{title}</h3>

      <p className="card--content">{content}</p>

    </div>
  )
}

export default Card;