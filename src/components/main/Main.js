import React from 'react';
import "./main.css";
import { Link } from 'react-router-dom';
import Card from "../../components/cards/Card"
import Button from "../../components/cta/Button"
import data from "../../assets/dataFiles/dataCards"
import Support from "../support/Support"

const Main = () => {

  // CARDS
  const cardElements = data.map((card, i) => (
    <Card key={i} img={card.img} title={card.title} content={card.content} klass={card.klass}/>
  ))
  return (
    <div className="main1">

    <div className="main--top">
      <h1>Create Your Legal Document In Few Moments</h1>
    </div>

      {/* <Support />       */}

      <div className="main--bottom">
        {cardElements}
      </div>
    </div>
  )
}

export default Main