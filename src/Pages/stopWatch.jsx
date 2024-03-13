import React, {useState, useEffect, useRef} from 'react';
import '../CSS/stopWatch.scss';

export function StopWatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIDRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if (isRunning) {
            intervalIDRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }
        return () => {
            clearInterval(intervalIDRef.current);
        }
    }, [isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
        
    }
    
    function stop(){
        setIsRunning(false);
        clearInterval(intervalIDRef.current);
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}.${milliseconds}`;
       
    }

    return(
    <div className="stopwatch"> 
        <div className='sWatch-display'>{formatTime()}</div>
        <div className='sWatch-controls'>
            <button className='sWatch-start-button' onClick={start}>Start</button>
            <button className='sWatch-stop-button' onClick={stop}>Stop</button>
            <button className='sWatch-reset-button' onClick={reset}>Reset</button>
        </div>
    </div>
    );
}