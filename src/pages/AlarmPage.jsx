import NavigationPane from '../components/NavigationPane';

function AlarmPage() {
    const CURRENT_PAGE = "alarm";

    return (
        <>
            <NavigationPane highlight={CURRENT_PAGE} />
        </>
    );
}

export default AlarmPage;