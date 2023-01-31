import { useState } from "react"
import { Routes, Route, Outlet } from 'react-router-dom'
import AdminSidebar from "../../components/adminsidebar/AdminSidebar"
import AdminDashboard from "./AdminDashboard"
import StateManagement from "./StateManagement"
import LGAManagement from "./LGAManagement"
import ChangePassword from "./ChangePassword"
import ManageAdmin from "./ManageAdmin"
import ManageAffidavit from "./ManageAffidavit"
import PaymentHistory from "./PaymentHistory"
import AllUsers from "./AllUsers"
import ManageCourt from "./ManageCourt"
import AddNewState from "../../components/newstate/AddNewState"
import AdminHamburger from "./AdminHamburger"
import NewLGA from "../../components/newlga/NewLGA"
import ModifyState from "../../components/modifystate/ModifyState"
import ModifyLGA from "../../components/modifylga/ModifyLGA"
import AddAdmin from "../../components/addadmin/AddAdmin"
import ModifyAdmin from "../../components/modifyadmin/ModifyAdmin"
import NewCourt from "../../components/newcourt/NewCourt"
import ModifyCourt from "../../components/modifycourt/ModifyCourt"
import NewAffidavit from "../../components/newaffidavit/NewAffidavit"
import ModifyAffidavit from "../../components/modifyaffidavit/ModifyAffidavit"
import PaymentHistoryDetails from "../../components/paymenthistorydetails/PaymentHistoryDetails"

const AdminDashboardRoutes = () => {
    const [isActive, setIsActive] = useState(true)

    return (
        <div className="admin-routes">
            <AdminSidebar isActive={isActive} />
            {/* <AdminHamburger /> */}
            <Routes>
                <Route path="" element={<AdminDashboard />} />
                <Route path="state-management" element={<StateManagement />} />
                <Route path="state-management/create" element={<AddNewState />} />
                <Route path="state-management/modify-state" element={<ModifyState />} />
                <Route path="lga-management" element={<LGAManagement />} />
                <Route path="lga-management/create-lga" element={<NewLGA />} />
                <Route path="lga-management/modify-lga" element={<ModifyLGA />} />
                <Route path="change-password" element={<ChangePassword />} />
                <Route path="manage-admin" element={<ManageAdmin />} />
                <Route path="manage-admin/new-admin" element={<AddAdmin />} />
                <Route path="manage-admin/modify-admin" element={<ModifyAdmin />} />
                <Route path="manage-court" element={<ManageCourt />} />
                <Route path="manage-court/new-court" element={<NewCourt />} />
                <Route path="manage-court/modify-court" element={<ModifyCourt />} />
                <Route path="manage-affidavit" element={<ManageAffidavit />} />
                <Route path="manage-affidavit/new" element={<NewAffidavit />} />
                <Route path="manage-affidavit/modify" element={<ModifyAffidavit />} />
                <Route path="payment-history" element={<PaymentHistory />} />
                <Route path="payment-history/user" element={<PaymentHistoryDetails />} />
                <Route path="all-users" element={<AllUsers />} />
            </Routes>
            <Outlet />
        </div>
    )
}
export default AdminDashboardRoutes