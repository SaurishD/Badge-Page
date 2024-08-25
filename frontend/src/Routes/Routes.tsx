import { Route, Routes, Navigate } from 'react-router-dom';
import Badges from '../pages/Badges/badges';
import { PATHS } from '../constants/paths';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={PATHS.badges()} replace/>} />
            <Route path={PATHS.badges()} element={<Badges />} />
        </Routes>
    );
}

export default AppRoutes