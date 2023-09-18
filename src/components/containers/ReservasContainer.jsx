import React, { useEffect, useState } from "react";
import { getReservas } from "../../services/axiosServices";
import Reservas from "../pure/Reservas";

const ReservasContainer = () => {

    const [reservas, setReservas] = useState([]);
    const [loading, setLoading] = useState(true); // always true

    useEffect(_ => {
        obtainReserveas();

    }, [])

    const obtainReserveas = () => {
        getReservas()
        .then(response => {
            if(response.status === 200 && response.data) {
                setReservas(response.data);
                console.log(response.data);
            }
        })
        .catch(error => {
            alert(`Something went wrong ${error}`);
        })
        .finally(_ => setLoading(!loading));
    }

    return (
        <div>
            { loading? 
                ( <span className="loader"></span>)
                :
                (
                    <div>
                        <h2>Reservas internacionales</h2>
                        <p>{reservas[reservas.length-1].v}</p>
                        <Reservas obj={reservas}></Reservas>
                    </div>
                )
                
                
            }
        </div>
    )
}

export default ReservasContainer;