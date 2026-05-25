import "./ToggleButton.css"

function ToggleButton({ value, setValue, toggleValues }) {

    function toggleValue() {
        let index = ((toggleValues.findIndex(val => val === value)) + 1) % toggleValues.length;
        setValue(toggleValues[index]);
    }

    return (
        <p className="toggleButton" onClick={toggleValue}>
            {value}
        </p>
    );
}

export default ToggleButton;