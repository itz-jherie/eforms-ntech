import React from 'react'
import data from '../../assets/dataFiles/courts'
import "./box.css"

const Smallbox = () => {

  const dataElement = data.map((item, i) => (
    <div className='smallBox' key={i}>
      <div className='sBox'>{item.icon}</div> 
      <div className='sBox2'>
        <span>{item.num}</span>
        <p>{item.name}</p>
      
      </div>
    </div>
  ))
  return (
    <div className='smalle'>
      {dataElement}
    </div>
  )
}

export default Smallbox