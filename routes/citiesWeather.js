const express = require('express');

const Router = express.Router();

Router.get('/', (req, res) => {
    const cityRequested = req.query.q;

    const cities = require('../cities');

    const cityExists = cities.find((city) => {
        return city.name === cityRequested;
    });

    if (!cityExists) {
        return res.status(200).json({
            status: 404,
            main: 'city does not exists',
        });
    }

    res.status(200).json({
        status: 200,
        main: {
            data: cityExists,
        },
    });
});

module.exports = Router;
