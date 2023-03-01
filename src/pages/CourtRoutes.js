import React from 'react'
import {Routes, Route, Outlet} from 'react-router-dom'
import Dashboard from './court/Dashboard';
import SignIn from './court/SignIn';
import SideBar from './court/SideBar';
import PendingApplication from './court/PendingApplication';
import ApprovedAffidavit from './court/ApprovedAffidavit';
import CommissionerOath from './court/CommissionerOath';


const CourtRoutes = () => {

  return (
      <div>

        <Routes>
          <Route path="/" element={<Dashboard />}>
          <Route path='pendingapplication' element={<PendingApplication />} />
          <Route path='commisionerofoath' element={<CommissionerOath />} />
          <Route path='approvedaffidavit' element={<ApprovedAffidavit />} />
          -
          </Route>
        </Routes>
      </div>
  )
}

export default CourtRoutes