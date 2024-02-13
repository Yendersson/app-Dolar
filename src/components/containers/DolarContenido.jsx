
import ChartContent from "../charts/ChartContent.jsx";
import { useCompare } from "../../Hooks/useCompare.js"
import { useDate } from "../../Hooks/useDolar.js";
import DolarInfo from "./DolarInfo";

const DolarContenido = ({ dolar, dolarHistory, tipo, lastUpdate }) => {

    const { diferencial } = useCompare(dolar, dolarHistory);
    const {datetime} = useDate(lastUpdate);

    return (
        <div>
            <DolarInfo tipo={tipo} datetime={datetime} dolar={dolar} diferencial={diferencial} ></DolarInfo>
           
            <ChartContent data={dolarHistory}></ChartContent>
        </div>
    )
}

export default DolarContenido;