import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header({ toggleSideMenu }) {

  const handleReload = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();

      if ("caches" in window) {
        caches.keys().then((names) => {
          for (let name of names) caches.delete(name);
        });
      }

      window.location.href = window.location.pathname;
    } catch (e) {
      console.error("Cache clear failed", e);
    }
  };

  return (
    <header>
      <div className="topbar d-flex align-items-center">
        <nav className="navbar navbar-expand gap-3">
          <div className="topbar-logo-header d-none d-lg-flex">
            <img
              src="/assets/images/logo-white.png"
              className="logo-icon"
              alt="Logo"
            />
          </div>

          <div className="mobile-toggle-menu" onClick={toggleSideMenu}>
            <i className="bx bx-menu"></i>
          </div>

          <div className="top-menu ms-auto"></div>
          
          <div className="user-box dropdown px-3">
            <div className="dropdown">
            
             
              <ul className="dropdown-menu dropdown-menu-end shadow-lg">
               
               
                <li>
                  <hr className="dropdown-divider" />
                </li>

                
                <li>
                  <Link className="dropdown-item" onClick={handleReload}>
                    <i className="bx bx-reset"></i> Reload
                  </Link>
                </li>

               
                <li>
                  <hr className="dropdown-divider" />
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
        
      </div>
    </header>
  );
}

export default Header;
