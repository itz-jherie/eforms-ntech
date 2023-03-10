import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import "./searchbar.css"

const Searchbar = () => {
  return (
    <div className='search'>
        <AiOutlineSearch className='search__icon'/>
        <input placeholder='searching tracking ID' id="searchbar"/>
    </div>
  )
}

export default Searchbar