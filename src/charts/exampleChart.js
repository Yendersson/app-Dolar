import {Chart as ChartJS, CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

export function chartBart(datas,text,time){
    /*const datas = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
      ];*/
    
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text,
          },
        },
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 0.5,
            to: 0,
            loop: true
          }
        }
      };
    
    const data = {
        labels: iterateByTime(time, datas), 
        datasets: [
          {
            label: text,
            data: datas.map(row => row.v),
           // tension: 0.5
          },
        ],
      };

    return (
        <div style={{width:'90%', margin: 'auto'}}>
            <Bar options={options} data={data}></Bar>
        </div>
    )
}

function iterateByTime(time, datas) {

    let returnData = [];

    switch (time) {
        case 'year':
            returnData = datas.map(row => new Date(row.d).getFullYear())
            break;
        case 'month':
            returnData = datas.map(row => new Date(row.d).toLocaleString('es-ES', {month:'long'}))
            break;
        case '15':
            returnData = datas.map(row => new Date(row.d).toLocaleString('es-ES', {month: 'numeric', day: 'numeric'}))
            break;
        case '5':
            returnData = datas.map(row => new Date(row.d).toLocaleString('es-ES', {month: 'numeric', day: 'numeric'}))
            break;

        default:
            break;
    }

    return returnData;
}





