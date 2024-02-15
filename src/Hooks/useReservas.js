import { useEffect, useState } from "react";
const TOKEN = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjQxMzE5OTAsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJ5ZW5kZXJzb25jb2xtZW5hcmVzNjdAZ21haWwuY29tIn0.rXI-U8fC2pTbIJb0S1mN-dHckb_vOS4oPyFOkGOEADcPmdY2eY7-tNnaXkemUdvdV802l1v8jIsC-VvVsNScDw"
const URL = "https://bcra-proxy-cors.vercel.app/reservas";
export const useReservas = () => {

    const [reservas, setReservas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(_=> {
        fetch(URL, {
            headers: { Authorization: `Bearer ${TOKEN}` }
        },)
        .then(res=>res.json())
        .then(datos => {
            setReservas(datos)
            console.log(datos);
        })
        .catch(erro => alert(erro))
        .finally(_=> setLoading(!loading));
    },[])

    return {reservas, loading};

}