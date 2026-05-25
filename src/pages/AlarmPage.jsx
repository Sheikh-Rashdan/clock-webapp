import { useState, useEffect } from "react";
import Alarm from "../components/Alarm";
import alarmSound from "../assets/alarm/Alarm.mp3";
import AlarmDisplay from "../components/AlarmDisplay";

function AlarmPage() {
    const [alarmData, setAlarmData] = useState([]);
    const alarmAudio = new Audio(alarmSound);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const index = alarmData.findIndex((data) => data.hours === now.getHours() && data.minutes === now.getMinutes());
            console.log(index);
            if (index !== -1) {
                alarmAudio.play();
                const newAlarmData = [...alarmData];
                newAlarmData.splice(index, 1);
                setAlarmData(newAlarmData);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [alarmData])

    return (
        <>
            <Alarm {...{ alarmData, setAlarmData }} />
            {alarmData.length > 0 ? <AlarmDisplay {...{ alarmData, setAlarmData }} /> : ""}
        </>
    );
}

export default AlarmPage;