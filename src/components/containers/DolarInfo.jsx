import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowTrendUp, faArrowTrendDown} from "@fortawesome/free-solid-svg-icons"

const DolarInfo = ({dolar, diferencial, datetime, tipo}) => {
    return (
        <div>
             <h2>{tipo}</h2>
            <span>Compra</span>
            <p>
                {dolar.value_sell.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}
            </p>
            <span>Venta</span>
            <p>{dolar.value_buy.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
            <span style={{ color: diferencial === 0 ? "gray" : diferencial > 0 ? "green" : "red" }}>
                {diferencial === 0 ?
                 "--" 
                 : diferencial > 0 ? 
                 <FontAwesomeIcon icon={faArrowTrendUp} /> 
                 : <FontAwesomeIcon icon={faArrowTrendDown} />} </span>
            <span>Ultima actualizacion: {datetime}</span>
        </div>
    )
}

export default DolarInfo;