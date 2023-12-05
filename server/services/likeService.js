const Like = require('../models/Like');

async function getAllByCatchId(catchId) {
    return Like.countDocuments({ catchId: catchId });
}

async function create(data) {
    return Like.create(data);
}

async function deleteById(id) {
    return Like.findByIdAndDelete(id);
}

module.exports = {
    getAllByCatchId,
    create,
    deleteById,
};
