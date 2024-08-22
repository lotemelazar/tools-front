// import React, { useState } from "react";
// import {
//   FaChevronLeft,
//   FaChevronRight,
//   FaTools,
//   FaSignOutAlt,
//   FaHome,
//   FaQuestionCircle,
//   FaCog,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import "./Sidebar.css";

// function Sidebar() {
//   const [isCollapsed, setIsCollapsed] = useState(true);
//   const navigate = useNavigate();

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
//       <div className="sidebar-header">
//         <button className="toggle-button" onClick={toggleSidebar}>
//           {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
//         </button>
//       </div>
//       <ul className="nav flex-column">
//         <li className="nav-item">
//           <a href="#" className="nav-link">
//             <FaHome className="nav-icon" />
//             {!isCollapsed && <span>Dashboard</span>}
//           </a>
//         </li>
//         <li className="nav-item">
//           <a href="#" className="nav-link">
//             <FaTools className="nav-icon" />
//             {!isCollapsed && <span>Tools</span>}
//           </a>
//         </li>
//         <li className="nav-item">
//           <a href="#" className="nav-link">
//             <FaQuestionCircle className="nav-icon" />
//             {!isCollapsed && <span>Help</span>}
//           </a>
//         </li>
//         <li className="nav-item">
//           <a href="#" className="nav-link">
//             <FaCog className="nav-icon" />
//             {!isCollapsed && <span>Settings</span>}
//           </a>
//         </li>
//       </ul>
//       <button onClick={handleLogout} className="btn-primary logout-button">
//         <FaSignOutAlt className="nav-icon" />
//         {!isCollapsed && <span>Logout</span>}
//       </button>
//     </aside>
//   );
// }

// export default Sidebar;

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
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
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
          <Link to="/dashboard" className="nav-link">
            <FaHome className="nav-icon" />
            {!isCollapsed && <span>Dashboard</span>}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/tools" className="nav-link">
            <FaTools className="nav-icon" />
            {!isCollapsed && <span>Tools</span>}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/help" className="nav-link">
            <FaQuestionCircle className="nav-icon" />
            {!isCollapsed && <span>Help</span>}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <FaCog className="nav-icon" />
            {!isCollapsed && <span>Settings</span>}
          </Link>
        </li>
      </ul>
      <button onClick={handleLogout} className="btn-primary logout-button">
        <FaSignOutAlt className="nav-icon" />
        {!isCollapsed && <span>Logout</span>}
      </button>
    </aside>
  );
}

export default Sidebar;
