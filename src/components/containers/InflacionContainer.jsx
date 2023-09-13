import React, { useEffect, useState } from "react";
import { getInflacionInterAnual } from "../../services/axiosServices";
import Inflacion from "../pure/inflacion";

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
                (
                    <div>
                        <h1>Inflacion interanual actual</h1>
                        <p>{inflacion[inflacion.length-1].v}</p>
                        <Inflacion obj={inflacion} />
                    </div>
                )
                
                
            }
        </div>
    )
}

export default InflacionContainer;