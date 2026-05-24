import NavigationButton from './NavigationButton';

import "./NavigationPane.css";
import clockIcon from "../assets/pages/clock.png";
import stopwatchIcon from "../assets/pages/stopwatch.png";
import alarmIcon from "../assets/pages/alarm.png";

function NavigationPane() {
    return (
        <div className="navigationPane">
            <NavigationButton path={"clock"} icon={clockIcon} />
            <NavigationButton path={"stopwatch"} icon={stopwatchIcon} />
            <NavigationButton path={"alarm"} icon={alarmIcon} />
        </div>
    );
}

export default NavigationPane;