// import React from "react";
// import { Link } from "react-router-dom";
// import "./Sidebar.css";

// const Sidebar = () => {
//   return (
//     <div className="d-flex flex-column navbar-light text-light vh-100 p-3 sidebar fixed-top position-fixed">
//       <h4 className="text-center mb-4">DULAZE</h4>
//       <ul className="nav flex-column">
//         {/* Dashboard Link */}
//         <li className="nav-item mb-2">
//           <Link to="/Planned" className="nav-link text-light">
//             <i className="bi bi-house"></i> Planned
//           </Link>
//         </li>
        
//         {/* Daily Plan Link */}
//         <li className="nav-item mb-2">
//           <Link to="/Dailyplan" className="nav-link text-light">
//             <i className="bi bi-layers"></i> Daily Plan
//           </Link>
//         </li>
        
//         {/* Eyetracker Link */}
//         <li className="nav-item mb-2">
//           <Link to="/eyetracker" className="nav-link text-light">
//             <i className="bi bi-bar-chart"></i> Eyetracker
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useEffect } from 'react';
import "./Sidebar.css";
import 'boxicons/css/boxicons.min.css';
import { Link } from "react-router-dom";



export default function Sidebar({ isOpen, toggleSidebar }) {
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search");

    const handleSidebarToggle = () => {
      sidebar.classList.toggle("open");
      menuBtnChange();
    };

    const menuBtnChange = () => {
      if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    };

    // Add event listeners
    closeBtn.addEventListener("click", handleSidebarToggle);
    searchBtn.addEventListener("click", handleSidebarToggle);

    // Cleanup event listeners on component unmount
    return () => {
      closeBtn.removeEventListener("click", handleSidebarToggle);
      searchBtn.removeEventListener("click", handleSidebarToggle);
    };
  }, []);

  return (
    <div  className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="logo_details">
        <i className="bx" >🌟</i>
        <div className="logo_name">Dula Woge</div>
        <i className="bx bx-menu" id="btn" onClick={toggleSidebar}></i>
      </div>
      <ul className="nav-list">
        <li>
          <i className="bx bx-search"></i>
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>
        <li>
          <Link to="/dashboard">
            <i className="bx bx-grid-alt"></i>
            <span className="link_name">Dashboard</span>
          </Link>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <Link to="/dailyplan">
            <i className="bx bx-calendar"></i>
            <span className="link_name">Dailyplan</span>
          </Link>
          <span className="tooltip">Dailyplan</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-user"></i>
            <span className="link_name">User</span>
          </a>
          <span className="tooltip">User</span>
        </li>
        <li>
        <a href="#">
          <i className="bx bx-chat"></i>
          <span className="link_name">Message</span>
        </a>
          <span className="tooltip">Message</span>
        </li>
        <li>
        <a href="#">
          <i className="bx bx-pie-chart-alt-2"></i>
          <span className="link_name">Analytics</span>
        </a>
        <span className="tooltip">Analytics</span>
        </li>
        <li>
        <a href="#">
          <i className="bx bx-folder"></i>
          <span className="link_name">File Manger</span>
        </a>
        <span className="tooltip">File Manger</span>
        </li>
        <li>
        <a href="#">
          <i className="bx bx-cart-alt"></i>
          <span className="link_name">Order</span>
        </a>
        <span className="tooltip">Order</span>
        </li>
        <li>
        <a href="#">
          <i className="bx bx-cog"></i>
          <span className="link_name">Settings</span>
        </a>
        <span className="tooltip">Settings</span>
        </li>
        <li className="profile">
        <div className="profile_details">
          <img src="/images/profile.jpg" alt="Profile" />
          <div className="profile_content">
            <div className="name">Nasibo Dula</div>
            <div className="designation">Admin</div>
          </div>
          </div>
          <i className="bx bx-log-out" id="log_out"></i>
        </li>
      </ul>
    </div>
  );
}
