import { useEffect, useState } from "react";
import Chart from "../charts/Chart";
import { useInflacionChart } from "../../Hooks/useInflacionChart";

const Inflacion = ({data, tipo}) => {
    
    const {datos} = useInflacionChart(data);
    return(
        <div>
            <h2>{tipo}</h2>
            <p>{data[data.length-1]['v']}%</p>
            <span>Last update: {data[data.length-1]['d']}</span>
            <Chart datos={datos}></Chart>
        </div>
    )
}

export default Inflacion;