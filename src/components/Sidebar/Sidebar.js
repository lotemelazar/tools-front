import React, { useState } from "react";
import {
  FaChevronRight,
  FaChevronLeft,
  FaTools,
  FaSignOutAlt,
  FaHome,
  FaQuestionCircle,
  FaCog,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "./Sidebar.css";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true); // Collapsed by default
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : "expanded"}`}>
      <div
        className={`sidebar-header ${
          isCollapsed ? "collapsed-header" : "expanded-header"
        }`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link
            to="/dashboard"
            className="nav-link"
            // data-tooltip-id="my-tooltip"
            data-tooltip-content="Dashboard">
            <FaHome className="nav-icon" />
            {!isCollapsed && <span>Dashboard</span>}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/tools"
            className="nav-link"
            // data-tooltip-id="my-tooltip"
            data-tooltip-content="Tools">
            <FaTools className="nav-icon" />
            {!isCollapsed && <span>Tools</span>}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/help"
            className="nav-link"
            // data-tooltip-id="my-tooltip"
            data-tooltip-content="Help">
            <FaQuestionCircle className="nav-icon" />
            {!isCollapsed && <span>Help</span>}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/settings"
            className="nav-link"
            // data-tooltip-id="my-tooltip"
            data-tooltip-content="Settings">
            <FaCog className="nav-icon" />
            {!isCollapsed && <span>Settings</span>}
          </Link>
        </li>
      </ul>
      <button
        onClick={handleLogout}
        className="btn-primary logout-button"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Logout">
        <FaSignOutAlt className="nav-icon" />
        {!isCollapsed && <span>Logout</span>}
      </button>
      <Tooltip id="my-tooltip" place="right-end" />
    </aside>
  );
}

export default Sidebar;
