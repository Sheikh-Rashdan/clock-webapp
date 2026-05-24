import { useState } from 'react';
import Clock from '../components/Clock';
import ClockOptions from '../components/ClockOptions'

function ClockPage() {
    const [use24Hours, setUse24Hours] = useState(false);

    return (
        <>
            <Clock use24Hours={use24Hours} />
            <ClockOptions use24Hours={use24Hours} setUse24Hours={setUse24Hours} />
        </>
    );
}

export default ClockPage;