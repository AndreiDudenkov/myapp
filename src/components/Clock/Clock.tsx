import React, {useEffect, useState} from 'react';
import s from './Clock.module.css'
import {number} from 'prop-types';
import {log} from 'util';

export const Clock = () => {
    let [date, setDate] = useState(new Date())
    // let [sec, setSec] = useState(0)
    // let [min, setMin] = useState(0)
    // let [hour, setHour] = useState(0)

    useEffect(() => {
        let int = setInterval(() => {
            // console.log('tick')
            setDate(new Date())
        }, 1000)
    }, [])


    let doubleNum = (num: number) => num < 10 ? '0' + num : num

    let sec = date.getSeconds()
    let min = date.getMinutes()
    let hour = date.getHours()

    let secDeg = (+date.getSeconds() / 60) * 360
    let minDeg = (+date.getMinutes() * 6)
    let hourDeg = (+date.getHours()%12)*30
    console.log(hourDeg)
    return (<div >
            <div>
            <span>{doubleNum(hour)}:</span>
            <span>{doubleNum(min)}:</span>
            <span>{doubleNum(sec)}</span>
            </div>
            <div className={s.clock}>
            <span className={s.second} style={{transform: `translate(-50%, -100%) rotate(${secDeg}deg)`}}></span>
            <span className={s.minute} style={{transform: `translate(-50%, -100%) rotate(${minDeg}deg)`}}></span>
            <span className={s.hour} style={{transform: `translate(-50%, -100%) rotate(${hourDeg}deg)`}}></span>
            </div>
        </div>
    );
};

