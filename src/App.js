import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};
export default App; 