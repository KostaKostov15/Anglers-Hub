const FishCatch = require('../models/FishCatch');

async function getAll() {
    return FishCatch.find({}).sort({ createdAt: -1 });
}

async function getLatest() {
    return FishCatch.find().sort({ createdAt: -1 }).limit(3);
}

async function getById(id) {
    return FishCatch.findById(id).populate('owner').lean();
}

async function getAllByUserId(userId) {
    return FishCatch.find({ owner: userId }).populate('owner').sort({ createdAt: -1 });
}

async function create(data) {
    return FishCatch.create(data);
}

async function update(id, data) {
    const existing = await FishCatch.findById(id);

    existing.reservoirName = data.reservoirName;
    existing.region = data.region;
    existing.fishSpecie = data.fishSpecie;
    existing.fishWeight = data.fishWeight;
    existing.imageUrl = data.imageUrl;
    existing.details = data.details;

    await existing.save();

    return await getById(id);
}

async function deleteById(id) {
    return FishCatch.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    getById,
    getAllByUserId,
    getLatest,
    create,
    update,
    deleteById,
};
