import React from "react";
// import "./Properties.css";

function Properties({name, location, noOfHouses}){

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Loction</th>
                        <th>Number of Houses</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{location}</td>
                        <td>{noOfHouses}</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}

export default Properties