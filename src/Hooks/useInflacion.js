import { useEffect, useState } from "react";
const TOKEN = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjQxMzE5OTAsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJ5ZW5kZXJzb25jb2xtZW5hcmVzNjdAZ21haWwuY29tIn0.rXI-U8fC2pTbIJb0S1mN-dHckb_vOS4oPyFOkGOEADcPmdY2eY7-tNnaXkemUdvdV802l1v8jIsC-VvVsNScDw"

let obj = {
    labels: [], 
    datasets: [
      {
        label: "",
        data: [],
      },
    ],
  };

export const useInflacion = (URL) => {

    const [datos, setDatos] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(_ => {
        fetch(URL, {
            headers: { Authorization: `Bearer ${TOKEN}` }
        })
            .then(res=>res.json())
            .then(data =>
                {
                    setDatos(data)
                    const temp = data.filter((item,index)=> index > (data.length - 11));
                    obj.datasets[0]['data'] = temp.map((item,index) => item.v);
                    obj.labels = temp.map((item,index)=> new Date(item.d).toLocaleString("es-ES", {month:'long'}));
                })
            .catch(err => alert(err))
            .finally(_ => setLoader(!loader));


    }, []);

    return {datos, loader, obj};
}