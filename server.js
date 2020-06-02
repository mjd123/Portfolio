const express = require('express');
const path = require('path');
const wakeDyno = require('woke-dyno');
const app = express();
const DYNO_URL = 'https://md-port.herokuapp.com/';
//const port = process.env.PORT || 3000;
// // Serve static files....
// app.use(express.static(__dirname + '/dist/portfolio'));

// // Send all requests to index.html
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname + '/dist/portfolio/index.html'));
// });

// // default Heroku PORT
// //app.listen(process.env.PORT || 3000);

// app.listen(port, () => {
//     console.log(port);

//     wakeDyno(DYNO_URL).start(); // will start once server starts
// });

app.use(express.static(path.join(__dirname, 'dist/portfolio')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/portfolio/index.html'));
});

const port = process.env.PORT || 3000;
app.set('port', port);

//const server = http.createServer(app);
app.listen(port, () => {
    console.log('running', path.join(__dirname + '/dist/portfolio/index.html'));
    wakeDyno(DYNO_URL).start(); // will start once server starts
});
