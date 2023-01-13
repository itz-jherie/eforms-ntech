import React from 'react'
import data from '../../assets/dataFiles/courts'

const Smallbox = () => {

  const dataElement = data.map((item, i) => (
    <div className='smallBox'>
      <div className='sBox'>{item.icon}</div> 
      <div className='sBox2'>
        <span>{item.num}</span>
        <p>{item.name}</p>
      
      </div>
    </div>
  ))
  return (
    <>
      {dataElement}
    </>
  )
}

export default Smallbox