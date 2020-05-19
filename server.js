const express = require('express');
const path = require('path');
//const wakeDyno = require('woke-dyno');
const app = express();
//const DYNO_URL = 'https://md-port.herokuapp.com/';

// Serve static files....
app.use(express.static(__dirname + '/dist/portfolio'));

// Send all requests to index.html
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/portfolio/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);
