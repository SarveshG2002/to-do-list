import React,{ useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import React,  from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Inbox from "./components/Inbox";
import Today from "./components/Today";
import Upcoming from "./components/Upcoming";
import DailyTask from "./components/DailyTask";
import './assets/css/Dashboard.css';

function Dashboard() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        console.log("hello")
        setIsSidebarVisible(!isSidebarVisible);
    };
    return (
        <>
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="mainDiv">
            {isSidebarVisible && <Sidebar />}
                <div className="content">
                    <Routes>
                        <Route path="/inbox" element={<Inbox />} />
                        <Route path="/today" element={<Today />} />
                        <Route path="/upcoming" element={<Upcoming />} />
                        <Route path="/daily-task" element={<DailyTask />} />
                        <Route path="/history" element={<Upcoming />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
