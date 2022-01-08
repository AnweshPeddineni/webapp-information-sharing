import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const AdminNav = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img"></div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <Link to="/admin/dashboard" className="nav-link">
            <i className="fa fa-home"></i>
            Dashboard
          </Link>
        </div>
        <h2>Stock Status</h2>
        <div className="sidebar__link">
          <Link to="/admin/buy" className="nav-link">
            <i class="fas fa-cart-plus"></i>
            Bought Stocks
          </Link>
        </div>
        <div className="sidebar__link">
          <Link to="/admin/sell" className="nav-link">
            <i class="fas fa-money-bill-wave"></i>
            Sold Stocks
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
