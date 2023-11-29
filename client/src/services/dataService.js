import * as request from '../lib/api';

const host = request.host;

export async function getAll() {
    const result = await request.get(host + '/data');

    return result;
}

export async function create(data) {
    const result = await request.post(host + '/data', data);

    return result;
}
