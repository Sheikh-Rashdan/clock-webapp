import IconButton from "./IconButton";

import "./Containers.css";
import "./StopwatchOptions.css";
import playIcon from "../assets/stopwatch/play.png";
import pauseIcon from "../assets/stopwatch/pause.png";
import resetIcon from "../assets/stopwatch/reset.png";

function StopwatchOptions({ isStopwatchOn, setIsStopwatchOn, setStopwatchSeconds }) {

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
    }

    return (
        <div className="optionsContainer">
            <IconButton icon={playIcon} label={"Play"} func={playStopwatch} />
            <IconButton icon={pauseIcon} label={"Pause"} func={pauseStopwatch} />
            <IconButton icon={resetIcon} label={"Reset"} func={resetStopwatch} />
        </div>
    );
}

export default StopwatchOptions;