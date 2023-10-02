import React, {useEffect, useState} from 'react';
import s from '../Clock/Clock.module.css';

export const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let intervalId:any;

        if (isRunning) {
           intervalId = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);

    const handleStartStop = () => {
        setIsRunning(isRunning => !isRunning);
    };

    const handleReset = () => {
        setTime(0);
    };

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Elapsed Time: {time} seconds</p>
            <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}



