import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column bg-dark text-light vh-100 p-3">
      <h4 className="text-center mb-4">KaiAdmin</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-light">
            <i className="bi bi-house"></i> Dashboard
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-light">
            <i className="bi bi-layers"></i> Components
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-light">
            <i className="bi bi-bar-chart"></i> Charts
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;