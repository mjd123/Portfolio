const express = require('express');
const path = require('path');
const wakeUpDyno = require('wokeDyno.js');
const app = express();
const DYNO_URL = 'https://marcusdenny.dev/';

// Serve static files....
app.use(express.static(__dirname + '/dist/portfolio'));

// Send all requests to index.html
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/portfolio/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000, () => {
    wakeUpDyno(DYNO_URL);
});
