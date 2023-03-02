import React, { useState , useEffect } from "react";
import Properties from "./Properties";

function PropertiesFetch(){

    const [apartment, setApartment] = useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:3000/apartments')
        .then((r)=>r.json())
        .then((data)=>setApartment(data))
    },[])
    console.log(apartment)

    return(
        <div>
            {apartment.map((apt)=>(
                <Properties name={apt.name} location={apt.location} noOfHouses={apt.number_of_houses} key={apt.id} />
            ))}
        </div>
    )
}

export default PropertiesFetch