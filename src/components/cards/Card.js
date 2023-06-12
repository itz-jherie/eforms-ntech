import React from 'react';
import "./card.css";
import {BsFolder} from "react-icons/bs"

import data from "../../assets/dataFiles/dataCards";

const Card = ({title, content, klass}) => (
  <div className={`card ${klass}`}>

    <span className={`bs--circle ${klass}`}><BsFolder className='folder'/></span>

    <h3 className="card--title">{title}</h3>

    <p className="card--content">{content}</p>

  </div>
)

export default Card;