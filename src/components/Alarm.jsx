import { useEffect, useState } from "react";
import Spinbox from "./Spinbox";
import ToggleButton from "./ToggleButton";

import "./Alarm.css"
import "./Containers.css"


function Alarm({ alarmData, setAlarmData }) {
    const now = new Date();
    const [hourInput, setHourInput] = useState(now.getHours());
    const [minuteInput, setMinuteInput] = useState(now.getMinutes());
    const [meridiemInput, setMeridiemInput] = useState(now.getHours() >= 12 ? "PM" : "AM");

    function addAlarm() {
        const newAlarmData = [...alarmData];
        let hours = hourInput;

        if (meridiemInput === "PM") {
            hours += 12;
            if (hours === 24) {
                hours = 12;
            }
        }
        else if (hourInput == 12) {
            hours = 0;
        }

        let newAlarmTime = { "hours": hours, "minutes": minuteInput }
        if (newAlarmData.find((data) => data.hours === hours && data.minutes === minuteInput) === undefined) {
            newAlarmData.push(newAlarmTime);
            setAlarmData(newAlarmData);
        }
    }

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
                <div className="row">
                    <Spinbox value={hourInput} setValue={setHourInput} label="Hours" />
                    <Spinbox value={minuteInput} setValue={setMinuteInput} label="Minutes" />
                    <ToggleButton value={meridiemInput} setValue={setMeridiemInput} toggleValues={["AM", "PM"]} label="Meridiem" />
                </div>
                <button onClick={addAlarm}>Add Alarm</button>
            </div>
        </div>
    );
}

export default Alarm;