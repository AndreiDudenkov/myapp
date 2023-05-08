import React, {ChangeEvent, useRef, useState} from 'react';
import {Simulate} from 'react-dom/test-utils';
import {action} from '@storybook/addon-actions'
import input = Simulate.input;

export  default {
    title: 'input'
}
export const UncontrolledInput = () =>  <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
    setValue(e.currentTarget.value)
    }
   return <> <input onChange={onChangeHandler} /> - {value} </>
}


export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const onClickHandler = ()=>{
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
   return <> <input ref={inputRef}/>  <button onClick={onClickHandler}>save</button> actual value - {value} </>
}


export const ControlledInput =() => {
    const [parentVale, setParentValue] = useState('')
    const onchangeHandler =(e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <> <input value={parentVale} onChange={onchangeHandler}/> </>
}

export const ControlledCheckBox =() => {
    const [parentVale, setParentValue] = useState(true)

    const onchangeHandler =(e:ChangeEvent<HTMLInputElement> ) => {
        setParentValue(e.currentTarget.checked)
    }

    return <> <input type={'checkbox'} checked={parentVale} onChange={onchangeHandler}/> </>
}

export const ControlledSelect =() => {
    const [parentVale, setParentValue] = useState<string | undefined>('2')
    const onchangeHandler =(e:ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <>
        <select value={parentVale} onChange={onchangeHandler}>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moskow</option>
        <option value={'3'}>Kiev</option>
    </select> </>
}

export const ControlledInputWithFixedValue = () =>  <input value={'Andrei'}/>
