import Stopwatch from "../components/Stopwatch";
import NavigationPane from '../components/NavigationPane';

function StopwatchPage() {
    const CURRENT_PAGE = "stopwatch";

    return (
        <>
            <Stopwatch />
            <NavigationPane highlight={CURRENT_PAGE} />
        </>
    );
}

export default StopwatchPage;