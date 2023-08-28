import React, { useContext, useState } from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { ChartFifteen, ChartFive, ChartMonth, ChartYear } from "../charts/Chart";
import { DolarContext } from "../containers/DolarBlueContainer";

const DolarMenu = () => {

    const [chart, setChart] = useState('anio')

    const dolar = useContext(DolarContext);

    const changeState= (time) => {
        setChart(time);
    }

    const showCharts = () => {

        if (chart === "anio") return <ChartYear value={dolar}></ChartYear>
        if (chart === "month") return <ChartMonth value={dolar}></ChartMonth>
        if (chart === "15D") return <ChartFifteen value={dolar}></ChartFifteen>
        if (chart === "5D") return <ChartFive value={dolar}></ChartFive>
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