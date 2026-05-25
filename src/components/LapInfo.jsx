import { useRef, useEffect } from 'react';
import zfill from "../utils/zfill";
import { getFormattedStopwatchSeconds } from "../utils/formatted";

import "./LapInfo.css";
import "./Containers.css";
import closeIcon from "../assets/stopwatch/close.png";

function LapInfo({ lapData, setLapData }) {
    const lapTimeContainerRef = useRef();

    function clearLapData() {
        setLapData([]);
    }

    useEffect(() => {
        const lapTimeContainer = lapTimeContainerRef.current;
        if (lapTimeContainer !== undefined) {
            lapTimeContainer.scrollTop = lapTimeContainer.scrollHeight;
        }
    }, [lapData]);

    return (
        <div className="optionsContainer lapTimeContainer" ref={lapTimeContainerRef}>
            <div className="lapTimeLabelContainer">
                <p className="lapTimeLabel">Lap Times</p>
                <img src={closeIcon} onClick={clearLapData} />
            </div>
            <div className="lapTimesContainer">
                {lapData.map((lapSeconds, n) => {
                    return (<div key={`KEY${lapSeconds}`} className="lapTimeCard">
                        <p>{zfill(n + 1)}</p>
                        <p> </p>
                        <p>{getFormattedStopwatchSeconds(lapSeconds)}</p>
                    </div>);
                })}
            </div>
        </div>
    );
}

export default LapInfo;