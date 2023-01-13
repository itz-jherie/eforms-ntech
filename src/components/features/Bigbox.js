import React from 'react'
import data from '../../assets/dataFiles/documents'

import "./box.css"

const Bigbox = ({icon, name}) => {

    const dataElement = data.map((item, i) => (
        <div key={i} className="bigBox">

            <div className="circle">
                {item.icon}
            </div>
            <p className='bigBox--text'> {item.name} </p>
        </div>
    ))
  return (
    <>
        {dataElement}
    </>

  )
}

export default Bigbox;