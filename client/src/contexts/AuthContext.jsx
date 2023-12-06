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

    const loginSubmitHandler = async (email, password) => {
        setIsLoading(true);
        try {
            const result = await authService.login(email, password);

            setIsLoading(false);
            setAuth(result);

            navigate(Path.Home);
        } catch (err) {
            console.log(err.message);
            setIsLoading(false);
        }
    };

    const registerSubmitHandler = async (email, username, password) => {
        setIsLoading(true);

        try {
            const result = await authService.register(email, username, password);

            setIsLoading(false);
            setAuth(result);

            navigate(Path.Home);
        } catch (err) {
            console.log(err.message);
            setIsLoading(false);
        }
    };

    const getUserById = async (userId) => {
        setIsLoading(true);

        try {
            const user = await authService.getById(userId);

            setIsLoading(false);
            return user;
        } catch (err) {
            console.log(err);
            setIsLoading(false);
        }
    };

    const logoutHandler = async () => {
        setIsLoading(true);

        try {
            await authService.logout();

            setIsLoading(false);
            setAuth('logout');
        } catch (err) {
            console.log(err.message);
            setIsLoading(false);
        }
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
