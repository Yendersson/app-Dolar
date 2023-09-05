import React, { useState, useContext } from "react";
import { DolarContext } from "./DolarBlueContainer";

const results = {
    blue: 0,
    oficial: 0
}

const DolarCalculate = () => {
    const dolar = useContext(DolarContext);
    const [resut, setResult] = useState(results);

    const calculate = (e) => {

        if (e.target.value === null) e.target.value = 0;    
            
        setResult(prev => (
            {
                ...prev,
                blue: e.target.value * dolar.now.blue.value_sell,
                oficial: e.target.value * dolar.now.oficial.value_sell
            }
        ))
    }

    return (
        <div>
            <form>
                <input type="number" id="numeric" name="numeric" placeholder="Ingresar el monto" onChange={(e) => calculate(e)} />
                <button>Calcular</button>    
            </form>         
            <p>blue: {resut.blue}</p>
            <p>oficial: {resut.oficial}</p>

        </div>
    )
}

export default DolarCalculate;