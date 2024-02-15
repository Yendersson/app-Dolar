import { useInflacion } from "../../Hooks/useInflacion";
import Inflacion from "./Inflacion";
const URL_INFLACION_ANUAL = "https://bcra-proxy-cors.vercel.app/inflacion_interanual_oficial";

const InflacionInterAnual = () => {
    const {datos, loader, obj} = useInflacion(URL_INFLACION_ANUAL);

    return (
        <div>
            {loader ?
                (<span className="loader"></span>)
                :
                (<Inflacion data={datos} obj={obj} tipo={"InterAnual"}></Inflacion>)
            }
        </div>
    )
}

export default InflacionInterAnual;