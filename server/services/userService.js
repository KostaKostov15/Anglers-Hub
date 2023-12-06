const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const secret = process.env.JWT_SECRET;
const tokenBlacklist = new Set();

async function register(email, username, password) {
    if (password.length < 6) {
        throw new Error('Password should be at least 6 characters');
    }

    const existing = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });

    if (existing) {
        throw new Error('Email is taken');
    }

    const user = await User.create({
        email,
        username,
        hashedPassword: await bcrypt.hash(password, 10),
        imageUrl: '',
    });

    return createToken(user);
}

async function login(email, password) {
    const user = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (!user) {
        throw new Error('Incorrect email or password');
    }

    const match = await bcrypt.compare(password, user.hashedPassword);
    if (!match) {
        throw new Error('Incorrect email or password');
    }

    return createToken(user);
}

async function getById(userId) {
    return User.findById({ _id: userId });
}

async function logout(token) {
    tokenBlacklist.add(token);
}

function createToken(user) {
    const payload = {
        _id: user._id,
        email: user.email,
    };

    const token = {
        _id: user._id,
        email: user.email,
        accessToken: jwt.sign(payload, secret, { expiresIn: '5d' }),
    };
    return token;
}

function parseToken(token) {
    if (tokenBlacklist.has(token)) {
        throw new Error('Token is blacklisted');
    }

    return jwt.verify(token, secret);
}

module.exports = {
    register,
    login,
    logout,
    getById,
    parseToken,
};

// TERMINAL-COMMAND-SECRET: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
