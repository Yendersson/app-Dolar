import { chartBart, infChartBart } from "../../charts/exampleChart";
import { inflacionFilterByCurrentYear, inflacionFilterByLast12Month } from "../../utils/util";

export const ChartCurrentYear = ({obj}) => {
    console.log(inflacionFilterByCurrentYear(obj))
    return (
        infChartBart(inflacionFilterByCurrentYear(obj), 'Inflacion interanual', 'month')
    )} ;

export const ChartCurrentMonth = ({obj}) => {
    console.log(inflacionFilterByLast12Month(obj))
    return (
        infChartBart(inflacionFilterByLast12Month(obj), 'Inflacion por mes', 'month')
    )} ;