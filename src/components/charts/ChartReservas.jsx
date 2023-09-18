import React from "react";
import { filterByLastFifteenDays, filterByLastFiveDays, filterByMounth, filterByYears } from "../../utils/util";
import { infChartBart } from "../../charts/exampleChart";

export const ChartYear = ({obj}) => infChartBart(filterByYears(obj), 'Reservas por anio', 'year');

export const ChartMonth = ({obj}) => infChartBart(filterByMounth(obj), 'Reservas por mes', 'month');

export const ChartFifteen = ({obj}) => infChartBart(filterByLastFifteenDays(obj), 'Reservas ulitmos 15 dias', '15');

export const ChartFive = ({obj}) => infChartBart(filterByLastFiveDays(obj), 'Reservas ultimos 5 dias', '5');
