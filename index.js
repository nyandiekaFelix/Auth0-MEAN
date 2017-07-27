const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser');

const config = require('./server/config/main');

const PORT = config.PORT || 5555;
mongoose.connect(config.MONGO_URI);
const db = mongoose.connection;

db.on('open', () => {
    console.log('Connected to the database.');
});

db.on('error', (err) => {
    console.log(`Database error: ${err}`);
});


const app = express();
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

 if (config.NODE_ENV !== 'dev') {
    // Set static path to Angular app in dist
    app.use('/', express.static(path.join(__dirname, './dist')));

    // Let Angular handle routing
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '/dist/index.html'));
    });
} 

app.listen(PORT, () => {
	console.log(`Server running on localhost:${PORT}`);
});