const dataController = require('express').Router();
const { hasUser } = require('../middlewares/guards');

const { getAll, create, update, getById, deleteById } = require('../services/dataService');

const { parseError } = require('../util/errorParser');

dataController.get('/', async (req, res) => {
    try {
        const data = await getAll();
        res.json(data);
    } catch (err) {
        const message = parseError(err);
        res.status(404).json(message);
    }
});

dataController.post('/', hasUser(), async (req, res) => {
    try {
        const item = Object.assign({ owner: req.user._id }, req.body);
        const data = await create(item);
        res.json(data);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});

dataController.get('/:id', async (req, res) => {
    try {
        const data = await getById(req.params.id);
        res.json(data);
    } catch (err) {
        const message = parseError(err);
        res.status(404).json(message);
    }
});

dataController.put('/:id', hasUser(), async (req, res) => {
    const item = await getById(req.params.id);

    if (req.user._id != item.owner._id) {
        return res.status(403).json({ message: 'You cannot modify this record' });
    }

    try {
        const result = await update(req.params.id, req.body);
        res.json(result);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});

dataController.delete('/:id', hasUser(), async (req, res) => {
    const item = await getById(req.params.id);

    if (req.user._id != item.owner) {
        return res.status(403).json({ message: 'You cannot modify this record' });
    }

    try {
        await deleteById(req.params.id);
        res.status(204).end();
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});

module.exports = dataController;
