import LineChart from "./LineChart";

const Chart = ({datos}) => {

    return(
        <div>
             <LineChart data={datos}></LineChart>
        </div>
    )
}

export default Chart;