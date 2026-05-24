import { NavLink } from 'react-router';
import { useLocation } from 'react-router';

import './NavigationButton.css';

function NavigationButton({ path, icon }) {
    const location = useLocation();
    let locationPath = location.pathname.split("/");
    locationPath = locationPath[locationPath.length - 1];

    function toTitleCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <NavLink to={`${path}`}>
            <div className={`navigationButton ${locationPath === path ? "highlight" : ""}`}>
                <img src={icon} />
                {toTitleCase(path)}
            </div>
        </NavLink>
    );
}

export default NavigationButton;