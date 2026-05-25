import './IconButton.css';

function IconButton({ label, icon, func, disabled }) {
    return (
        <div className={`iconButton ${disabled ? "disabled" : ""}`} onClick={func}>
            <img src={icon} />
            {label}
        </div>
    );
}

export default IconButton;