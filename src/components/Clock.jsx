import { useState, useEffect } from 'react';
import zfill from "../utils/zfill";

import "./Containers.css";
import "./Clock.css";

function Clock({ use24Hours }) {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 30000);
        return () => clearInterval(interval);
    }, []);

    function getTime() {
        let hours = now.getHours();
        const meridiem = (!use24Hours ? (hours >= 12 ? "PM" : "AM") : "Hrs")
        if (!use24Hours) {
            hours %= 12;
            if (hours === 0) hours = 12;
        }
        hours = zfill(hours);
        const minutes = zfill(now.getMinutes());
        return hours + ":" + minutes + " " + meridiem;
    }

    function getDate() {
        return now.toLocaleString("default", { "day": "2-digit", "month": "long", "year": "numeric", "weekday": "long" });
    }

    return (
        <>
            <div className="dateContainer">
                <p className="dateLabel">
                    {getDate()}
                </p>
            </div>

            <div className="mainContainer">
                <p className="clockLabel">
                    {getTime()}
                </p>
            </div>
        </>
    );
}

export default Clock;