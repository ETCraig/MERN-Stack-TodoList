const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./Routes/API/Items');

const app = express();

//Body Parser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/items', items);

const Port = process.env.PORT || 5000;

app.listen(Port, () => console.log(`Server working on port ${Port}`));