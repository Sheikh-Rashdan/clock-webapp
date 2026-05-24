import './Containers.css';
import './ClockOptions.css';

function ClockOptions({ use24Hours, setUse24Hours }) {
    function toggleUse24Hours() {
        setUse24Hours(!use24Hours);
    }

    return (
        <div className="optionsContainer">
            <div className="use24HoursContainer">
                <input type="checkbox" checked={use24Hours} onChange={toggleUse24Hours} />
                <p className="use24HoursLabel" onClick={toggleUse24Hours}>Use 24-Hour Clock</p>
            </div>
        </div>
    );
}

export default ClockOptions;