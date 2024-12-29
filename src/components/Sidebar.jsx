import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column navbar-light text-light vh-100 p-3 sidebar fixed-top position-fixed">
      <h4 className="text-center mb-4">DULAZE</h4>
      <ul className="nav flex-column">
        {/* Dashboard Link */}
        <li className="nav-item mb-2">
          <Link to="/Planned" className="nav-link text-light">
            <i className="bi bi-house"></i> Planned
          </Link>
        </li>
        
        {/* Daily Plan Link */}
        <li className="nav-item mb-2">
          <Link to="/Dailyplan" className="nav-link text-light">
            <i className="bi bi-layers"></i> Daily Plan
          </Link>
        </li>
        
        {/* Charts Link */}
        <li className="nav-item mb-2">
          <Link to="/charts" className="nav-link text-light">
            <i className="bi bi-bar-chart"></i> Charts
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;