import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import './Dashboard.css';

function Dashboard(){
    return (
        <>
            <Navbar />
            <div className="mainDiv">
                <Sidebar />
            </div>
        </>
    );
}

export default Dashboard;
