import React, {useState} from 'react';


export  default {
    title: 'useState'
}

const generateData = (num:number) => {
    console.log('generate')
    return num*2
}

export const Example1 = () => {

    const [counter, setCounter] = useState(()=>generateData(5))

return <>
    <button onClick={()=>setCounter(state=>state+1)}>Count +1</button>
    <div>
    {counter}
    </div>
</>
}