const dataController = require('express').Router();

const { hasUser } = require('../middlewares/guards');
const { parseError } = require('../util/errorParser');

dataController.get('/', (req, res) => {
    res.json([]);
});

dataController.post('/', hasUser(), async (req, res) => {
    try {
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});

module.exports = dataController;
