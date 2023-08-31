import { useCallback, useState } from "react"

export const useGetCurrency = () => {
    const [currency, setCurrency] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    const getCurrency = useCallback(async () => {
        try {
            setIsLoading(true);
            const res = await fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=9a64d61d73d4410a84feed6589eebc14');
            const data = await res.json();
            if(res.status===200) {
                setCurrency(data);
            } else {
                throw new Error(' Status Code '+res.status);
            }
        } catch(err) {
            setIsLoading(false)
            setIsError(err);
        } finally {
            setIsLoading(false);
        }
    }, [])
    return {getCurrency, currency, isLoading, isError};
}