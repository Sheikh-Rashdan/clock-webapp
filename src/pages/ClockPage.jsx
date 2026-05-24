import { useState } from 'react';
import Clock from '../components/Clock';
import ClockOptions from '../components/ClockOptions';
import NavigationPane from '../components/NavigationPane';

function ClockPage() {
    const CURRENT_PAGE = "clock";
    const [use24Hours, setUse24Hours] = useState(false);
    const [popLabel, setPopLabel] = useState(false);

    return (
        <>
            <Clock {...{ use24Hours, popLabel, setPopLabel }} />
            <ClockOptions {...{ use24Hours, setUse24Hours, setPopLabel }} />
            <NavigationPane highlight={CURRENT_PAGE} />
        </>
    );
}

export default ClockPage;