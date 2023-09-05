import React, { useEffect, useState } from "react";
import { getInflacionInterAnual } from "../../services/axiosServices";

const InflacionContainer = () => {

    const [inflacion, setInflacion] = useState([]);
    const [loading, setLoading] = useState(true); // always true

    useEffect (_ => {
        obtainInflacionInter();
    },[])

    const obtainInflacionInter = () => {
        
        getInflacionInterAnual()
        .then(respuesta => {
            if(respuesta.status === 200 && respuesta.data){
                setInflacion(respuesta.data);
                console.log(respuesta.data)
            }
        })
        .catch(err => {
            alert(`something went wrong ${err.message}`);
        })
        .finally(_ => {
            setLoading(!loading)
        })
    }


    return (
        <div>
            { loading? 
                ( <span className="loader"></span>)
                :
                (<p>{inflacion[0].v}</p>)
                
            }
        </div>
    )
}

export default InflacionContainer;