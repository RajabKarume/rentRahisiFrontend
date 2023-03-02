import React, { useState } from "react";
import "./SideBar.css"


function SideBar(){

    const [mobileVeiw, setMobileVeiw] = useState(true)
    function handleclick(){
        setMobileVeiw(!mobileVeiw)
        console.log('clicked')
    }

    return(
        <div>
            <div className="hamburger-container">
                <h1>DASHBOARD</h1>
                <div className="hamburger" onClick={handleclick}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                </div>
            </div>
            <div className={mobileVeiw?'sidebarContainer':'sidebarResponsive'}>
                <div className="h1-div">
                    <h1>DASHBOARD</h1>
                </div>
                <div className="top-container">
                    <ul className="top-list">
                        <li>Overview</li>
                        <li>Properties</li>
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
        </div>
    )
}

export default SideBar