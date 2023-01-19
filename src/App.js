import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Business from './pages/Business'
import Personal from "./pages/Personal"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Layout from "./pages/Layout"
import Errorpage from './pages/Errorpage';
import DashBoard from './pages/dashboard/Dashboard';
import Settings from './pages/dashboard/settings/Settings';

function App() {

  return (
    <AppRoutes />
  );
}

export default App;
