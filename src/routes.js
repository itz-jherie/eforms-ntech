import {BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "././pages/layout/Layout"
import Home from "././pages/home/Home"
import Business from '././pages/business/Business'
import Personal from '././pages/personal/Personal'
import Signin from "././pages/form/Signin"
import Signup from "././pages/form/Signup"
import Errorpage from "././pages/errorpage/Errorpage"
import UserDashboardRoutes from "./pages/UserDashboardRoutes";
import AdminDashboardRoutes from "./pages/admin/AdminDashboardRoutes";

const AppRoutes = () => {
    return (
        <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="business" element={<Business />} />
                <Route path="personal" element={<Personal />} />
                <Route path="signin" element={<Signin />} />
                <Route path="signup" element={<Signup />} />
                <Route path="*" element={<Errorpage />} />
                <Route path="user-dashboard/*" element={<UserDashboardRoutes />} />
                {/* <Route path="admin-dashboard/*" element={<AdminDashboardRoutes />} /> */}
                <Route path="admin/*" element={<AdminDashboardRoutes />} />
            </Route>
          </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes