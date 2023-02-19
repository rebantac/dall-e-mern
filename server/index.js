import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';


import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express()
app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(cors())
app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ limit: '50mb', extended: true }))

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

// Routes
app.get('/', async (req, res) => {
    res.send('Hello from Backend');
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGOBD_URL)
        app.listen(7777, () => console.log('Server on port http://localhost:7777'))
    } catch (error) {
        console.log(error)
    }
}

startServer();