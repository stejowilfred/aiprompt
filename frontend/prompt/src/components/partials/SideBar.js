import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function SideBar({ toggleSideMenu }) {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const handleToggleMenu = (menuId) => {
    setExpandedMenu((prevMenu) => (prevMenu === menuId ? null : menuId));
  };
  const handleLinkClick = () => {
    toggleSideMenu();
  };
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="wrapper toggled">
      <div className="overlay toggle-icon bc" onClick={toggleSideMenu}></div>
      <div>
        <div className="sidebar-wrapper" data-simplebar="true">
          <div className="sidebar-header">
            <div>
              <img
                src="/assets/images/logo-dark.png"
                className="logo-icon"
                alt="logo icon"
              />
            </div>
            <div className="toggle-icon ms-auto" onClick={toggleSideMenu}>
              <i className="bx bx-arrow-back"></i>
            </div>
          </div>
          <ul className="metismenu" id="menu">
            <li
              className={`${currentPath === "/dashboard" ? "mm-active" : ""}`}
            >
              <Link
                to="/dashboard"
                onClick={handleLinkClick}
                className="active"
              >
                <div className="parent-icon">
                  <i className="bx bx-home"></i>
                </div>
                <div className="menu-title">Dashboard</div>
              </Link>
            </li>
           
            <li
              className={`${currentPath === "/dashboard" ? "mm-active" : ""}`}
            >
              <Link
                to="/boys"
                onClick={handleLinkClick}
                className="active"
              >
                <div className="parent-icon">
                  <i className="bx bx-home"></i>
                </div>
                <div className="menu-title">Boys</div>
              </Link>
            </li>
            <li
              className={`${currentPath === "/dashboard" ? "mm-active" : ""}`}
            >
              <Link
                to="/girls"
                onClick={handleLinkClick}
                className="active"
              >
                <div className="parent-icon">
                  <i className="bx bx-home"></i>
                </div>
                <div className="menu-title">Girls</div>
              </Link>
            </li>
            <li
              className={`${currentPath === "/dashboard" ? "mm-active" : ""}`}
            >
              <Link
                to="/couples"
                onClick={handleLinkClick}
                className="active"
              >
                <div className="parent-icon">
                  <i className="bx bx-home"></i>
                </div>
                <div className="menu-title">Couples</div>
              </Link>
            </li>
            <li
              className={`${currentPath === "/dashboard" ? "mm-active" : ""}`}
            >
              <Link
                to="/childrens"
                onClick={handleLinkClick}
                className="active"
              >
                <div className="parent-icon">
                  <i className="bx bx-home"></i>
                </div>
                <div className="menu-title">Childrens</div>
              </Link>
            </li>
                
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
