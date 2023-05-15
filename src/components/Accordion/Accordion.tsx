import React, {useReducer} from 'react';
import {DEPLOYED_CHANGE, reducer} from '../Reducer/Reducer';

type ItemType ={
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    items: ItemType[]

}



export const AccordionForMemo = (props: AccordionPropsType) => {
    const [state, dispatch] = useReducer(reducer, {deployed:true})


    return <>
        <AccordionTitle titleValue={props.titleValue}
                        onClick={()=>dispatch({type: DEPLOYED_CHANGE})}/>

        {state.deployed && <AccordionBody items={props.items}/>}
    </>
}

export const Accordion = React.memo(AccordionForMemo)
type AccordionTitlePropsType = {
    titleValue: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (

        <h3 onClick={props.onClick}>--- {props.titleValue} -2222222--</h3>

    )
}

type AccordionBodyPropsType = {
    items: ItemType[]

}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return (<ul>
            {props.items.map((el, index) => <li key={index}>{el.title}</li>)}
        </ul>

    )
}

