const likeController = require('express').Router();

const { hasUser } = require('../middlewares/guards');

const { deleteById, create, getAllByCatchId } = require('../services/likeService');

const { parseError } = require('../util/errorParser');

likeController.get('/:catchId', async (req, res) => {
    try {
        const data = await getAllByCatchId(req.params.catchId);
        res.json(data);
    } catch (err) {
        const message = parseError(err);
        res.status(404).json({ message });
    }
});

likeController.post('/', hasUser(), async (req, res) => {
    try {
        const like = Object.assign({ ownerId: req.user._id }, req.body);
        const data = await create(like);
        res.json(data);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});

likeController.delete('/:id', hasUser(), async (req, res) => {
    const item = await getById(req.params.id);

    if (req.user._id != item.owner._id) {
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

module.exports = likeController;
