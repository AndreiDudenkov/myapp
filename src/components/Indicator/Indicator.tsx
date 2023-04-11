import React, {useState} from 'react';
import {log} from 'util';



export const Indicator = () => {
    let [status, setStatus] = useState(false)


    const onStyle = {
        marginLeft: "10px",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "2px",
        display: "inline-block",
        backgroundColor: status ? "green" : "white"

    }
    const offStyle = {
        marginLeft: "10px",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "2px",
        display: "inline-block",
        backgroundColor: status ? "white" : "red"



    }
    const indicatorStyle = {
        marginLeft: "10px",
        width: "10px",
        height: "10px",
        border: "1px solid black",
        borderRadius: "5px",
        display: "inline-block",
        backgroundColor: status ? "green" : "red"
    }

    return (
        <>
            <div style={onStyle} onClick={()=>setStatus(true)}>ON</div>
            <div style={offStyle} onClick={()=>setStatus(false)}>OFF</div>
            <div style={indicatorStyle}> </div>
        </>
    )
}