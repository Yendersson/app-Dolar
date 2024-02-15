import { useEffect, useState } from "react";


let obj = {
    labels: [], 
    datasets: [
      {
        label: "",
        data: [],
      },
    ],
  };

export const useInflacionChart = (data) => {

    const [datos, setDatos] = useState(obj);

    useEffect(_=> {
        const temp = data.filter((item,index)=> index > (data.length - 11));
        console.log(temp);
        obj.datasets[0]['data'] = temp.map(item => item.v);
        obj.labels = temp.map(item => new Date(item.d).toLocaleString("es-ES", {month:'long'}));
        setDatos(obj);
    },[]);

    return {datos};
}