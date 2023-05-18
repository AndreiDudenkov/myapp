import {useMemo, useState} from 'react';

export  default {
    title: 'useMemo'
}

export const useMemoExample = () => {
    const [a, setA] = useState(2)
    const [b, setB] = useState(3)

    let resultA = a
    let resultB = b

    useMemo( () => { for (let i = 1; i < a; i++) {
        let j = 0
        while(j<100000000){
            j = j+1
            const testValue = Math.random()
        }
        resultA *=i
    }
    }, [a])

    for (let i = 1; i < b; i++) {
        resultB *=i
    }

    return <>
        <input type="text" value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
        <input type="text" value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
        <div>Result A: {resultA}</div>
        <div>Result B: {resultB}</div>
    </>

}