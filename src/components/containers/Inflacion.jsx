
import Chart from "../charts/Chart";

const Inflacion = ({data, tipo, obj}) => {
    
    //const {datos} = useInflacionChart(data);
    return(
        <div>
            <h2>{tipo}</h2>
            <p>{data[data.length-1]['v']}%</p>
            <span>Last update: {data[data.length-1]['d']}</span>
            <Chart datos={obj} ></Chart>
        </div>
    )
}

export default Inflacion;