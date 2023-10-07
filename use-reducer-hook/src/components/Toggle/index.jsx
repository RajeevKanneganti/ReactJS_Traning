import useToggle from "../../hooks/Reducer";

export const Toggle = ()=>{
    const [on, toggle] = useToggle(true)

    return(
        <div>
            <div>{on? 'ON': 'OFF'}</div>
            <button onClick={toggle}>Toggle</button>
            <button onClick={()=>{
                toggle(true)
            }}>Set ON</button>

            <button onClick={()=>{
                toggle(false)
            }} >Set OFF</button>
        </div>
    )
}