import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const useApi = (url, type, payload) => {
    const [apiResult, setData] = useState({
        data:'',
        error:''
    });

    useEffect(async()=>{
        const api = async () => {
            let result, error;
            try{
                if(type == 'get'){
                    result = await axios.get(url);
                }else if (type == 'post'){
                    result = await axios.post(url, payload)
                }
                setData({...apiResult, data: result.data, error:''})
            }catch (ex){
                console.log(ex)
                setData({...apiResult, error:'Error From API call'})
            }
        }
        api();
    }, [])

    return apiResult
}