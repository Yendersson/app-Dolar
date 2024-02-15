import { useEffect, useState } from "react";

const URL_DOLAR_TODAY = "https://api.bluelytics.com.ar/v2/latest";
const URL_HISTORY_DOLAR = "https://api.bluelytics.com.ar/v2/evolution.json";

export const useDolar = () => {
    const [dolar, setDolar] = useState({});
    const [dolarHistory, setDolarHistory] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(_ => {

        const onFecth = async () => {
            try {
                const response = await fetch(URL_DOLAR_TODAY)
                const data = await response.json();
                setDolar(data);
            } catch (error) {
                alert(error);
            }
        }
        onFecth();
    }, []);

    useEffect(_ => {
        const onFecth = async () => {
            try {
                const response = await fetch(URL_HISTORY_DOLAR)
                const data = await response.json();
                setDolarHistory(data);
            } catch (error) {
                alert(error);
            }finally {
                setLoader(!loader)
            }
        }

        if (Object.keys(dolar).length > 0) onFecth();

    },[dolar]);

    return {dolar, dolarHistory, loader};
}

export const useDate = (d) => {

    const date = new Date(d);

    const datetime = `${date.getDate()}-${date.getMonth()+1} ${date.getHours()}:${date.getMinutes()}`;

    return {datetime};


}