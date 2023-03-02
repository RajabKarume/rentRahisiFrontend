import React, { useState , useEffect } from "react";

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

        </div>
    )
}

export default PropertiesFetch