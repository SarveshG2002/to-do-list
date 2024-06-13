import React from "react";
import './Sidebar.css';

function Sidebar(){
    return(
        <aside>
            <div className="sideEle sideEleSelected">
                Inbox
            </div>
            <div className="sideEle">
                Today
            </div>

            <div className="sideEle">
                Upcomming
            </div>
            <div className="sideEle">
                Daily Task
            </div>
            
            
        </aside>
    )
}


export default Sidebar;