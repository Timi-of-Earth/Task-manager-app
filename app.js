const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/dbconnect');
const { mongo } = require('mongoose');
require('dotenv').config();
const notFound = require('./middleware/not-found');

app.use(express.static('./public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded());


//Routes

app.use('/api/v1/tasks', tasks);

app.use(notFound);




const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI).then(() => console.log('CONNECTED TO DB...'));
        app.listen(port, console.log(`Listening on port ${port}...`));
    } catch (error) {
        console.log(error)
    };
}

start();