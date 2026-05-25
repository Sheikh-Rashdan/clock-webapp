import "./ToggleButton.css"

function ToggleButton({ value, setValue, toggleValues, label }) {

    function toggleValue() {
        let index = ((toggleValues.findIndex(val => val === value)) + 1) % toggleValues.length;
        setValue(toggleValues[index]);
    }

    return (
        <div>
            <p className="toggleButton" onClick={toggleValue}>
                {value}
            </p>
            <p className="label">{label}</p>
        </div>
    );
}

export default ToggleButton;