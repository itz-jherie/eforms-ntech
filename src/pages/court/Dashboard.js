import React, { useCallback, useEffect, useState } from 'react'
//import SideBar from './SideBar'
import '../court/styles/dashbord.css'
import Searchbar from '../../components/searchbar/Searchbar'
 import Data from "../../assets/court/overview_data"

import TableRow from '../../components/table/tablerow/TableRow';

// import { faker } from '@faker-js/faker';
const { faker } = require('@faker-js/faker');


// BNJI0\[\]


const Dashboard = () => {

  // const [dash, setDash] = useState(Data);

  // const [menu, setMenu] = useState(false);

   
   
   //const fakeData = [];
  const [fakeData, setFakeData] = useState([]);
    
  const [hold, setHold] = useState("All");

      const generateFakeData = useCallback(() => {

        const name = faker.name.findName();
        const documentName = faker.lorem.words();
        const date = faker.date.recent();
        const trackingId = faker.datatype.uuid();
        const status = faker.helpers.arrayElement(['Pending', 'Completed', 'Rejected']);
    
        return {
          name,
          documentName,
          date,
          trackingId,
          status
        }
      }, [])
  
      const numberOfItems = 10;
  
      for (let i=0; i< numberOfItems; i++){
        const fkData = generateFakeData();
        fakeData.push(fkData);
      }
  

  function categorize(overView) {

    if (overView.status === "Pending"){
      setHold("Pending");
    
    } else if (overView.status === "Approved"){
      setHold("Completed");
    
    }else if (overView.status === "Rejected"){
      setHold("Rejected");
    
    } else {
      setHold("All");
    
    }

    
  }


  const DisplayTable = () => {
    return  <TableRow fakeData={fakeData} hold={hold}/>
  }
 
  // function collapseSidebar(){
  //   setMenu((c) => !c);
  // }

  // function collapseSidebarUsingDashboard() {
  //   if (menu == true){
  //     setMenu(false);
  //   }
  // }

  return (
    // <div className='dashboard' onClick={collapseSidebarUsingDashboard}>
    <div className='dashboard'>
      <div className='dashboard__upper-head'> <h1>DASHBOARD</h1> </div>
      <div className='dashboard__head'>
   
    
     <h1 className='dashboard__header'> DASHBOARD </h1>
   
      {/* <Searchbar fakeData={fakeData} numberOfItems={numberOfItems} className="searchbar"/> */}

      </div>

      <div className='dashboard__body'>

      <h1 className='overview__title'>Overview</h1>

      <div className="dashboard__overview">

        {Data.map((overView, i) => (
            <div className='dashboard__box' key={i} onClick={() => categorize(overView)}>

            <div className='comp component__1'>
              <span className='circle__icon' style={{backgroundColor: overView.color}}>{overView.icon}</span>
            </div>
            <div className='comp component__2'>
              <h1 className="result__h1">{overView.result}</h1>
              <span className='result__text'>{overView.text}</span>
            </div>
        
      </div>
      ))}
      </div>
      </div>


          
          <div className='paginatn'>
          {<DisplayTable />}
          </div>
         </div>
)
            }


export default Dashboard;