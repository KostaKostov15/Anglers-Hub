const {
    Schema,
    model,
    Types: { ObjectId },
} = require('mongoose');

const fishCatchSchema = new Schema(
    {
        reservoirName: { type: String, required: [true, 'Reservoir Name is required'], trim: true },
        region: { type: String, required: [true, 'Region is required'], trim: true },
        fishSpecie: { type: String, required: [true, 'Fish Specie is required'], trim: true },
        fishWeight: {
            type: Number,
            required: [true, 'Fish Weight is required'],
            validate: {
                validator: (value) => value >= 0.01 && value <= 400,
                message: 'Fish Weight should be between 0.1 and 400 [kg]',
            },
            trim: true,
        },
        imageUrl: { type: String, required: [true, 'Image URL is required'], trim: true },
        details: { type: String, trim: true },
        owner: { type: ObjectId, ref: 'User', required: true },
    },
    { timestamps: true }
);

const FishCatch = model('FishCatch', fishCatchSchema);

module.exports = FishCatch;
