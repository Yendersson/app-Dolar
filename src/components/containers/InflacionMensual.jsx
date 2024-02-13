import { useEffect, useState } from "react";
import Inflacion from "./Inflacion";
import { useInflacion } from "../../Hooks/useInflacion";


const URL_INFLACION_MENSUAL = "https://bcra-proxy-cors.vercel.app/inflacion_mensual_oficial";
const InflacionMensual = () => {

const {datos, loader} = useInflacion(URL_INFLACION_MENSUAL);

    return (
        <div>
            {loader ?
                (<span className="loader"></span>)
                :
                (<Inflacion data={datos} tipo={"Mensual"}></Inflacion>)
            }
        </div>
    )
}

export default InflacionMensual;