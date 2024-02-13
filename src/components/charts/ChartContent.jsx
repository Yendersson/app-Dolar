//import { useState } from "react"
import { Link } from "react-router-dom";
import LineChart from "./LineChart";
import { useOften } from "../../Hooks/useOften";

const ChartContent = ({data}) => {
    const {datos,often, setTemp} = useOften(data);

    return (
        <div>
            <ul className="menu-chart">
                {often.map((item, index) => 
                    (
                    <li key={index}>
                        <Link onClick={() => setTemp(item)}>{item}</Link>
                    </li>
                    )
                )}
            </ul>
            <LineChart data={datos}></LineChart>
           
        </div>
    )
}

export default ChartContent;