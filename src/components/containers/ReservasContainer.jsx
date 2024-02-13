import React, { useEffect, useState } from "react";
import { getReservas } from "../../services/axiosServices";
import { useReservas } from "../../Hooks/useReservas";
import Reservas from "./Reservas";

const ReservasContainer = () => {

    const {reservas, loading} = useReservas();

    return (
        <div>
            { loading? 
                ( <span className="loader"></span>)
                :
                (
                  
                        <Reservas datos={reservas}></Reservas>
                  
                )
                
                
            }
        </div>
    )
}

export default ReservasContainer;