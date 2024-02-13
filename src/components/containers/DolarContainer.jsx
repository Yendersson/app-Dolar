import React, { createContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { useDolar } from "../../Hooks/useDolar";

export const DolarContext = createContext();

export const DolarConatiner = () => {

    const {dolar, dolarHistory, loader} = useDolar();
    
    return (
        <DolarContext.Provider value={{ dolar, dolarHistory }}>

            {loader ?
                (<span className="loader"></span>)
                :
                (
                    <>
                        <ul className="menu-chart">
                            <li>
                                <Link to={"/"}>Blue</Link>
                            </li>
                            <li>
                                <Link to={"/oficial"}>Oficial</Link>
                            </li>
                        </ul>
                        <Outlet />
                    </>
                )
            }
        </DolarContext.Provider>
    )
}
