import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home"
import Business from "./pages/business/Business"
import Personal from "./pages/personal/Personal"
import Signin from "./pages/form/Signin"
import Signup from "./pages/form/Signup"
import Layout from "./pages/layout/Layout"
import Errorpage from "./pages/errorpage/Errorpage"
import DashBoard from './pages/dashboard/Dashboard';
import Settings from './pages/dashboard/settings/Settings';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="Business" element={<Business />} />
      <Route path="Personal" element={<Personal />} />
      <Route path="Signin" element={<Signin />} />
      <Route path="Signup" element={<Signup />} />
      <Route path="*" element={<Errorpage />} />
      <Route path="dashboard" element={<DashBoard/>} />
      <Route path="settings" element={<Settings/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
