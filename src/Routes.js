import { useRoutes } from "react-router-dom"
import { DolarConatiner } from "./components/containers/DolarContainer"
import InflacionContainer from "./components/containers/InflacionContainer"
import ReservasContainer from "./components/containers/ReservasContainer"
import { DolarBlue, DolarOficial } from "./components/containers/Dolar"
import InflacionInterAnual from "./components/containers/InflacionInterAnual"
import InflacionMensual from "./components/containers/InflacionMensual"
import DolarCalculate from "./components/containers/DolarCalculate"

const Router = () => {

    let routes = useRoutes([
        {   
            path: '/',
            element:<DolarConatiner/>,
            children: [
                {
                    path: '/',
                    element: <DolarBlue/>
                },
                {
                    path: 'oficial',
                    element: <DolarOficial/>
                },
                {
                    path: 'calculate',
                    element: <DolarCalculate/>
                },
            ]
        },
        {
            path: '/inflacion',
            element:<InflacionContainer/>,
            children: [
                {
                    path:'/inflacion',
                    element: <InflacionInterAnual></InflacionInterAnual>
                },
                {
                    path:'inflacion-mensual',
                    element: <InflacionMensual></InflacionMensual>
                }
            ]
        },
        {
            path: '/reservas',
            element:<ReservasContainer></ReservasContainer>
        },
    ])

    return routes;
}

export default Router;