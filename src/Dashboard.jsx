import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Inbox from "./components/Inbox";
import Today from "./components/Today";
import Upcoming from "./components/Upcoming";
import DailyTask from "./components/DailyTask";
import History from "./components/History";
import Reminder from "./components/Reminder";
import './assets/css/Dashboard.css';

function Dashboard() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = (event) => {
        event.stopPropagation();
        setIsSidebarVisible(prevState => !prevState);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target) && window.innerWidth < 1000) {
            setIsSidebarVisible(false);
        }
    };

    useEffect(() => {

        if(window.innerWidth > 1000){
            setIsSidebarVisible(true)   
        }

        if (isSidebarVisible) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isSidebarVisible]);

    return (
        <>
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="mainDiv">
                {isSidebarVisible && <Sidebar ref={sidebarRef} />}
                <div className="content">
                    <Routes>
                        <Route path="/inbox" element={<Inbox />} />
                        <Route path="/today" element={<Today />} />
                        <Route path="/upcoming" element={<Upcoming />} />
                        <Route path="/reminder" element={<Reminder />} />
                        <Route path="/daily-task" element={<DailyTask />} />
                        <Route path="/history" element={<History />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
