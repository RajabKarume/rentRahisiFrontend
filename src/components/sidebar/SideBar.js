import React from "react";
import "./SideBar.css"

function SideBar(){

    return(
        <div className="sidebarContainer">
            <div className="h1-div">
                <h1>DASHBOARD</h1>
            </div>
            <div className="top-container">
                <ul className="top-list">
                    <li>Overview</li>
                    <li>Propertirs</li>
                    <li>Tenants</li>
                    <li>Rent</li>
                    <li>Announcement</li>
                    <li>Bills</li>
                </ul>
            </div>
            <div className="bottom-container">
                <ul className="bottom-list">
                    <li>Settings</li>
                    <li>Log out</li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar