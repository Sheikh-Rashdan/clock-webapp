import './IconButton.css';

function NavigationButton({ label, icon, func }) {

    return (
        <div className={"iconButton"} onClick={func}>
            <img src={icon} />
            {label}
        </div>
    );
}

export default NavigationButton;