const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Mongo Client
let MongoClient = require('mongodb').MongoClient;

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({
    extended: true,
    limit: '50mb'
}))

// Bodyparser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors middleware
app.use(cors());

// PORT init
const PORT = process.env.PORT || 5000;

// Database config
const CONNECTION_URL = require('./config/keys').mongoURI;

// Mongoose connect server init
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}, Database Connected.`))).catch((error) => console.log(`${error} did not connect`));

