import { NavLink } from 'react-router';

import './NavigationButton.css';

function NavigationButton({ path, icon, highlight }) {

    function toTitleCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <NavLink to={`/${path}`}>
            <div className={`navigationButton ${highlight === path ? "highlight" : ""}`}>
                <img src={icon} />
                {toTitleCase(path)}
            </div>
        </NavLink>
    );
}

export default NavigationButton;