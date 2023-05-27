import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import {Simulate} from 'react-dom/test-utils';
import compositionUpdate = Simulate.compositionUpdate;


export default {
    title: 'SelectUseMemo'
}

let items = [
    {country: 'Belarus', citizens: 10000000, capital: 'Minsk'},
    {country: 'Georgia', citizens: 20000000, capital: 'Tbilisi'},
    {country: 'China', citizens: 30000000, capital: 'Beijing'}
]


export const Select_Memo = () => {

    const Count = () => {
        console.log('New__Count')
        const [count, setCount] = useState<number>(0)
        const onClickHandler = () => {
            setCount(count + 1)

        }
        return <>
            <button onClick={onClickHandler}>Count +1</button>
            <div>{count}</div>
        </>
    }

    const Slect = () => {
        console.log('NewSlect')
        const [parentVale, setParentValue] = useState<string | undefined>('Belarus')
        const onchangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
            setParentValue(e.currentTarget.value)
        }
        return <>
            <select value={parentVale} onChange={onchangeHandler}>
                <option value={'Belarus'}>Belarus</option>
                <option value={'Georgia'}>Georgia</option>
                <option value={'China'}>China</option>
            </select>
        </>
    }
    return <>
        <Count/>
        <Slect/>
    </>
}







