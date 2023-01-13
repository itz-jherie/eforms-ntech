import React from 'react'
import "./selectinput.css";

const Selectinput = () => {
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
  return (
    <select onChange={onOptionChangeHandler} className="selectOption">
        <option>Select state</option>
        {optionsElement}
        </select>

  )
}

export default Selectinput