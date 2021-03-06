const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./error-handler')();

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('./public'));

const recipes = require('./routes/recipes');

app.use('/api/recipes', recipes);
app.use(errorHandler);

module.exports = app;
