import {BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "././pages/layout/Layout";
import Home from "././pages/home/Home";
import Business from '././pages/business/Business';
import Personal from '././pages/personal/Personal';
import Official from "./pages/official/Official";


/* form pages */
import MultiStepForm from "./pages/form/multistepform/MultiStepForm"; 
import Upload from "./pages/form/multistepform/Upload";
import Verifyemail from "./pages/form/multistepform/Verifyemail";
import Basicinfo from "./pages/form/multistepform/Basicinfo";
import Success from "./pages/form/multistepform/Success";
/* end */

import CourtRoutes from "./pages/CourtRoutes";

import Errorpage from "././pages/errorpage/Errorpage"
import UserDashboardRoutes from "./pages/UserDashboardRoutes";
import AdminDashboardRoutes from "./pages/admin/AdminDashboardRoutes";
import { AuthProvider } from "./utils/authentication/Auth";
import Login from "./components/login/Login";
import ProtectAuth from "./components/protectauth/ProtectAuth";
import CreatAccount from "./components/login/CreatAccount";

    


const AppRoutes = () => {
    return (
      <AuthProvider>
                <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="business" element={<Business />} />
                <Route path="official" element={<Official />} />
                <Route path="personal" element={<Personal />} />
                <Route path="signin" element={<Login />} />

                
                <Route path="signup" element={<CreatAccount />} />

                
                <Route path="multistepform" element={<MultiStepForm />} />
                <Route path="upload" element={<Upload />} />
                <Route path="verifyemail" element={<Verifyemail />} />
                <Route path="basicinfo" element={<Basicinfo />} />
                <Route path="success" element={<Success />} />
    

                <Route path="*" element={<Errorpage />} />
                <Route path="user-dashboard/*" element={<UserDashboardRoutes />} />
                <Route path="court/*" element={<CourtRoutes />} />
                {/* <Route path="admin-dashboard/*" element={<AdminDashboardRoutes />} /> */}
                <Route path="admin/*" element={<AdminDashboardRoutes />} />
            </Route>
          </Routes>
        
        </BrowserRouter>
      </AuthProvider>
    )
}
export default AppRoutes