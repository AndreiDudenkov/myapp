import React from "react";
type AccordionPropsType = {
    titleValue: string
    deployed: boolean
}
function Accordion (props: AccordionPropsType) {
    console.log('Accordion rendering')

    return <>
        <AccordionTitle titleValue={props.titleValue}/>
        {props.deployed && <AccordionBody/>}
    </>
}
type AccordionTitlePropsType = {
    titleValue: string
}
function AccordionTitle (props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    debugger
    return (

        <h3>--- {props.titleValue} ---</h3>

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
