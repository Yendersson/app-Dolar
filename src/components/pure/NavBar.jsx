import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({close}) => {

    function closeNav(){
        close();
    }
    return (
        <div className="sidenav">
            <ul>
                <li className="item-menu" style={{textAlign:"end"}}>
                    <span onClick={closeNav}>X</span>
                </li>
                <li className="item-menu">
                   <Link to={"/"}>Home</Link> 
                </li>
                <li className="item-menu">
                <Link to={"/"}>Dolar Blue</Link> 
                </li>
                <li className="item-menu">
                <Link to={"/oficial"}>Dolar Oficial</Link> 
                </li>
                <li className="item-menu">
                <Link to={"/inflacion/inflacion-mensual"}>Inflacion Mensual</Link> 
                </li>
                <li className="item-menu">
                <Link to={"/inflacion/inflacion-mensual"}>Inflacion InterAnual</Link> 
                </li>
            </ul>
        </div>
    )
}

export default Navbar;