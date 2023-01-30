import { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import NewSidebar from '../components/newsidebar/NewSidebar'
import TheDashboard from './dashboard/TheDashboard'
import NewSettings from './dashboard/NewSettings'
import Account from './dashboard/Account'
import Payment from './dashboard/Payment'
import Document from './dashboard/Document'
import CreateDocument from './dashboard/CreateDocument'
import ChooseDocument from './dashboard/ChooseDocument'
import FillForm from './dashboard/FillForm'
import EditForm from './dashboard/EditForm'
import UploadDocs from './dashboard/UploadDocs'
import Preview from './dashboard/Preview'
import PaymentPreview from './dashboard/PaymentPreview'

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
                    <Route path="documents" element={<Document />} />
                    <Route path="documents/create" element={<CreateDocument />} />
                    <Route path="documents/create/choose" element={<ChooseDocument />} />
                    <Route path="documents/create/choose/fillform" element={<FillForm />} />
                    <Route path="documents/create/choose/fillform/editform" element={<EditForm />} />
                    <Route path="documents/create/choose/fillform/editform/upload" element={<UploadDocs />} />
                    <Route path="documents/create/choose/fillform/editform/upload/preview" element={<Preview/>} />
                    <Route path="documents/create/choose/fillform/editform/upload/preview/paymentpreview" element={<PaymentPreview/>} />

            </Routes>
            <Outlet />
        </div>
    )
}
export default UserDashboardRoutes