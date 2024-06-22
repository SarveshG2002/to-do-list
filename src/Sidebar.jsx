import React from "react";
import { NavLink } from 'react-router-dom';
import './assets/css/Sidebar.css';

function Sidebar() {
    return (
        <aside>
            <NavLink to="/dashboard/inbox" className={({ isActive }) => isActive ? 'sideEle sideEleSelected' : 'sideEle'}>
                <div>Inbox</div>
            </NavLink>
            <NavLink to="/dashboard/today" className={({ isActive }) => isActive ? 'sideEle sideEleSelected' : 'sideEle'}>
                <div>Today</div>
            </NavLink>
            <NavLink to="/dashboard/upcoming" className={({ isActive }) => isActive ? 'sideEle sideEleSelected' : 'sideEle'}>
                <div>Reminders</div>
            </NavLink>
            <NavLink to="/dashboard/daily-task" className={({ isActive }) => isActive ? 'sideEle sideEleSelected' : 'sideEle'}>
                <div>Daily Task</div>
            </NavLink>
        </aside>
    );
}

export default Sidebar;
