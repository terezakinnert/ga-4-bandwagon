const express = require('express');
const app = express();
app.use(express.static(`${__dirname}/public`));

const { port, dbUri } = require('./config/environment');

const mongoose = require('mongoose');
mongoose.connect(dbUri);

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

const router = require('.config/router');
app.use('/api', router);
app.listen(port, () => console.log(`Express is listening on port ${port}`));

module.exports = app;
