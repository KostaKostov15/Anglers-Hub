const likeController = require('express').Router();

const { hasUser } = require('../middlewares/guards');

const { deleteById, createLike, getCountByCatchId, getAllByCatchIdAndOwnerId } = require('../services/likeService');

const { parseError } = require('../util/errorParser');

likeController.get('/:id', async (req, res) => {
    try {
        const data = await getCountByCatchId(req.params.id);
        res.json(data);
    } catch (err) {
        const message = parseError(err);
        res.status(404).json({ message });
    }
});

likeController.get('/:id/is-liked', hasUser(), async (req, res) => {
    try {
        const data = await getAllByCatchIdAndOwnerId(req.user._id, req.params.id);
        res.json(data);
    } catch (err) {
        const message = parseError(err);
        res.status(404).json({ message });
    }
});

likeController.post('/', hasUser(), async (req, res) => {
    try {
        const like = Object.assign({ ownerId: req.user._id }, req.body);
        const data = await createLike(like);
        res.json(data);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});

likeController.delete('/:id', hasUser(), async (req, res) => {
    try {
        await deleteById(req.user._id, req.params.id);
        res.status(204).end();
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});

module.exports = likeController;
