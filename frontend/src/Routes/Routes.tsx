import { Route, Routes, Navigate } from 'react-router-dom';
import Badges from '../pages/badges';
import { PATHS } from '../constants/paths';
import NotImplemented from '../pages/notImplemented';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={PATHS.badges()} replace/>} />
            <Route path={PATHS.badges()} element={<Badges />} />
            <Route path='*' element={<NotImplemented/>} />
        </Routes>
    );
}

export default AppRoutes