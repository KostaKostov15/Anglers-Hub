const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        email: { type: String, required: true, unique: true, trim: true },
        hashedPassword: {
            type: String,
            required: true,
            trim: true,
        },
        username: {
            type: String,
            required: [true, 'Username is required'],
            minLength: [3, 'Username must be at least 3 characters long'],
            trim: true,
        },
        imageUrl: { type: String },
    },
    { timestamps: true }
);

userSchema.index(
    { email: 1 },
    {
        collation: {
            locale: 'en',
            strength: 2,
        },
    }
);

const User = model('User', userSchema);

module.exports = User;
