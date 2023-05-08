import React, {ChangeEvent, useRef, useState} from 'react';
import {Simulate} from 'react-dom/test-utils';
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




export const ControlledInputWithFixedValue = () =>  <input value={'Andrei'}/>
