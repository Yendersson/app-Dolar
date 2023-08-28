import React, { createContext, useContext, useState } from "react";
import { getBilletesMonedas, getCirculacion, getDolarBlue, getDolarOficial, getInflacionExpect, getInflacionInterAnual, getInflacionMensual, getReservas } from "../../services/axiosServices";
import { useEffect } from "react";
import { api } from "../../services/json";
import DolarBlue from "../pure/DolarBlue";
import { Link, useParams } from "react-router-dom";
import { getDolarExtern } from "../../services/axiosServicesExtern";
//import DolarBlue from "../pure/DolarBlue";

const initialOtherData = {
    compare: 1,
    state: true,
}

export const DolarContext = createContext();

export const DolarBlueContainer = (props) => {

    const [loading, setLoading] = useState(true); // always true
    const [dolar, setDolar] = useState([]);
    const [otherData, setOtherData] = useState(initialOtherData);

    useEffect(_ => {
        //obtainDolarValueToDate();
        obtainDolarValueExtern();
        if (props.type === 'blue') obtainDolarValueOffline();
        if (props.type === 'oficial') obtainDolarValueOffline();
        
        //if (props.type === 'blue') obtainDolarValueBlueToDate();
        //if (props.type === 'oficial') obtainDolarValueToDate();
        console.log(dolar);
        //console.log(props)

    },[])

    useEffect(_ => {
        compareWithYesterday();
    },[loading])

    const obtainDolarValueOffline= () => {
        try {
            //console.log(props.type);
            setDolar(api);
        } catch (error) {
            alert(error);
        } finally{
            setLoading(!loading);
        }
    }

    //Online
    const obtainDolarValueToDate = () => {

        getDolarOficial()
        .then(response => {
            if (response.data && response.status === 200){
                console.log(response.data);
                setDolar(response.data);
                console.log(dolar);
            } else {
                throw new Error("there is a error")
            }
        })
        .catch(err => alert(`Something bad has happen ${err}`))
        .finally(_ => setLoading(!loading));    
    }

    const obtainDolarValueBlueToDate = () => {

        getDolarBlue()
        .then(response => {
            if (response.data && response.status === 200){
                console.log(response.data);
                setDolar(response.data);
                console.log(dolar);
            } else {
                throw new Error("there is a error")
            }
        })
        .catch(err => alert(`Something bad has happen ${err}`))
        .finally(_ => setLoading(!loading));    
    }

    //extern api

    const obtainDolarValueExtern =() => {
        getDolarExtern()
        .then(response => {
            if (response.status === 200) {
                console.log(response.data);
            }
        })
    }

    const compareWithYesterday = () => { 

        if (loading == false) {
            const compareDolar = dolar[dolar.length-1].v - dolar[dolar.length-2].v;
            
            const tempOtherData = {
                compare: compareDolar.toFixed(2),
                state: (compareDolar === 0)? 'static' : compareDolar > 0? 'up': 'down'
            }
            setOtherData(tempOtherData); 
        }
    }

    return (
        <div>
            {loading? (
                    <span className="loader"></span>
                )
                :
                (
                <div>
                    <DolarContext.Provider value={dolar}> 
                        <DolarBlue value={dolar} extra={otherData} type={props.type}></DolarBlue>
                    </DolarContext.Provider>
                </div>
                )
                }
        </div>
    )
}
