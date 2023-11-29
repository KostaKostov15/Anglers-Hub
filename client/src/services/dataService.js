import * as request from '../lib/api';

const host = 'http://localhost:3000';

export async function create(data) {
    const result = await request.post(host + '/data', data);

    return result;
}
