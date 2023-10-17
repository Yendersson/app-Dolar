import { useRoutes } from "react-router-dom"
import { DolarConatiner, DolarContainerBlue, DolarContainerOficial } from "./components/containers/DolarContainer"
import InflacionContainer from "./components/containers/InflacionContainer"
import { elements } from "chart.js"
import { InflacionContainerGobal, InflacionInterAnual, InflacionMensual } from "./components/containers/InflacionContainerGlobal"
import ReservasContainer from "./components/containers/ReservasContainer"
import Testing from "./components/Test/Testing"

const Router = () => {

    let routes = useRoutes([
        {   
            path: '/',
            element:<DolarConatiner/>,
            children: [
                {
                    path: '/',
                    element: <DolarContainerBlue/>
                },
                {
                    path: 'oficial',
                    element: <DolarContainerOficial/>
                },
            ]
        },
        {
            path: '/inflacion',
            element:<InflacionContainerGobal/>,
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
        {
            path: '/test',
            element: <Testing></Testing>
        }
    ])

    return routes;
}

export default Router;