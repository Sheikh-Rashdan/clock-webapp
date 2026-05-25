import "./Spinbox.css";
import zfill from "../utils/zfill";
import plusIcon from "../assets/alarm/plus.png";
import minusIcon from "../assets/alarm/minus.png";

function Spinbox({ value, setValue, label }) {

    return (
        <div className="parentContainer">
            <div className="spinboxContainer">
                <img src={minusIcon} onClick={() => setValue(value - 1)} />
                <p>{zfill(value)}</p>
                <img src={plusIcon} onClick={() => setValue(value + 1)} />
            </div>
            <div className="labelContainer">
                {label}
            </div>
        </div>
    );
}

export default Spinbox;