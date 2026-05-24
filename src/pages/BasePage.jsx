import { Outlet } from 'react-router';
import NavigationPane from '../components/NavigationPane';

function BasePage() {

    return (
        <>
            <Outlet />
            <NavigationPane />
        </>
    );
}

export default BasePage;