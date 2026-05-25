import { useEffect, useState } from "react";
import Spinbox from "./Spinbox";
import ToggleButton from "./ToggleButton";

import "./Alarm.css"
import "./Containers.css"


function Alarm() {
    const now = new Date();
    const [hourInput, setHourInput] = useState(now.getHours());
    const [minuteInput, setMinuteInput] = useState(now.getMinutes());
    const [meridiemInput, setMeridiemInput] = useState(now.getHours() >= 12 ? "PM" : "AM");

    useEffect(() => {
        if (hourInput > 12) {
            setHourInput(hourInput % 12);
        } else if (hourInput < 1) {
            setHourInput(12 + hourInput);
        }
    }, [hourInput])

    useEffect(() => {
        if (minuteInput > 59) {
            setMinuteInput(minuteInput % 60);
        } else if (minuteInput < 0) {
            setMinuteInput(60 + minuteInput);
        }
    }, [minuteInput])

    return (
        <div className="mainContainer">
            <div className="alarmInputContainer">
                <Spinbox value={hourInput} setValue={setHourInput} />
                <Spinbox value={minuteInput} setValue={setMinuteInput} />
                <ToggleButton value={meridiemInput} setValue={setMeridiemInput} toggleValues={["AM", "PM"]} />
            </div>
        </div>
    );
}

export default Alarm;