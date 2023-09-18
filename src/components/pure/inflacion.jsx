import React, { useState } from "react";
import { ChartCurrentMonth, ChartCurrentYear } from "../charts/ChartInflacion";
import { Link } from "react-router-dom";
import LinkGrid from "./LinkGrid";

const Inflacion = ({obj, type}) => {

    //const [chart, setChart] = useState('anio')

    /*const changeState= (time) => {
        setChart(time);
    }*/

    const showCharts = () => {
        if (type === "year") return <ChartCurrentYear obj={obj}></ChartCurrentYear>
        if (type === "month") return <ChartCurrentMonth obj={obj}></ChartCurrentMonth>
    }

    return (
        <div>
            <div>
                {showCharts()}
            </div>

            <LinkGrid/>
        </div>
    )
}

export default Inflacion;