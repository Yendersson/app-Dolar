import React, { useState } from "react";
import { ChartCurrentYear } from "../charts/ChartInflacion";
import { Link } from "react-router-dom";
import LinkGrid from "./LinkGrid";

const Inflacion = ({obj}) => {

    const [chart, setChart] = useState('anio')

    const changeState= (time) => {
        setChart(time);
    }

    const showCharts = () => {
        if (chart === "anio") return <ChartCurrentYear obj={obj}></ChartCurrentYear>
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

export default Inflacion;