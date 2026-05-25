import { useEffect, useRef } from "react";
import zfill from "../utils/zfill";

import "./AlarmDisplay.css";
import "./Containers.css";

function AlarmDisplay({ alarmData, setAlarmData }) {
    const containerRef = useRef();

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }, [alarmData]);

    function deleteAlarm(dataToDelete) {
        const newAlarmData = [...alarmData];
        const index = newAlarmData.findIndex(data => data.hours === dataToDelete.hours && data.minutes === dataToDelete.minutes);
        if (index !== -1) {
            newAlarmData.splice(index, 1);
            setAlarmData(newAlarmData);
        }
    }

    return (
        <div className="optionsContainer column popThis" ref={containerRef}>
            <p className="label">Alarms</p>
            <div className="alarmDisplayContainer">
                {alarmData.map(data => {
                    let meridiem = "AM";
                    let hours = data.hours;
                    if (data.hours >= 12) {
                        meridiem = "PM";
                    }
                    if (data.hours > 12) hours -= 12;
                    else if (data.hours === 0) hours = 12;

                    return <p key={`KEY_${data.hours}_${data.minutes}`} className="alarmCard" onClick={() => deleteAlarm(data)}>{zfill(hours)}:{zfill(data.minutes)} {meridiem}</p>
                })}
            </div>
        </div>
    );
}

export default AlarmDisplay;