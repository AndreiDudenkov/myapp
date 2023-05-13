import React, {useState} from 'react';
import {log} from 'util';

type ItemType ={
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    deployed: boolean
    setDeployed: () => void
    items: ItemType[]
    onClick: (value:any)=>void
}

export const Accordion = (props: AccordionPropsType) => {
    // let [deployed, setDeployed] = useState(false)
    return <>
        <AccordionTitle titleValue={props.titleValue}
                        setDeployed={props.setDeployed}/>
        {/*<button onClick={()=>setDeployed(!deployed)}>Toggle</button>*/}

        {props.deployed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </>
}

type AccordionTitlePropsType = {
    titleValue: string
    setDeployed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (

        <h3 onClick={props.setDeployed}>--- {props.titleValue} ---</h3>

    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value:any)=>void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return (<ul>
            {props.items.map((el, index) => <li onClick={()=>props.onClick(el.value)} key={index}>{el.title}</li>)}
            </ul>

    )
}


