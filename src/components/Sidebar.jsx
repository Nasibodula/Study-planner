import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column navbar-light text-light vh-100 p-3 sidebar position-fixed">
      <h4 className="text-center mb-4">DULAZE</h4>
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