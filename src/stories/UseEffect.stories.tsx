import React, {useEffect, useState} from 'react';


export  default {
    title: 'useEffect'
}



export const useEffectExample1 = () => {


    const [counter, setCounter] = useState(0)
    const [testValue, setTestValue] = useState(0)

    useEffect(()=>{
        console.log('every render')
        document.title = counter.toString()
    })

    useEffect(()=>{
        console.log('first render')
        document.title = counter.toString()
    },[])

    useEffect(()=>{
        console.log('render when counter change')
        document.title = counter.toString()
    },[counter])

return <>
    <button onClick={()=>setCounter(state=>state+1)}>Count +1</button>
    <div>
    {counter}
    </div>
    <button onClick={()=>setTestValue(state=>state+1)}>Test button+1</button>
</>
}