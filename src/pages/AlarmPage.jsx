import { useState, useEffect } from "react";
import Alarm from "../components/Alarm";
import alarmSound from "../assets/alarm/Alarm.mp3";
import AlarmDisplay from "../components/AlarmDisplay";
import { ALARM_DATA_KEY } from "../utils/keys";
import cleanGetItem from "../utils/cleanGetItem";

function AlarmPage() {
    const [alarmData, setAlarmData] = useState(cleanGetItem(ALARM_DATA_KEY, []));
    const alarmAudio = new Audio(alarmSound);

    useEffect(() => {
        localStorage.setItem(ALARM_DATA_KEY, JSON.stringify(alarmData));

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
        }, 15000);

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