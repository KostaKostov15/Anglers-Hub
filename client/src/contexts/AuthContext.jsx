import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Path from '../paths';
import usePersistedState from '../hooks/usePersistedState';
import * as authService from '../services/authService';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.username, values.password);

        setAuth(result);

        navigate(Path.Home);
    };

    const getUserById = async (userId) => {
        const user = await authService.getById(userId);

        return user;
    };

    const logoutHandler = async () => {
        await authService.logout();
        setAuth('logout');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        getUserById,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    };

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;
