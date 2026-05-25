import { useState, useEffect } from 'react';
import Stopwatch from "../components/Stopwatch";
import StopwatchOptions from "../components/StopwatchOptions";
import { IS_STOPWATCH_ON_KEY, STOPWATCH_SECONDS_KEY, STOPWATCH_START_TIME_KEY } from '../utils/keys';
import cleanGetItem from '../utils/cleanGetItem';

function StopwatchPage() {
    const stopwatchStartTime = cleanGetItem(STOPWATCH_START_TIME_KEY, new Date());
    const [isStopwatchOn, setIsStopwatchOn] = useState(cleanGetItem(IS_STOPWATCH_ON_KEY, false));
    const [stopwatchSeconds, setStopwatchSeconds] = useState(() => {
        const storedSeconds = cleanGetItem(STOPWATCH_SECONDS_KEY, 0);

        if (isStopwatchOn) {
            const milliSecondsPassed = new Date() - new Date(stopwatchStartTime);
            return Math.floor(milliSecondsPassed / 1000);
        }

        return storedSeconds;
    });

    useEffect(() => {
        localStorage.setItem(IS_STOPWATCH_ON_KEY, isStopwatchOn);
        if (isStopwatchOn && stopwatchSeconds === 0) {
            localStorage.setItem(STOPWATCH_START_TIME_KEY, JSON.stringify(new Date()));
        }
    }, [isStopwatchOn, stopwatchSeconds]);

    useEffect(() => {
        localStorage.setItem(STOPWATCH_SECONDS_KEY, stopwatchSeconds);
    }, [stopwatchSeconds])

    return (
        <>
            <Stopwatch {...{ isStopwatchOn, stopwatchSeconds, setStopwatchSeconds }} />
            <StopwatchOptions {...{ isStopwatchOn, setIsStopwatchOn, setStopwatchSeconds }} />
        </>
    );
}

export default StopwatchPage;