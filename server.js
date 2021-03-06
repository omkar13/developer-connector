const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users'); 
const profile = require('./routes/api/profile'); 
const posts = require('./routes/api/posts'); 

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
 
//DB configuration
const db = require('./config/keys').mongoURI;

//connect to mongoDB
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.port || 5000;

// passport middleware

app.use(passport.initialize());

//Passport Config
require('./config/passport.js')(passport);


app.listen(port, () => console.log(`server listening on port ${port}`));

