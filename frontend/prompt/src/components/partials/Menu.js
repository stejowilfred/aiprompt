
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Menu() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div>
            <div className="primary-menu">
                <nav className="navbar navbar-expand-lg align-items-center">
                    <div
                        className="offcanvas offcanvas-start"
                        tabIndex="-1"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header border-bottom">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img
                                        src="/assets/images/logo-icon.png"
                                        className="logo-icon"
                                        alt="logo icon"
                                    />
                                </div>
                                <div>
                                    <h4 className="logo-text">Negobill</h4>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-start flex-grow-1 gap-1">
                                <li className="nav-item dropdown">
                                    <Link
                                        className={`nav-link ${currentPath === '/dashboard' ? 'active' : ''}`}
                                        to="/dashboard"
                                    >
                                        <div className="parent-icon">
                                            <i className="bx bx-home"></i>
                                        </div>
                                        <div className="menu-title d-flex align-items-center">
                                            Dashboard
                                        </div>
                                    </Link>
                                </li>
                               
                                 <li className="nav-item dropdown">
                                    <Link
                                        className={`nav-link ${currentPath === '/recharge' ? 'active' : ''}`}
                                        to="/boys"
                                    >
                                        <div className="parent-icon">
                                            <i className="bx bx-dollar-circle"></i>
                                        </div>
                                        <div className="menu-title d-flex align-items-center">
                                            Boys
                                        </div>
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        className={`nav-link ${currentPath === '/recharge' ? 'active' : ''}`}
                                        to="/couples"
                                    >
                                        <div className="parent-icon">
                                            <i className="bx bx-dollar-circle"></i>
                                        </div>
                                        <div className="menu-title d-flex align-items-center">
                                            Couples
                                        </div>
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        className={`nav-link ${currentPath === '/recharge' ? 'active' : ''}`}
                                        to="/girls"
                                    >
                                        <div className="parent-icon">
                                            <i className="bx bx-dollar-circle"></i>
                                        </div>
                                        <div className="menu-title d-flex align-items-center">
                                            girls
                                        </div>
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        className={`nav-link ${currentPath === '/recharge' ? 'active' : ''}`}
                                        to="/childrens"
                                    >
                                        <div className="parent-icon">
                                            <i className="bx bx-dollar-circle"></i>
                                        </div>
                                        <div className="menu-title d-flex align-items-center">
                                            Childrens
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>                   
                </nav>
            </div>
        </div>
    );
}

export default Menu;
