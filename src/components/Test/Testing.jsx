import React, { createContext, useEffect, useState } from "react";
import { getDolarExtern, getDolarHistoryExtern } from "../../services/axiosServicesExtern";
import SubTesting from "./SubTesting";

const dolarInit = {
    now: {},
    evolution: [],
};

export const context = createContext();
const Testing = () => {

    const [dolar, setDolar] = useState(dolarInit);

    useEffect(_ => {
        getAllDolar();
    },[])


    function getAllDolar(){
        getDolarExtern()
        .then(response => {
            if (response.status === 200) {
                const nows = response.data;
                setDolar(prev => ({
                    ...prev, now: nows
                }));
            }
        })
        .catch(err => {
            alert(`Something went wrong ${err.message}`)
        })
    

    
        getDolarHistoryExtern()
        .then(response => {
            if (response.status === 200) {
                //console.log(response.data)
                const objArray = response.data
                setDolar(prev => ({
                    ...prev, evolution: objArray,
                }));
            }
        })
        .catch(err => {
            alert(`Something went wrong ${err.message}`)
        })
    
    }

    return (
        <div>
            <context.Provider value={dolar}>
                <SubTesting></SubTesting>
            </context.Provider>
        </div>
    )
}

export default Testing;