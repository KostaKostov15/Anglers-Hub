const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
    username: {
        type: String,
        required: [true, 'Username is required'],
        minLength: [3, 'Username must be at least 3 characters long'],
    },
    imageUrl: { type: String },
});

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
