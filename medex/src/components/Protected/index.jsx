import { Navigate } from "react-router-dom"

export const Protected = (props) =>{
    if(localStorage.getItem('token') == null){
        return <Navigate to="/" />
    }
    return props.children 
}