import React, { useContext, useState } from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { ChartFifteen, ChartFive, ChartMonth, ChartYear } from "../charts/Chart";
import { DolarContext } from "../containers/DolarBlueContainer";

const DolarMenu = (props) => {

    const [chart, setChart] = useState('anio')

    const dolar = useContext(DolarContext);

    const changeState= (time) => {
        setChart(time);
    }

    const showCharts = () => {

        if (chart === "anio") return <ChartYear type={props.type}></ChartYear>
        if (chart === "month") return <ChartMonth type={props.type}></ChartMonth>
        if (chart === "15D") return <ChartFifteen type={props.type}></ChartFifteen>
        if (chart === "5D") return <ChartFive type={props.type}></ChartFive>
    }

    return(
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

        </div>
    )
}

export default DolarMenu;