import axios from "axios";
//https://api.bluelytics.com.ar/v2/latest valor del dolar en vivo
//https://api.bluelytics.com.ar/v2/evolution.json historial del dolar desde 2011
const url = "https://api.bluelytics.com.ar/v2/evolution.json";

export const getDolarExtern = () =>{
    return axios.get(url);
}