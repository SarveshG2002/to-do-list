import React, { forwardRef } from "react";
import { NavLink } from 'react-router-dom';
import './assets/css/Sidebar.css';

const Sidebar = forwardRef((props, ref) => {
    return (
        <aside ref={ref}>
            <NavLink to="/dashboard/inbox" className={({ isActive }) => isActive ? 'sideEle sideEleSelected' : 'sideEle'}>
                <div>Inbox</div>
            </NavLink>
            <NavLink to="/dashboard/today" className={({ isActive }) => isActive ? 'sideEle sideEleSelected' : 'sideEle'}>
                <div>Today</div>
            </NavLink>
            <NavLink to="/dashboard/daily-task" className={({ isActive }) => isActive ? 'sideEle sideEleSelected' : 'sideEle'}>
                <div>Daily Task</div>
            </NavLink>
            <NavLink to="/dashboard/reminder" className={({ isActive }) => isActive ? 'sideEle sideEleSelected' : 'sideEle'}>
                <div>Reminders</div>
            </NavLink>
            <NavLink to="/dashboard/history" className={({ isActive }) => isActive ? 'sideEle sideEleSelected' : 'sideEle'}>
                <div>History</div>
            </NavLink>
        </aside>
    );
});

export default Sidebar;
