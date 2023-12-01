const FishCatch = require('../models/FishCatch');

async function getAll() {
    return FishCatch.find({});
}

async function getById(id) {
    return FishCatch.findById(id).populate('owner').lean();
}

async function getByUserId(userId) {
    return FishCatch.find({ owner: userId });
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

    return existing.save();
}

async function deleteById(id) {
    return FishCatch.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    getById,
    getByUserId,
    create,
    update,
    deleteById,
};
