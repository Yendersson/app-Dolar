import React, { useContext, useEffect, useRef } from "react";
import {Chart} from 'chart.js/auto'
import { chartBart } from "../../charts/exampleChart";
//import { filterByLastFifteenDays, filterByLastFiveDays, filterByMounth, filterByYears } from "../../utils/util";
import DolarMenu from "./DolarMenu";
import { DolarContext } from "../containers/DolarBlueContainer";

const DolarBlue = (props) =>{

    const dolar = useContext(DolarContext);
    
    function progress(){
        if (props.extra.state === 'static') return ( <span style={{color: 'gray'}}> --{ props.extra.compare }</span>)
        if (props.extra.state === 'up') return ( <span className="up"><i className="fa-solid fa-arrow-trend-up"></i>{ props.extra.compare } </span>)
        if (props.extra.state === 'down') return ( <span className="down"><i className="fa-solid fa-arrow-trend-down"></i>{ props.extra.compare } </span>)
    }

    function dateFomar(time){
        const date = new Date(time);
        return `${date.getDate()}/${date.getMonth()+1} - ${date.getHours()}:${date.getMinutes()}`
    }

    return (
        <div>
            <h2>Dolar {props.type}:</h2>
            <h3 style={{marginBottom: '0'}}>
                {props.type === 'blue'?
                    (
                        <>
                            {dolar.now.blue.value_sell}
                            <br/>
                            {dolar.now.blue.value_buy}
                        </>
                    )
                :
                    (
                        <>
                            {dolar.now.oficial.value_sell}
                            <br/>
                            {dolar.now.oficial.value_buy}
                        </>
                    )
                    
                }
            </h3>
            <span>{progress()}</span>
            <span>Ultima actualizacion: {dateFomar(dolar.now.last_update)}</span>
            { <DolarMenu type={props.type}></DolarMenu>}
            
        </div>
    )
}

export default DolarBlue;