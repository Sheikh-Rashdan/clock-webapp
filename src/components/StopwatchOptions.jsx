import IconButton from "./IconButton";

import "./Containers.css";
import "./StopwatchOptions.css";
import playIcon from "../assets/stopwatch/play.png";
import pauseIcon from "../assets/stopwatch/pause.png";
import resetIcon from "../assets/stopwatch/reset.png";
import lapIcon from "../assets/stopwatch/lap.png";

function StopwatchOptions({ isStopwatchOn, setIsStopwatchOn, stopwatchSeconds, setStopwatchSeconds, lapData, setLapData }) {
    function playStopwatch() {
        if (isStopwatchOn === false) {
            setIsStopwatchOn(true);
        }
    }

    function pauseStopwatch() {
        if (isStopwatchOn === true) {
            setIsStopwatchOn(false);
        }
    }

    function resetStopwatch() {
        setStopwatchSeconds(0);
        setLapData([]);
    }

    function addLap() {
        const newLapData = [...lapData];
        if (!newLapData.includes(stopwatchSeconds) && stopwatchSeconds != 0) {
            newLapData.push(stopwatchSeconds);
            setLapData(newLapData);
        }
    }

    return (
        <div className="optionsContainer">
            {
                !isStopwatchOn
                    ? <IconButton icon={playIcon} label="Play" func={playStopwatch} />
                    : <IconButton icon={pauseIcon} label="Pause" func={pauseStopwatch} />
            }
            <IconButton icon={resetIcon} label="Reset" func={resetStopwatch} />
            <IconButton icon={lapIcon} label="Lap" func={addLap} disabled={stopwatchSeconds === 0 || lapData.includes(stopwatchSeconds)} />
        </div>
    );
}

export default StopwatchOptions;