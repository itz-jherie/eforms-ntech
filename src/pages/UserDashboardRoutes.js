import { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import NewSidebar from '../components/newsidebar/NewSidebar'
import TheDashboard from './dashboard/TheDashboard'
import NewSettings from './dashboard/NewSettings'
import Account from './dashboard/Account'
import Payment from './dashboard/Payment'

const UserDashboardRoutes = () => {
    const [isActive, setIsActive] = useState(true)

    return (
        <div className='user-routes'>
            <NewSidebar isActive={isActive} />
            <Routes>
                    <Route path='' element={<TheDashboard />} />
                    <Route path="settings" element={<NewSettings />} />
                    <Route path="account" element={<Account />} />
                    <Route path="payment" element={<Payment />} />
            </Routes>
            <Outlet />
        </div>
    )
}
export default UserDashboardRoutes