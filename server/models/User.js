const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    photoUrl: { type: String },
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
