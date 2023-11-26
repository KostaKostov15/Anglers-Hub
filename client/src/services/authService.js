import * as request from '../lib/api';

const host = 'http://localhost:3000';

export async function login(email, password) {
    const result = await request.post(host + '/users/login', {
        email,
        password,
    });

    // localStorage.setItem('authToken', result.accessToken);
    // localStorage.setItem('userId', result._id);
    // localStorage.setItem('email', result.email);

    return result;
}

export async function register(email, password) {
    const result = await request.post(host + '/users/register', {
        email,
        password,
    });

    // localStorage.setItem('authToken', result.accessToken);
    // localStorage.setItem('userId', result._id);
    // localStorage.setItem('email', result.email);

    return result;
}

export async function logout() {
    const result = await request.get(host + '/users/logout');

    // localStorage.removeItem('email');
    // localStorage.removeItem('authToken');
    // localStorage.removeItem('userId');

    return result;
}