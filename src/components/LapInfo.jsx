import zfill from "../utils/zfill";
import { getFormattedStopwatchSeconds } from "../utils/formatted";

import "./LapInfo.css";
import "./Containers.css";
import closeIcon from "../assets/stopwatch/close.png";

function LapInfo({ lapData, setLapData }) {

    function clearLapData() {
        setLapData([]);
    }

    return (
        <div className="optionsContainer lapTimeContainer">
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