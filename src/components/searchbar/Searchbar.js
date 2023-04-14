import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import "./searchbar.css"

const Searchbar = (props) => {

  const {fakeData, numberOfItems} = props;

  const [data, setSearchData] = useState("");
  const [nameData, setNameData] = useState([]);

  console.log(fakeData);
  // populate nameData array with the fakerjs
  useEffect(() => {

    const dataArray = [];

  //   for (let i = 0; i < numberOfItems; i++) {
  //     dataArray.push(fakeData.i.name.findName());
  //   }
  //   setNameData(dataArray);
  },
   []);

  const handleInputChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredData = fakeData.filter((item) => item.name.toLowerCase().includes(searchTerm));
    setSearchData(searchTerm);
    setNameData(filteredData);
  }

  //const filteredNames = nameData.filter((name) => name.toLowerCase().includes(setData.toLowerCase()));

 // console.log(filteredNames);

  return (
    <div className='search'>
      
      <AiOutlineSearch className='search__icon'/>
        <input
          name="data"
          value={data}
          onChange={handleInputChange} 
        placeholder='searching tracking ID' 
        id="searchbar"
        />
      {
        nameData.map((name) => (
          <div key={name}>{name}</div>
        ))
      }
    </div>
  )
}

export default Searchbar;