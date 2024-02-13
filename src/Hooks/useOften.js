import { useEffect, useState } from "react";


export const useOften = (history) => {
    let data = {
        labels: [], 
        datasets: [
          {
            label: "",
            data: [],
            borderColor: 'rgb(75, 192, 192)',
            fill:true,
            borderWidth: 3
           // tension: 0.5
          },
        ],
      };
    const often = ['DIA', 'SEMANA', "MES", "AÑO"];
    const [temp, setTemp] = useState(often[0]);
    const [datos, setDatos] = useState(data);

    useEffect(_=> {
        console.log("change estate")
        modifiedState();
    },[temp])



    function modifiedState() {
        let data = {
            labels: [], 
            datasets: [
              {
                label: "",
                data: [],
               // tension: 0.5
              },
            ],
          };
        if (temp === 'DIA') {
            const filterByIndex = history.filter((item,index) => index < 6); 
            data.datasets[0]['data'] = filterByIndex.map((item,index) => item.value_sell).reverse();
            data.labels = filterByIndex.map(item => new Date(item.date).toLocaleString('es-ES', {month: 'numeric', day: 'numeric'})).reverse();
            setDatos(data);
        }

        if (temp === 'SEMANA') {
            const filterByIndex = history.filter((item,index) => index < 15); 
            data.datasets[0]['data'] = filterByIndex.map((item,index) => item.value_sell);
            data.labels = filterByIndex.map(item => new Date(item.date).toLocaleString('es-ES', {month: 'numeric', day: 'numeric'})).reverse();
            setDatos(data);
        }
        if (temp === 'MES') {
            const filterByIndex = history.filter((item,index) => index < 15); 
            data.datasets[0]['data'] = filterByIndex.map((item,index) => item.value_sell);
            data.labels = filterByIndex.map(item => new Date(item.date).toLocaleString('es-ES', {month: 'numeric', day: 'numeric'})).reverse();
            setDatos(data);
        }
        if (temp === 'AÑO') {
            const filterByIndex = history.filter((item,index) => index < 10); 
            data.datasets[0]['data'] = filterByIndex.map((item,index) => item.value_sell);
            data.labels = filterByIndex.map(item => new Date(item.date).toLocaleString('es-ES', {month: 'numeric', day: 'numeric'})).reverse();
            setDatos(data);
        }

    }
    
    return {datos, often, setTemp};

}
