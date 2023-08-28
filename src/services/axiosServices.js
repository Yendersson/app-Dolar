import axios from "axios";
//API BANCO CENTRAL.
const apiUrl = "usd";
const proxyUrl = "https://bcra-proxy-cors.vercel.app";
//const proxyUrl = "https://api.estadisticasbcra.com";
//https://api.estadisticasbcra.com/usd
const headerToken = {
    Authorization: 'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjQxMzE5OTAsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJ5ZW5kZXJzb25jb2xtZW5hcmVzNjdAZ21haWwuY29tIn0.rXI-U8fC2pTbIJb0S1mN-dHckb_vOS4oPyFOkGOEADcPmdY2eY7-tNnaXkemUdvdV802l1v8jIsC-VvVsNScDw'
}

export const getDolarBlue = () => {
    return axios.get(`${proxyUrl}/usd`,{
        headers: headerToken
    })
}

export const getDolarOficial = () => {
    return axios.get(`${proxyUrl}/usd_of`,{
        headers: headerToken
    })
}

export const getReservas = () => {
    return axios.get(`${proxyUrl}/reservas`,{
        headers: headerToken
    })
}

export const getCirculacion = () => {
    return axios.get(`${proxyUrl}/circulacion_monetaria`,{
        headers: headerToken
    })
}

export const getInflacionMensual = () => {
    return axios.get(`${proxyUrl}/inflacion_mensual_oficial`,{
        headers: headerToken
    })
}

export const getInflacionInterAnual = () => {
    return axios.get(`${proxyUrl}/inflacion_interanual_oficial`,{
        headers: headerToken
    })
}

export const getInflacionExpect = () => {
    return axios.get(`${proxyUrl}/inflacion_esperada_oficial`,{
        headers: headerToken
    })
}
//billetes_y_monedas
export const getBilletesMonedas = () => {
    return axios.get(`${proxyUrl}/billetes_y_monedas`,{
        headers: headerToken
    })
}



