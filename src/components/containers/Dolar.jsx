import { useContext } from "react";
import {DolarContext} from "./DolarContainer"
import DolarContenido from "./DolarContenido";

export const DolarBlue = () =>{
    const {dolar,dolarHistory} = useContext(DolarContext);

    const evolution = dolarHistory.filter((item) => item.source === 'Blue');
    return (
        <div>
            <DolarContenido tipo={"BLUE"} dolar={dolar.blue} dolarHistory={evolution} lastUpdate={dolar.last_update}></DolarContenido>
        </div>
    )
};

export const DolarOficial = () =>{
    const {dolar,dolarHistory} = useContext(DolarContext);
    const evolution = dolarHistory.filter((item) => item.source === 'Oficial');
    return (
        <div>
            <DolarContenido tipo={"OFICIAL"} dolar={dolar.oficial} dolarHistory={evolution} lastUpdate={dolar.last_update}></DolarContenido>
        </div>
    )
};