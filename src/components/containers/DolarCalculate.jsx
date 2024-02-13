import React, { useContext } from "react";
import {DolarContext} from "./DolarContainer"
import { useCalculate } from "../../Hooks/useCalculate";



const DolarCalculate = () => {
    
    const {resut,calculate} = useCalculate();


    return (
        <div>
            
                <input type="number" id="numeric" name="numeric" placeholder="Ingresar el monto" onChange={(e) => calculate(e)} />
                   
                  
            <p>blue: {resut.blue.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
            <p>oficial: {resut.oficial.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>

        </div>
    )
}

export default DolarCalculate;