
import React, {useState, useEffect} from 'react';
import '../CSS/digitalClock.scss'
import nypic from "/NYC2.jpg"

export function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);
    
        return () => {
            clearInterval(intervalID);
        }
    }, []);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12; // the hour '0' should be '12'
        
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    const myStyle = {
        backgroundImage: `url(${nypic})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        margin: "0",
        display: "flex",
        justifyContent: "center",
        minHeight: "80vh",
        alignItems: "center"
    }

    return (
    <div className="clock-container" style={myStyle}>
        <div className="clock">
            <span>{formatTime()}</span>
        </div>
     </div>
    )

}
