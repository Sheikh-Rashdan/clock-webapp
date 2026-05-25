import { useState, useEffect } from "react";
import Alarm from "../components/Alarm";
import alarmSound from "../assets/alarm/Alarm.mp3";

function AlarmPage() {
    const [alarmData, setAlarmData] = useState([]);
    const alarmAudio = new Audio(alarmSound);

    console.log(alarmData);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const index = alarmData.findIndex((data) => data.hours === now.getHours() && data.minutes === now.getMinutes());
            if (index !== -1) {
                alarmAudio.play();
                const newAlarmData = [...alarmData];
                newAlarmData.pop(index);
                setAlarmData(newAlarmData);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [alarmData])

    return (
        <>
            <Alarm {...{ alarmData, setAlarmData }} />
        </>
    );
}

export default AlarmPage;