import React, { Children, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Header from "./components/partials/Header";
import Menu from "./components/partials/Menu";
import SideBar from "./components/partials/SideBar";
import Dashboard from "./components/pages/Dashboard";
import Boys from "./components/pages/Boys";
import Girls from "./components/pages/Girls";
import Couples from "./components/pages/Couples";
import Childrens from "./components/pages/Childrens";


function App() {
  return (
    <Router>
              <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [isViewData, setViewData] = useState(null);

  useEffect(() => {
    if (location.state?.modalData) {
      setViewData(location.state.modalData);
      setViewModalOpen(true);
    }
  }, [location.state]);

  const handleClose = () => {
    setViewModalOpen(false);
    setViewData(null);
    navigate(location.pathname, { replace: true, state: {} });
  };

  const toggleSideMenu = () => {
    setSideMenuOpen(!isSideMenuOpen);
  };


  return (
    <>
     
        <>
          <Header toggleSideMenu={toggleSideMenu} />
          {isSideMenuOpen && <SideBar toggleSideMenu={toggleSideMenu} />}
          <Menu />

          <Routes>
          <Route
          path="/"
          element={ <Navigate to="/dashboard" replace />}
        />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/boys" element={<Boys/>} />
         <Route path="/girls" element={<Girls/>} />
         <Route path="/couples" element={<Couples />} />
         <Route path="/childrens" element={<Childrens/>} />
          </Routes>
         
        </>
    </>
  );
}

export default App;
