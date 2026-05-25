import { useState, useEffect } from 'react';
import Stopwatch from "../components/Stopwatch";
import StopwatchOptions from "../components/StopwatchOptions";
import { STOPWATCH_SECONDS_KEY } from '../utils/keys';
import cleanGetItem from '../utils/cleanGetItem';

function StopwatchPage() {
    const [isStopwatchOn, setIsStopwatchOn] = useState(false);
    const [stopwatchSeconds, setStopwatchSeconds] = useState(cleanGetItem(STOPWATCH_SECONDS_KEY, 0))

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