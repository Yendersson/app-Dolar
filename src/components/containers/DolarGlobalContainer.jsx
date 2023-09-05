import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { DolarBlueContainer } from "./DolarBlueContainer";
import DolarBlue from "../pure/DolarBlue";
import { ChartYear } from "../charts/Chart";
import { DolarConatiner, DolarContainerBlue, DolarContainerOficial } from "./DolarContainer";
import InflacionContainer from "./InflacionContainer";
import Router from "../../Routes";


const DolarGlobalContaner = () => {

    return(
        <div>
           <BrowserRouter>

            <Router/>
           </BrowserRouter>
        </div>
    )
}

export default DolarGlobalContaner