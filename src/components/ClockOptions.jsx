import './ClockOptions.css';

function ClockOptions({ use24Hours, setUse24Hours }) {

    function toggleUse24Hours() {
        setUse24Hours(!use24Hours);
        console.log("123");
    }

    return (
        <div className="clockOptionsContainer">
            <input type="checkbox" onInput={toggleUse24Hours} />
            <p>Use 24 Hour Clock</p>
        </div>
    );
}

export default ClockOptions;