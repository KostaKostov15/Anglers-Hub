const {
    Schema,
    model,
    Types: { ObjectId },
} = require('mongoose');

const likeSchema = new Schema(
    {
        catchId: { type: ObjectId, ref: 'FishCatch', required: true },
        ownerId: { type: ObjectId, ref: 'User', required: true },
    },
    { timestamps: true }
);

const Like = model('Like', likeSchema);

module.exports = Like;
