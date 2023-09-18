import React, { useState } from "react";
import { ChartFifteen, ChartMonth, ChartYear } from "../charts/ChartReservas";
import { Link } from "react-router-dom";
import { ChartFive } from "../charts/ChartReservas";
import LinkGrid from "./LinkGrid";

const Reservas = (props) => {

    //console.log(props);
    const [chart, setChart] = useState('anio');
    
    const changeState= (time) => {
        setChart(time);
    }


    const showCharts = () => {

        if (chart === "anio") return <ChartYear obj={props.obj}></ChartYear>
        if (chart === "month") return <ChartMonth obj={props.obj}></ChartMonth>
        if (chart === "15D") return <ChartFifteen obj={props.obj}></ChartFifteen>
        if (chart === "5D") return <ChartFive obj={props.obj}></ChartFive>

    }
    return (
        <div>
            <div>
                <ul className="menu-chart">
                    <li>
                        <Link onClick={() => changeState('anio')}>Anio</Link>
                    </li>
                    <li>
                        <Link onClick={() => changeState('month')}>Mes</Link>
                    </li>
                    <li>
                        <Link onClick={() => changeState('15D')}>15D</Link>
                    </li>
                    <li>
                        <Link onClick={() => changeState('5D')}>5D</Link>
                    </li>
                </ul>
            </div>

            <div>
                {showCharts()}
            </div>
            <LinkGrid/>
        </div>
    )
}

export default Reservas;