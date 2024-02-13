import React from "react";
import { Link, Outlet } from "react-router-dom";

const InflacionContainer = () => {
    return (
        <div>
            <ul className="menu-chart">
                <li><Link to={'/inflacion'}>InterAnual</Link></li>
                <li><Link to={'inflacion-mensual'}>Mensual</Link></li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default InflacionContainer;