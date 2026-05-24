import { useEffect } from 'react';
import zfill from "../utils/zfill";

import './Containers.css';
import './Stopwatch.css';

function Stopwatch({ isStopwatchOn, stopwatchSeconds, setStopwatchSeconds }) {

    useEffect(() => {
        if (isStopwatchOn) {
            const timeout = setTimeout(() => setStopwatchSeconds(stopwatchSeconds + 1), 1000);
            return () => clearTimeout(timeout);
        }
    }, [isStopwatchOn, stopwatchSeconds, setStopwatchSeconds]);

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
        <div className="mainContainer">
            {getFormattedStopwatchSeconds()}
        </div>
    );
}

export default Stopwatch;