import * as request from '../lib/api';

const host = 'http://localhost:3000';

export async function login(email, password) {
    const result = await request.post(host + '/users/login', {
        email,
        password,
    });

    console.log(result);
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('email', result.email);

    return result;
}

export async function register(email, password) {
    const result = await request.post(host + '/users/register', {
        email,
        password,
    });

    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('email', result.email);

    return result;
}

export async function logout() {
    const result = await request.get(host + '/users/logout');

    sessionStorage.removeItem('email');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');

    return result;
}
