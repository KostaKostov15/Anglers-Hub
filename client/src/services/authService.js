import * as request from '../lib/api';

const host = request.host;

export async function login(email, password) {
    const result = await request.post(host + '/users/login', {
        email,
        password,
    });

    return result;
}

export async function register(email, password) {
    const result = await request.post(host + '/users/register', {
        email,
        password,
    });

    return result;
}

export async function logout() {
    const result = await request.get(host + '/users/logout');

    return result;
}
