const Like = require('../models/Like');

async function getCountByCatchId(catchId) {
    return Like.countDocuments({ catchId: catchId });
}

async function getAllByCatchId(catchId) {
    return Like.find({ catchId: catchId });
}

async function getAllByCatchIdAndOwnerId(ownerId, catchId) {
    return Like.find({ ownerId: ownerId, catchId: catchId });
}

async function createLike(data) {
    const catchLikes = await getAllByCatchIdAndOwnerId(data.ownerId, data.catchId);

    if (catchLikes.length > 0) {
        throw new Error('This record is already liked');
    }
    return Like.create(data);
}

async function deleteById(ownerId, catchId) {
    const existing = await getAllByCatchIdAndOwnerId(ownerId, catchId);

    console.log(existing);

    if (existing.length == 0) {
        throw new Error('You cannot remove a non-existent like');
    }

    return Like.findByIdAndDelete(existing[0]._id);
}

module.exports = {
    getCountByCatchId,
    getAllByCatchId,
    getAllByCatchIdAndOwnerId,
    createLike,
    deleteById,
};
