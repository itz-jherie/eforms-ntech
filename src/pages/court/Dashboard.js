import React from 'react'
import { Outlet } from 'react-router'
import { ProSidebarProvider } from 'react-pro-sidebar'
import SideBar from './SideBar'
import '../court/styles/dashbord.css'
import Searchbar from '../../components/searchbar/Searchbar'
import Data from "../../assets/court/overview_data.js";
import parse from "html-react-parser"



const Dashboard = () => {

  //console.log(overView.icon);

  const styles = {
    color: Data.color
  }
  
  return (
    <div className='dashboard'>

      <div className='dashboard__head'>
      <h1 className='dashboard__header'> DASHBOARD </h1>

      <Searchbar className="searchbar"/>
      </div>

      <div className='dashboard__body'>

      <h1 className='overview__title'>Overview</h1>

      <div className="dashboard__overview">

        {Data.map((overView, i) => (
            <div className='dashboard__box' key={i}>

            <div className='comp component__1'>
              <span className='circle__icon' style={{styles}}>{overView.icon}</span>
            </div>
            <div className='comp component__2'>
              <h1 className="result__h1">{overView.result}</h1>
              <span className='result__text'>{overView.text}</span>
            </div>
        
      </div>
      ))}
      </div>
      </div>

      {/* SECOND BODY*/}
      <div className='dashboard__applications'>
        <h1 className='dash__application-h1'>Recent Applications</h1>

        <table style={{width: '100%'}}>

          <tr>
            <th>Username</th>
            <th>Doc Name</th>
            <th>Date Created</th>
            <th>Tracking ID</th>
            <th>Status</th>
          </tr>

          <tr>
            
          </tr>
        </table>
      </div>

    </div>
  )
}

export default Dashboard