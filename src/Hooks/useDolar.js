import { useEffect, useState } from "react";

const URL_DOLAR_TODAY = "https://api.bluelytics.com.ar/v2/latest";
const URL_HISTORY_DOLAR = "https://api.bluelytics.com.ar/v2/evolution.json";

export const useDolar = () => {
    const [dolar, setDolar] = useState({});
    const [dolarHistory, setDolarHistory] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(_ => {
        fetch(URL_DOLAR_TODAY)
            .then(res => res.json())
            .then(data => setDolar(data))
            .catch(err => alert(err))
            .finally(_ => setLoader(!loader));
    }, []);

    useEffect(_ => {
        fetch(URL_HISTORY_DOLAR)
            .then(res => res.json())
            .then(data => setDolarHistory(data))
            .catch(err => alert(err))

    }, [dolar]);

    return {dolar, dolarHistory, loader};
}

export const useDate = (d) => {

    const date = new Date(d);

    const datetime = `${date.getDate()}-${date.getMonth()+1} ${date.getHours()}:${date.getMinutes()}`;

    return {datetime};


}