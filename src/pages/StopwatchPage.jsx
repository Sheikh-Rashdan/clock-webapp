import { useState } from 'react';
import Stopwatch from "../components/Stopwatch";
import StopwatchOptions from "../components/StopwatchOptions";

function StopwatchPage() {
    const CURRENT_PAGE = "stopwatch";
    const [isStopwatchOn, setIsStopwatchOn] = useState(false);
    const [stopwatchSeconds, setStopwatchSeconds] = useState(0);

    return (
        <>
            <Stopwatch {...{ isStopwatchOn, stopwatchSeconds, setStopwatchSeconds }} />
            <StopwatchOptions {...{ isStopwatchOn, setIsStopwatchOn, setStopwatchSeconds }} />
        </>
    );
}

export default StopwatchPage;