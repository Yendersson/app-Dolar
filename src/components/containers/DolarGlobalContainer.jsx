import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { DolarBlueContainer } from "./DolarBlueContainer";
import DolarBlue from "../pure/DolarBlue";
import { ChartYear } from "../charts/Chart";
import { DolarConatiner, DolarContainerBlue, DolarContainerOficial } from "./DolarContainer";
import InflacionContainer from "./InflacionContainer";

const DolarGlobalContaner = () => {

    return(
        <div>
           <BrowserRouter>

            <DolarConatiner></DolarConatiner>
            <Routes>
                <Route path="/" index element={<DolarContainerBlue></DolarContainerBlue>} >
                </Route>
                <Route path="/oficial" element={<DolarContainerOficial></DolarContainerOficial>} >
                </Route>
                <Route path="/inflacion" element={<InflacionContainer></InflacionContainer>} >
                </Route>
            </Routes> 
           </BrowserRouter>
        </div>
    )
}

export default DolarGlobalContaner