import React from 'react';
import "./main.css";
import Card from "../../components/cards/Card"
import Button from "../../components/cta/Button"
import data from "../../assets/dataFiles/dataCards"

const Main = () => {
 //SELECT BUTTON
  const options = ['Ondo', 'Ekiti'];
  const optionsElement = options.map((option, i) => (
    
      <option key={i}>
        {option}
      </option>
    
  ))
  const onOptionChangeHandler = (event) => {
    console.log(event.target.value);
  }

  // CARDS
  const cardElements = data.map((card, i) => (
    <Card key={i} title={card.title} content={card.content}/>
  ))
  return (
    <div className="main">

      <div className="main--top">
        <div className='main--top-first'>
        <h3 className='main--header'>Create Your Legal Documents In Few Minutes</h3>
        <input type="text" className='inputBox' placeholder='Enter the name of your document' />
        </div>

        <div className='main--top-inner'>

        <select onChange={onOptionChangeHandler} className="selectOption">
        <option>Select state</option>
        {optionsElement}
        </select>

        <Button className="mdBtn proceedBtn" content="Proceed"/>
        </div>
      </div>

      <div className="main--bottom">
        {cardElements}
      </div>
    </div>
  )
}

export default Main