import React, { useContext } from "react";
import { chartBart } from "../../charts/exampleChart";
import { filterByLastFifteenDays, filterByLastFiveDays, filterByMounth, filterByYears } from "../../utils/util";
import { DolarContext } from "../containers/DolarBlueContainer";

export const ChartYear = (props) => {
    const context = useContext(DolarContext) 
    return (
    chartBart(filterByYears(context), 'Valor de dolar por anio', 'year')
)} ;
export const ChartMonth = (props) => {
    const context = useContext(DolarContext) 
    return (
        chartBart(filterByMounth(context), 'Valor de dolar por mes', 'month')
    )
} ;
export const ChartFifteen = (props) => {
    const context = useContext(DolarContext) 
    return(
        chartBart(filterByLastFifteenDays(context), 'Valor de dolar ulitmos 15 dias', '15')
    )
};
export const ChartFive = (props) => {
    const context = useContext(DolarContext) 
    return (
        chartBart(filterByLastFiveDays(context), 'Valor de dolar ultimos 5 dias', '5')
    )
};
