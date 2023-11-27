import { useContext } from 'react';
import AuthContext from '../contexts/authContext';
import { Navigate, Outlet } from 'react-router-dom';
import Path from '../paths';

export default function AuthGuard() {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to={Path.Login} />;
    }

    return <Outlet />;
}
