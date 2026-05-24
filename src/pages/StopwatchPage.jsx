import NavigationPane from '../components/NavigationPane';

function StopwatchPage() {
    const CURRENT_PAGE = "stopwatch";

    return (
        <>
            <NavigationPane highlight={CURRENT_PAGE} />
        </>
    );
}

export default StopwatchPage;