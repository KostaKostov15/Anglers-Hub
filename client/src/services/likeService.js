import * as request from '../lib/api';

const host = request.host;

export async function getByCatchId(catchId) {
    const result = await request.get(host + `/like/${catchId}`);

    return result;
}

export async function addLike(catchId) {
    const result = await request.post(host + '/like', catchId);

    return result;
}

export async function removeLike(id) {
    await request.del(host + `/like/${id}`);
}
