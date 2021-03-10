import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/map', (req, res) => {
    res.sendFile(path.join(path.resolve(), './public/index.html'));
});

export default app;
