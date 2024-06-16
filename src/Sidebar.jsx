import React from "react";
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
    return (
        <aside>
            <Link to="/dashboard/inbox" className="sideEle sideEleSelected">
                <div>Inbox</div>
            </Link>
            <Link to="/dashboard/today" className="sideEle">
                <div>Today</div>
            </Link>
            <Link to="/dashboard/upcoming" className="sideEle">
                <div>Upcoming</div>
            </Link>
            <Link to="/dashboard/daily-task" className="sideEle">
                <div>Daily Task</div>
            </Link>
        </aside>
    );
}

export default Sidebar;
