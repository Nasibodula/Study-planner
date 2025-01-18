import React, { useState } from 'react';
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dailyplan from "./components/Dailyplan";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DashboardPage from "./components/Dashboard";
import EyeTracker from "./components/Eyetracker";
import './components/Sidebar.css'

function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    return (
        <Router>
            <div className="app">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Navbar/>
            <main className="content">
                <Routes>
                    <Route path="/dailyplan" element={<Dailyplan />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                </Routes>
            </main>
            </div>
        </Router>
    );
}
export default App