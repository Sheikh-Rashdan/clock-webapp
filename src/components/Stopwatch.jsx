import { useEffect } from 'react';
import { getFormattedStopwatchSeconds } from "../utils/formatted";

import './Containers.css';
import './Stopwatch.css';

function Stopwatch({ isStopwatchOn, stopwatchSeconds, setStopwatchSeconds }) {

    useEffect(() => {
        if (isStopwatchOn) {
            const timeout = setTimeout(() => setStopwatchSeconds(stopwatchSeconds + 1), 1000);
            return () => clearTimeout(timeout);
        }
    }, [isStopwatchOn, stopwatchSeconds, setStopwatchSeconds]);

    return (
        <div className="mainContainer">
            {getFormattedStopwatchSeconds(stopwatchSeconds)}
        </div>
    );
}

export default Stopwatch;