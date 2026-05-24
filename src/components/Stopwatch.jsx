import { useState, useEffect } from 'react';
import zfill from "../utils/zfill";

import './Stopwatch.css';

function Stopwatch() {
    const [isStopwatchOn, setIsStopwatchOn] = useState(false);
    const [stopwatchSeconds, setStopwatchSeconds] = useState(0);

    function getFormattedStopwatchSeconds() {
        let seconds = stopwatchSeconds % 60;
        let minutes = Math.floor(stopwatchSeconds / 60) % 60;
        let hours = Math.floor(stopwatchSeconds / 3600);
        seconds = zfill(seconds);
        minutes = zfill(minutes);
        hours = zfill(hours);
        return `${hours}:${minutes}:${seconds}`;
    }

    return (
        <div className="stopwatchContainer">
            {getFormattedStopwatchSeconds()}
        </div>
    );
}

export default Stopwatch;