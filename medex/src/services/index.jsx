import axios from "axios"

export const getData = (url) => {
    fetch(url).then(result=>{
        return result.json()
    }).then(response => {
        console.log(response)
        return response;
    }).catch(err=>{
        console.log(err);
    })
}

export const getDataByAxios = async (url) => { // get the data from the URL asynchoronously and return the result
    try{
        const result = await axios.get(url);
        console.log(result)
        return result.data;
    } catch (ex){
        console.log(ex);
        return ex;
    }
}

export const postDataByAxios = async (url, payload) => { // post the given payload to the url and return the result
    try{
        const result = await axios.post(url, payload);
        return result.data;
    } catch (ex){
        console.log(ex);
        return ex;
    }
}