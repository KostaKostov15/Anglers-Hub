const {
    Schema,
    model,
    Types: { ObjectId },
} = require('mongoose');

const fishCatchSchema = new Schema({
    reservoirName: { type: String, required: [true, 'Reservoir Name is required'] },
    region: { type: String, required: [true, 'Region is required'] },
    fishSpecie: { type: String, required: [true, 'Fish Specie is required'] },
    fishWeight: {
        type: Number,
        required: [true, 'Fish Weight is required'],
        validate: {
            validator: (value) => value >= 0.01 && value <= 400,
            message: 'Fish Weight should be between 0.1 and 400 [kg]',
        },
    },
    imageUrl: { type: String, required: [true, 'Image URL is required'] },
    details: { type: String, minLength: [10, 'Details should be at least 10 characters'] },
    owner: { type: ObjectId, ref: 'User', required: true },
});

const FishCatch = model('FishCatch', fishCatchSchema);

module.exports = FishCatch;
