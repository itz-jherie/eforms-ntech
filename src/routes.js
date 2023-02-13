import {BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "././pages/layout/Layout";
import Home from "././pages/home/Home";
import Business from '././pages/business/Business';
import Personal from '././pages/personal/Personal';
import Official from "./pages/official/Official";
import Signin from "././pages/form/sign/Signin";
import Signup from "././pages/form/sign/Signup";




/* form pages */ 
import Upload from "./pages/form/multistepform/Upload";
import Verifyemail from "./pages/form/multistepform/Verifyemail";
import Basicinfo from "./pages/form/multistepform/Basicinfo";
import Success from "./pages/form/multistepform/Success";
/* end */

import Errorpage from "././pages/errorpage/Errorpage"
import UserDashboardRoutes from "./pages/UserDashboardRoutes";
import AdminDashboardRoutes from "./pages/admin/AdminDashboardRoutes";
import MultiStepForm from "./pages/form/multistepform/MultiStepForm";


const AppRoutes = () => {
    return (
        <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="business" element={<Business />} />
                <Route path="official" element={<Official />} />
                <Route path="personal" element={<Personal />} />
                <Route path="signin" element={<Signin />} />
                <Route path="multistepform" element={<MultiStepForm />} />
                <Route path="signup" element={<Signup />} />


                <Route path="upload" element={<Upload />} />
                <Route path="verifyemail" element={<Verifyemail />} />
                <Route path="basicinfo" element={<Basicinfo />} />
                <Route path="success" element={<Success />} />


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