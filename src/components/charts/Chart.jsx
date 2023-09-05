import React, { useContext } from "react";
import { chartBart } from "../../charts/exampleChart";
import { filterByLastFifteenDays, filterByLastFiveDays, filterByMounth, filterByYears } from "../../utils/util";
import { DolarContext } from "../containers/DolarBlueContainer";

export const ChartYear = ({type}) => {
    const context = useContext(DolarContext) 
    return (
    chartBart(filterByYears(context, type), 'Valor de dolar por anio', 'year')
)} ;
export const ChartMonth = ({type}) => {
    const context = useContext(DolarContext) 
    return (
        chartBart(filterByMounth(context, type), 'Valor de dolar por mes', 'month')
    )
} ;
export const ChartFifteen = ({type}) => {
    const context = useContext(DolarContext) 
    return(
        chartBart(filterByLastFifteenDays(context, type), 'Valor de dolar ulitmos 15 dias', '15')
    )
};
export const ChartFive = ({type}) => {
    const context = useContext(DolarContext) 
    return (
        chartBart(filterByLastFiveDays(context, type), 'Valor de dolar ultimos 5 dias', '5')
    )
};
