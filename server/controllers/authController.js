const authController = require('express').Router();
const { body, validationResult } = require('express-validator');

const { register, login, logout, getById } = require('../services/userService');
const { parseError } = require('../util/errorParser');
const { isGuest, hasUser } = require('../middlewares/guards');

authController.post(
    '/register',
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    isGuest(),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) {
                throw errors;
            }
            const token = await register(req.body.email, req.body.username, req.body.password);
            res.json(token);
        } catch (error) {
            const message = parseError(error);
            res.status(400).json({ message });
        }
    }
);

authController.post('/login', isGuest(), async (req, res) => {
    try {
        const token = await login(req.body.email, req.body.password);
        res.json(token);
    } catch (error) {
        const message = parseError(error);
        res.status(401).json({ message });
    }
});

authController.get('/:id/profile', hasUser(), async (req, res) => {
    try {
        const user = await getById(req.params.id);

        res.json(user);
    } catch (error) {
        const message = parseError(error);
        res.status(404).json({ message });
    }
});

authController.get('/logout', async (req, res) => {
    const token = req.token;
    await logout(token);
    res.status(204).end();
});

module.exports = authController;
