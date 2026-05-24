import { useState, useEffect } from 'react';
import Clock from '../components/Clock';
import ClockOptions from '../components/ClockOptions';
import NavigationPane from '../components/NavigationPane';
import { USE_24_HOURS_KEY } from '../utils/keys';
import cleanGetItem from '../utils/cleanGetItem';

function ClockPage() {
    const CURRENT_PAGE = "clock";
    const [use24Hours, setUse24Hours] = useState(cleanGetItem(USE_24_HOURS_KEY, false));
    const [popLabel, setPopLabel] = useState(false);

    useEffect(() => {
        localStorage.setItem(USE_24_HOURS_KEY, use24Hours);
    }, [use24Hours]);

    return (
        <>
            <Clock {...{ use24Hours, popLabel, setPopLabel }} />
            <ClockOptions {...{ use24Hours, setUse24Hours, setPopLabel }} />
            <NavigationPane highlight={CURRENT_PAGE} />
        </>
    );
}

export default ClockPage;