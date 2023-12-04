/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Path from '../paths';
import usePersistedState from '../hooks/usePersistedState';
import * as authService from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [auth, setAuth] = usePersistedState('auth', {});
    const navigate = useNavigate();

    const loginSubmitHandler = async (values) => {
        setIsLoading(true);
        const result = await authService.login(values.email, values.password);

        setIsLoading(false);
        setAuth(result);

        navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
        setIsLoading(true);
        const result = await authService.register(values.email, values.username, values.password);

        setIsLoading(false);
        setAuth(result);

        navigate(Path.Home);
    };

    const getUserById = async (userId) => {
        setIsLoading(true);
        const user = await authService.getById(userId);

        setIsLoading(false);
        return user;
    };

    const logoutHandler = async () => {
        setIsLoading(true);
        await authService.logout();

        setIsLoading(false);
        setAuth('logout');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        getUserById,
        isLoading,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    };

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;
