import axios from "axios";
import { useEffect, useState } from "react"

export const useApi = (url, type, payload) => {
    const [apiResult, setData] = useState({
        data: '',
        error: ''
    });
    
    return apiResult;
}