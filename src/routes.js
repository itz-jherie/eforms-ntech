import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Sidebar from "./components/sidebar/Sidebar"
import NewSidebar from "./components/newsidebar/NewSidebar";
import Layout from "././pages/layout/Layout"
import Home from "././pages/home/Home"
import Business from '././pages/business/Business'
import Personal from '././pages/personal/Personal'
import Signin from "././pages/form/Signin"
import Signup from "././pages/form/Signup"
import Errorpage from "././pages/errorpage/Errorpage"
// import DashBoard from "././pages/dashboard/Dashboard"
import Settings from "././pages/dashboard/settings/Settings"
import TheDashboard from "./pages/TheDashboard"
import NewSettings from "./pages/NewSettings";
import Account from "./pages/Account"
import Payment from "./pages/Payment"
import { useState } from "react";

const DashboardRoutes = () => {
    const [isActive, setIsActive] = useState(true)

    return (
        <div className="app-routes">
            <NewSidebar isActive={isActive} />
            <Routes>
                <Route path="dashboard" element={<TheDashboard />} />
                <Route path="new-settings" element={<NewSettings />} />
                <Route path="account" element={<Account />} />
                <Route path="payment" element={<Payment />} />
            </Routes>
        </div>
    )
}


const AppRoutes = () => {
    const [loggedIn, setLoggedIn] = useState(true)
    return (
        <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="Business" element={<Business />} />
                <Route path="Personal" element={<Personal />} />
                <Route path="Signin" element={<Signin />} />
                <Route path="Signup" element={<Signup />} />
                {/* <Route path="*" element={<Errorpage />} /> */}
                <Route path="settings" element={<Settings/>} />
            </Route>
          </Routes>
          {loggedIn ? <DashboardRoutes /> : null}
        </BrowserRouter>
    )
}
export default AppRoutes