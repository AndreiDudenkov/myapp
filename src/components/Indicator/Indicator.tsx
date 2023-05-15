import React, {useState} from 'react';
import {log} from 'util';
import {ControlledAccordionForMemo} from '../Accordion/ControlledAccordion';

type IndicatorType={
    setStatus:(status:boolean)=>void
}

export const IndicatorForMemo = (props:IndicatorType) => {
    let [status, setStatus] = useState(false)

const onClickOnHandler = () => {
    setStatus(true)
    props.setStatus(true)
}
    const onClickOffHandler = () => {
        setStatus(false)
        props.setStatus(false)
    }
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
            <div style={onStyle} onClick={onClickOnHandler}>ON</div>
            <div style={offStyle} onClick={onClickOffHandler}>OFF</div>
            <div style={indicatorStyle}> </div>
        </>
    )
}

export const Indicator = React.memo(IndicatorForMemo)
