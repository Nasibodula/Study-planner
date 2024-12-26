import React from "react";
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dailyplan from "./components/Dailyplan";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <div className="app">
                <Sidebar />
                <Navbar/>
                <main className="content">
                    <Routes>
                        <Route path="/dailyplan" element={<Dailyplan />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;