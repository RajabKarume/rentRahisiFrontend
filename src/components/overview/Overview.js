import React from "react";
import './Overview.css'
import SideBar from '../sidebar/SideBar';
import OverviewContent from "./OverveiwContent";


function Overview(){

    return(
        <div className="overview-page">
            <div className="sidebar">
                <SideBar />
            </div>
            <div className="overveiw-content">
                <OverviewContent/>
            </div>
        </div>
    )
}

export default Overview