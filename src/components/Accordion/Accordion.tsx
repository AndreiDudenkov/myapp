import React, {useState} from 'react';
import {log} from 'util';
type AccordionPropsType = {
    titleValue: string
    deployed: boolean
    setDeployed:()=>void

}
function Accordion (props: AccordionPropsType) {
    // let [deployed, setDeployed] = useState(false)
    return <>
        <AccordionTitle titleValue={props.titleValue}
                        setDeployed={props.setDeployed}/>
        {/*<button onClick={()=>setDeployed(!deployed)}>Toggle</button>*/}

        { props.deployed && <AccordionBody/>}
    </>
}
type AccordionTitlePropsType = {
    titleValue: string
    setDeployed: () => void


}

function AccordionTitle (props: AccordionTitlePropsType) {

    return (

        <h3 onClick={props.setDeployed}>--- {props.titleValue} ---</h3>

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
