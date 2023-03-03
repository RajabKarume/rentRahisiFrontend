import React from "react";
import './Overview.css'
import Card from '../Cards/Card'

function OverviewContent(){

    return(
        <div className="content-page">
            <div className="header">
                <div className="h1-div">
                    <h1>Overview</h1>
                </div>
                <div className="details">
                    <h2>John Doe</h2>
                    <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="profile"/>
                </div>
            </div>
            <div className="card">
                <Card info='Properties' />
                <Card info='Houses' />
                <Card info='Tenants' />
            </div>
        </div>
    )
}

export default OverviewContent