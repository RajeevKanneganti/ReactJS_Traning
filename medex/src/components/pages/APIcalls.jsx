import { useApi } from "../hooks/useApi";

export const APIcall = () =>{
    const countryList = useApi("https://restcountries.com/v2/all",'get')

    return(
        <h1>
            {JSON.stringify(countryList)}
        </h1>
    )
}