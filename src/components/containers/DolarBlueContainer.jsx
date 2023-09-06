import React, { createContext, useContext, useState } from "react";
import { getBilletesMonedas, getCirculacion, getDolarBlue, getDolarOficial, getInflacionExpect, getInflacionInterAnual, getInflacionMensual, getReservas } from "../../services/axiosServices";
import { useEffect } from "react";
import { api } from "../../services/json";
import DolarBlue from "../pure/DolarBlue";
import { Link, useParams } from "react-router-dom";
import { getDolarExtern, getDolarHistoryExtern } from "../../services/axiosServicesExtern";
import DolarCalculate from "./DolarCalculate";
//import DolarBlue from "../pure/DolarBlue";

const initialOtherData = {
    compare: 1,
    state: true,
}

const dolarInit = {
    now: {},
    evolution: [],
};

export const DolarContext = createContext();

export const DolarBlueContainer = (props) => {

    const [loading, setLoading] = useState(true); // always true
    const [dolar, setDolar] = useState(dolarInit);
    const [otherData, setOtherData] = useState(initialOtherData);

    useEffect(_ => {
        getAllDolar();
    },[])

    useEffect(_ => {
        compareWithYesterday();
    },[loading])

    const getAllDolar= () => {

            getDolarExtern()
            .then(response => {
                if (response.status === 200) {
                    const now = response.data;
                    setDolar(prev => ({
                        ...prev, now: now
                    }));
                }
            })
            .catch(err => {
                alert(`Something went wrong ${err.message}`)
            })/*.finally(_ => {
                setLoading(!loading)
            })*/

            getDolarHistoryExtern()
            .then(response => {
                if (response.status === 200) {
                    //console.log(response.data)
                    const objArray = response.data
                    setDolar(prev => ({
                        ...prev, evolution: objArray
                    }));
                }
            })
            .catch(err => {
                alert(`Something went wrong ${err.message}`)
            }).finally(_ => {
                setLoading(!loading)
            })    
    }

    const compareWithYesterday = () => { 

        const dateNow = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`

        if (loading == false) {
            const dolarToday = (props.type === 'blue')? dolar.now.blue.value_sell : dolar.now.oficial.value_sell;
            const collectionDolars = dolar.evolution.filter(item => item.date !== dateNow.toString() && item.source.toLowerCase() === props.type);
            const compareDolar = dolarToday - collectionDolars[1].value_sell;            
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
                        <button>Calculadora</button>

                        <DolarCalculate></DolarCalculate>
                        <div style={{display: 'flex', flexWrap: 'wrap', margin: 'auto', width: '80%'}}>
                            <Link to={'/inflacion'}>Inflacion</Link>
                            <Link to={'/inflacion'}>Inflacion</Link>
                            <Link to={'/inflacion'}>Inflacion</Link>
                            <Link to={'/inflacion'}>Inflacion</Link>
                            <Link to={'/inflacion'}>Inflacion</Link>
                            <Link to={'/inflacion'}>Inflacion</Link>

                        </div>
                    </DolarContext.Provider>                    
                </div>
                )
            }
        </div>
    )
}
