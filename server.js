const express = require('express');
const mongoose = require('mongoose');

const app = express();

//DB configuration
const db = require('./config/keys').mongoURI;

//connect to mongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const port = process.env.port || 5000;

app.get('/', (req,res) => res.send('Hello!!'));

app.listen(port, () => console.log(`server listening on port ${port}`));