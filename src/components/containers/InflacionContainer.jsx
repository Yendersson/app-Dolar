import React, { useEffect, useState } from "react";
import { getInflacionInterAnual, getInflacionMensual } from "../../services/axiosServices";
import Inflacion from "../pure/inflacion";

const InflacionContainer = (props) => {

    const [inflacion, setInflacion] = useState([]);
    const [loading, setLoading] = useState(true); // always true

    useEffect (_ => {
        if (props.type === 'year') obtainInflacionInter();
        if (props.type === 'month') obtainInflacionMotnh();
    },[])

    const obtainInflacionMotnh = () => {
        getInflacionMensual()
        .then(respuesta => {
            if(respuesta.status === 200 && respuesta.data){
                setInflacion(respuesta.data);
                //console.log(respuesta.data);
            }
        })
        .catch(err => {
            alert(`something went wrong ${err.message}`);
        })
        .finally(_ => {
            setLoading(!loading)
        })
    }

    const obtainInflacionInter = () => {
        
        getInflacionInterAnual()
        .then(respuesta => {
            if(respuesta.status === 200 && respuesta.data){
                setInflacion(respuesta.data);
                //console.log(respuesta.data)
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
                        <h2>Inflacion {props.type === 'year'? 'interanual': "mes"} actual</h2>
                        <p>{inflacion[inflacion.length-1].v}</p>
                        <Inflacion obj={inflacion} type={props.type} />
                    </div>
                )
                
                
            }
        </div>
    )
}

export default InflacionContainer;