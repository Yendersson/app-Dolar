import React from "react";
import { BrowserRouter, HashRouter, Link, Route, Routes } from "react-router-dom";
import Router from "../../Routes";
import LinkGrid from "../pure/LinkGrid";
import Header from "../pure/Header";


const Container = () => {

    return(
        <div>
           <HashRouter>
           <Header/>
            <Router/>
            <LinkGrid/>
           </HashRouter>
        </div>
    )
}

export default Container