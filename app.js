const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

require('./solution');

const citiesRoutes = require('./routes/citiesWeather');

app.use('/city', citiesRoutes);

app.listen(port);
