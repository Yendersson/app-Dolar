import { useContext, useState } from "react";
import { DolarContext } from "../components/containers/DolarContainer";

export const useCalculate = () => {
    const results = {
        blue: 0,
        oficial: 0
    }
    const {dolar} = useContext(DolarContext);
    const [resut, setResult] = useState(results);

    const calculate = (e) => {
        if (e.target.value === null) e.target.value = 0;           
        setResult(prev => (
            {
                ...prev,
                blue: e.target.value * dolar.blue.value_sell,
                oficial: e.target.value * dolar.oficial.value_sell
            }
        ))
    }

    return {resut, calculate}
}