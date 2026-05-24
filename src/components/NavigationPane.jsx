import NavigationButton from './NavigationButton';

import "./NavigationPane.css";
import clockIcon from "../assets/clock.png";
import stopwatchIcon from "../assets/stopwatch.png";
import alarmIcon from "../assets/alarm.png";

function NavigationPane({ highlight }) {
    return (
        <div className="navigationPane">
            <NavigationButton path={"clock"} icon={clockIcon} highlight={highlight} />
            <NavigationButton path={"stopwatch"} icon={stopwatchIcon} highlight={highlight} />
            <NavigationButton path={"alarm"} icon={alarmIcon} highlight={highlight} />
        </div>
    );
}

export default NavigationPane;