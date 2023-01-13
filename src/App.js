import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Business from './pages/Business'
import Personal from "./pages/Personal"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Layout from "./pages/Layout"
import Errorpage from './pages/Errorpage';

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
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
