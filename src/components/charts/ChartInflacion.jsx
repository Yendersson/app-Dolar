import { chartBart, infChartBart } from "../../charts/exampleChart";
import { inflacionFilterByCurrentYear } from "../../utils/util";

export const ChartCurrentYear = ({obj}) => {
    console.log(inflacionFilterByCurrentYear(obj))
    return (
        infChartBart(inflacionFilterByCurrentYear(obj), 'Inflacion interanual por mes', 'month')
    )} ;
