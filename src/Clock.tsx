import React, {useEffect, useState} from 'react';


export const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
       let int =  setInterval(() => {
            console.log('tick')
                setDate(new Date())
            }, 1000)
        return ()=> {
            clearInterval(int)
        }
    }, [])


    let doubleNum = (num:number) => num < 10 ? '0' + num : num

    let sec = date.getSeconds()
    let min = date.getMinutes()
    let hour = date.getHours()
    return (<div>
            <span>{doubleNum(hour)}:</span>
            <span>{doubleNum(min)}:</span>
            <span>{doubleNum(sec)}</span>
        </div>
    );
};

