import { useState, useEffect, useCallback } from 'react';
import Stopwatch from "../components/Stopwatch";
import StopwatchOptions from "../components/StopwatchOptions";
import LapInfo from "../components/LapInfo";
import { LAP_DATA_KEY, STOPWATCH_SECONDS_KEY } from '../utils/keys';
import cleanGetItem from '../utils/cleanGetItem';

function StopwatchPage() {
    const [isStopwatchOn, setIsStopwatchOn] = useState(false);
    const [stopwatchSeconds, setStopwatchSeconds] = useState(cleanGetItem(STOPWATCH_SECONDS_KEY, 0))
    const [lapData, setLapData] = useState(cleanGetItem(LAP_DATA_KEY, []));

    const handleKeyDowns = useCallback((e) => {
        const { key } = e;

        if (key === " ") {
            setIsStopwatchOn(!isStopwatchOn);
        }
        else if (key === "r") {
            setStopwatchSeconds(0);
            setLapData([]);
        }
    }, [isStopwatchOn]);

    useEffect(() => {
        addEventListener('keydown', handleKeyDowns);

        return () => {
            removeEventListener('keydown', handleKeyDowns);
        }
    }, [handleKeyDowns]);

    useEffect(() => {
        localStorage.setItem(STOPWATCH_SECONDS_KEY, stopwatchSeconds);
    }, [stopwatchSeconds])

    useEffect(() => {
        localStorage.setItem(LAP_DATA_KEY, JSON.stringify(lapData));
    }, [lapData])

    return (
        <>
            <Stopwatch {...{ isStopwatchOn, stopwatchSeconds, setStopwatchSeconds }} />
            <StopwatchOptions {...{ isStopwatchOn, setIsStopwatchOn, stopwatchSeconds, setStopwatchSeconds, lapData, setLapData }} />
            {lapData.length > 0 ? <LapInfo {...{ lapData, setLapData }} /> : ''}
        </>
    );
}

export default StopwatchPage;