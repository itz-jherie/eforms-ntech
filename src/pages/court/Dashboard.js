import React, { useState } from 'react'
//import SideBar from './SideBar'
import '../court/styles/dashbord.css'
import Searchbar from '../../components/searchbar/Searchbar'
import Data from "../../assets/court/overview_data.js";
import TableRow from '../../components/table/TableRow';


// Datas for table row
import details from "../../data/dashboardData";
import pending_data from "../../assets/court/pending_data"
import approved_data from "../../assets/court/approved_data"
import rejected_data from "../../assets/court/rejected_data"
// BNJI0\[\]


const Dashboard = ({menu, setMenu}) => {

  const [dash, setDash] = useState(0);

  // const [menu, setMenu] = useState(false);

  function categorize() {
    if(Data.id == 1){
      setDash(1);
    }else if (Data.id == 2){
      setDash(2);
    }else if (Data.id == 3){
      setDash(3);
    }else{
      setDash(0);
    }
  }

  const DisplayTable = () => {
    if(dash == 1){
      return <TableRow data={pending_data}/>
    }else if (dash == 2){
      return <TableRow data={approved_data}/>
    }else if (dash == 3){
      return <TableRow data={rejected_data}/>
    }else{
      return <TableRow data={details}/>
    }
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
    <div className='dashboard' >
      <div className='dashboard__upper-head'> <h1>DASHBOARD</h1> </div>
      <div className='dashboard__head'>
   
    
     <h1 className='dashboard__header'> DASHBOARD </h1>
   

      <Searchbar className="searchbar"/>

      </div>

      <div className='dashboard__body'>

      <h1 className='overview__title'>Overview</h1>

      <div className="dashboard__overview">

        {Data.map((overView, i) => (
            <div className='dashboard__box' key={i} onClick={categorize}>

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

            {<DisplayTable />}
          
          <div className='paginatn'>
            
          </div>
         </div>
)
            }


export default Dashboard;