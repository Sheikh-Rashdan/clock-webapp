import { useState } from 'react';
import Clock from '../components/Clock';
import ClockOptions from '../components/ClockOptions';
import NavigationPane from '../components/NavigationPane';

function ClockPage() {
    const [use24Hours, setUse24Hours] = useState(false);

    return (
        <>
            <Clock use24Hours={use24Hours} />
            <ClockOptions use24Hours={use24Hours} setUse24Hours={setUse24Hours} />
            <NavigationPane highlight={"clock"} />
        </>
    );
}

export default ClockPage;