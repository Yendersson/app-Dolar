import React from "react";
import { Link, Outlet } from "react-router-dom";
import Inflacion from "../pure/inflacion";
import InflacionContainer from "./InflacionContainer";

export const InflacionContainerGobal = () => {
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

export const InflacionInterAnual = () => {
    return (
        <div>
            <InflacionContainer type={'year'}></InflacionContainer>
        </div>
    )
}

export const InflacionMensual = () => {
    return (
        <div>
            <InflacionContainer type={'month'}></InflacionContainer>
        </div>
    )
}