import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData]=useState({})
    useState(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> res.setData(currency))
        console.log(data)
    },[currency])
    return data
}

export default useCurrencyInfo