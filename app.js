// ./app.js

const express = require('express');

const routes = require('./routes/route');
console.log(routes)
const app = express();

app.set('view engine', 'pug');

app.use(routes);

// Define a port and start listening for connections.

const port = 8080;

app.listen(port, () => console.log(`Listening on port ${port}...`));
