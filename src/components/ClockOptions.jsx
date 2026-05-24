import './ClockOptions.css';

function ClockOptions({ use24Hours, setUse24Hours }) {
    function toggleUse24Hours() {
        setUse24Hours(!use24Hours);
    }

    return (
        <div className="optionsContainer">
            <input type="checkbox" checked={use24Hours} onChange={toggleUse24Hours} />
            <p className="Use24HoursLabel" onClick={toggleUse24Hours}>Use 24-Hour Clock</p>
        </div>
    );
}

export default ClockOptions;