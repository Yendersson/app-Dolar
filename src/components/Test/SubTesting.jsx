import React, { useContext, useEffect, useState } from "react";
import { context } from "./Testing";

const SubTesting = () => {
    const dolar = useContext(context);
    const [loader, setLoader] = useState(false);
    console.log(dolar);

    useEffect(_=> {
        if (Object.keys(dolar.now).length > 0) setLoader(!loader); 
    }, [dolar.now])


    console.log(loader)

    return (
        <div>
            {loader? (<p>{dolar.now.blue.value_sell}</p>)
                :(<p>Loading</p>)
            }
        </div>
    )
}

export default SubTesting;