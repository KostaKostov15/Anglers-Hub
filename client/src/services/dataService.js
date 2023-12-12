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

export async function getAllByUserId(userId) {
    const result = await request.get(host + `/data/user/${userId}`);

    return result;
}

export async function getLatest() {
    const result = await request.get(host + '/data/latest');

    return result;
}

export async function getByQuery(category, search) {
    let result;

    if (search) {
        result = await request.get(host + `/data/${category}/${search}`);
    } else {
        result = await getAll();
    }

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
