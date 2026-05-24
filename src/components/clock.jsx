import { useState, useEffect } from 'react';

import "./clock.css";

function Clock({ use24Hours }) {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setNow(new Date());
        }, 30000);
    }, []);

    function zfill(number, zeroes = 2) {
        number = String(number);
        while (number.length < zeroes) {
            number = "0" + number;
        }
        return number;
    }

    function getTime() {
        let hours = now.getHours();
        const meridiem = (!use24Hours ? (hours >= 12 ? "PM" : "AM") : "")
        if (!use24Hours) hours %= 12;
        hours = zfill(hours);
        const minutes = zfill(now.getMinutes());
        return hours + ":" + minutes + " " + meridiem;
    }

    return (
        <div className="clockContainer">
            <p className="clockLabel">
                {getTime()}
            </p>
        </div>
    );
}

export default Clock;