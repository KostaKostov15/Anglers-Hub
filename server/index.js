require('dotenv').config();

const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const authController = require('./controllers/authController');
const dataController = require('./controllers/dataController');
const likeController = require('./controllers/likeController');
const trimBody = require('./middlewares/trimBody');
const session = require('./middlewares/session');

const mongoString = process.env.DATABASE_URL;
const PORT = process.env.PORT;

start();
async function start() {
    await mongoose.connect(mongoString);
    console.log('Database connected');

    const app = express();

    app.use(express.json());

    app.use(
        cors({
            origin: ['http://localhost:5173'],
        })
    );
    app.use(trimBody());
    app.use(session());

    app.get('/', (req, res) => {
        res.json({ message: 'REST Service Operational Response' });
    });

    app.use('/users', authController);
    app.use('/data', dataController);
    app.use('/like', likeController);

    app.listen(PORT, () => {
        console.log(`Server started on port: ${PORT}`);
    });
}
