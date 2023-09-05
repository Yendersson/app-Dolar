import React from "react";
import { DolarBlueContainer } from "./DolarBlueContainer";
import { Link, Outlet } from "react-router-dom";


export const DolarConatiner = () => {
    return(
        <div>
            <ul className="menu-chart">
                <li><Link to={'/'}>Blue</Link></li>
                <li><Link to={'/oficial'}>Oficial</Link></li>
            </ul>
            <Outlet/>
        </div>
    )
}

export const DolarContainerBlue = () => {
    return (
        <div>
            <DolarBlueContainer type={'blue'}></DolarBlueContainer>
        </div>
    )
}

export const DolarContainerOficial = () => {
    return (
        <div>
            <DolarBlueContainer type={'oficial'}></DolarBlueContainer>
        </div>
    )
}