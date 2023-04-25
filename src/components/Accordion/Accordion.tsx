import React, {useState} from 'react';
import {log} from 'util';
type AccordionPropsType = {
    titleValue: string
    setDeployed:(deployed:boolean)=>void
    deployed: boolean
}
function Accordion (props: AccordionPropsType) {
    // let [deployed, setDeployed] = useState(false)
    return <>
        <AccordionTitle titleValue={props.titleValue} setDeployed={props.setDeployed} value={props.deployed} />
        {/*<button onClick={()=>setDeployed(!deployed)}>Toggle</button>*/}

        { props.deployed && <AccordionBody/>}
    </>
}
type AccordionTitlePropsType = {
    titleValue: string
    setDeployed: (value:boolean) => void
    value:boolean

}

function AccordionTitle (props: AccordionTitlePropsType) {

    return (

        <h3 onClick={()=>props.setDeployed(!props.value)}>--- {props.titleValue} ---</h3>

    )
}

function AccordionBody (props: any) {
    console.log('AccordionBody rendering')
    return (

        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    )
}
export default Accordion;
