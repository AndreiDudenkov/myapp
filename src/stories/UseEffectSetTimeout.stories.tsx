import React, {useEffect, useState} from 'react';


export default {
    title: 'useEffectSetTimeout'
}


export const useEffectSetTimeoutExample1 = () => {


    const [counter, setCounter] = useState(0)
    const [testValue, setTestValue] = useState(0)


    useEffect(() => {
        setInterval(() => {
            const time = new Date()
            setCounter(state =>  time.getSeconds())
        }, 1000)
    }, [])

    useEffect(() => {
        document.title = counter.toString();
    }, [counter])

    return <>
        <button onClick={() => setCounter(state => state + 1)}>Count +1</button>
        <div>
            22:13:{counter}
        </div>
        <button onClick={() => setTestValue(state => state + 1)}>Test button+1</button>
        <div>
            {testValue}
        </div>
    </>
}