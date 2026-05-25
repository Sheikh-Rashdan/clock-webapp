import zfill from "./zfill";

export function getFormattedStopwatchSeconds(inputSeconds) {
    let seconds = inputSeconds % 60;
    let minutes = Math.floor(inputSeconds / 60) % 60;
    let hours = Math.floor(inputSeconds / 3600);
    seconds = zfill(seconds);
    minutes = zfill(minutes);
    hours = zfill(hours);
    return `${hours}:${minutes}:${seconds}`;
}