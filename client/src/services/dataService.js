import * as request from '../lib/api';

const host = request.host;

export async function getAll() {
    const result = await request.get(host + '/data');

    return result;
}

export async function getById(id) {
    const result = await request.get(host + `/data/${id}`);

    return result;
}

export async function getLatest() {
    const result = await request.get(host + '/data/latest');

    return result;
}

export async function create(data) {
    const result = await request.post(host + '/data', data);

    return result;
}

export async function update(id, data) {
    const result = await request.put(host + `/data/${id}`, data);

    return result;
}

export async function remove(id) {
    await request.del(host + `/data/${id}`);
}
