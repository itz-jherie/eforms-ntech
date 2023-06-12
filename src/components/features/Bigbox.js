import React from 'react'
import data from '../../assets/dataFiles/documents'

import "./box.css"

const Bigbox = ({icon, name}) => {

    const dataElement = data.map((item, i) => (
        <div key={i} className="bigBox">

            <div className="circle">
                {item.icon}
            </div>
            <h1 className='bigBox--text'> {item.title} </h1>
            <div className='bigBox--content'>{item.content}</div>

        </div>
    ))
  return (
    <div className='biggerBox'>
        {dataElement}
    </div>

  )
}

export default Bigbox;