const {
    Schema,
    model,
    Types: { ObjectId },
} = require('mongoose');

const fishCatchSchema = new Schema(
    {
        reservoirName: { type: String, minLength: [3, 'Reservoir Name must be at least 3 characters'], trim: true },
        region: { type: String, required: [true, 'Region is required'], trim: true },
        fishSpecie: { type: String, required: [true, 'Fish Specie is required'], trim: true },
        fishWeight: {
            type: Number,
            required: [true, 'Fish Weight is required'],
            validate: {
                validator: (value) => value >= 0.1 && value <= 400,
                message: 'Fish Weight should be between 0.1 and 400',
            },
            trim: true,
        },
        imageUrl: {
            type: String,
            required: [true, 'Image URL is required'],
            // validate: {
            //     validator: (value) =>
            //         validator.isURL(value, {
            //             protocols: ['http', 'https', 'ftp'],
            //             require_tld: true,
            //             require_protocol: true,
            //         }),
            //     message: 'Must be a Valid URL',
            // },
            trim: true,
        },
        details: {
            type: String,
            maxLength: [100, 'Details should exceed 100 characters'],
            trim: true,
        },
        owner: { type: ObjectId, ref: 'User', required: true },
    },
    { timestamps: true }
);

const FishCatch = model('FishCatch', fishCatchSchema);

module.exports = FishCatch;
