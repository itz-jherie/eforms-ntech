import { useState } from "react"
import { Routes, Route, Outlet } from 'react-router-dom'
import AdminSidebar from "../../components/adminsidebar/AdminSidebar"
import AdminDashboard from "./AdminDashboard"
import StateManagement from "./StateManagement"
import LGAManagement from "./LGAManagement"

const AdminDashboardRoutes = () => {
    const [isActive, setIsActive] = useState(true)

    return (
        <div className="admin-routes">
            <AdminSidebar isActive={isActive} />
            <Routes>
                <Route path="" element={<AdminDashboard />} />
                <Route path="state-management" element={<StateManagement />} />
                <Route path="lga-management" element={<LGAManagement />} />
            </Routes>
            <Outlet />
        </div>
    )
}
export default AdminDashboardRoutes