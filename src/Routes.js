import { useRoutes } from "react-router-dom"
import { DolarConatiner, DolarContainerBlue, DolarContainerOficial } from "./components/containers/DolarContainer"
import InflacionContainer from "./components/containers/InflacionContainer"
import { elements } from "chart.js"

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
            path: 'inflacion',
            element:<InflacionContainer/>,
        }
    ])

    return routes;
}

export default Router;